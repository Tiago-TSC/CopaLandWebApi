const sequelize = require('./dataBaseService');

const PositionName = require('../constants/PositionName');

const getCountingPositionsQuery = (positionName, firstYear, lastYear) => {
  let position = {};
  let yearClause = '';

  switch (positionName) {
    case PositionName.first:
      position = { number: 1, description: 'Primeiro' };
      break;
    case PositionName.second:
      position = { number: 2, description: 'Segundo' };
      break;
    case PositionName.third:
      position = { number: 3, description: 'Terceiro' };
      break;
    case PositionName.fourth:
      position = { number: 4, description: 'Quarto' };
      break;
  }

  if (firstYear && lastYear) {
    yearClause = `AND A3."year" BETWEEN ${firstYear} AND ${lastYear}`;
  }

  const query = `(SELECT COUNT(*) FROM classifications A0
    INNER JOIN positions A1 ON A0."positionId" = A1."id"
    INNER JOIN players A2 ON A0."playerId" = A2."id"
    INNER JOIN editions A3 ON A0."editionId" = A3."id"
    WHERE A1."description" = '${position.number}º' AND A2."nickname" = T1."nickname" ${yearClause}) ${position.description}`;

  return query;
};

const get = async () => {
  const query = `SELECT
    T1."nickname" Jogador,
    SUM(T3."points") Pontos,
    ${getCountingPositionsQuery(PositionName.first, 2008, 2020)},
    ${getCountingPositionsQuery(PositionName.second, 2008, 2020)},
    ${getCountingPositionsQuery(PositionName.third, 2008, 2020)},
    ${getCountingPositionsQuery(PositionName.fourth, 2008, 2020)}
  FROM classifications T0
  INNER JOIN players T1 ON T0."playerId" = T1."id"
  INNER JOIN editions T2 ON T0."editionId" = T2."id"
  INNER JOIN positions T3 ON T0."positionId" = T3."id"
  WHERE
    T2."year" BETWEEN 2008 AND 2020
  GROUP BY
    Jogador
  HAVING
    SUM(T3."points") > 0
  ORDER BY
    Pontos DESC,
    Primeiro DESC,
    Segundo DESC,
    Terceiro DESC,
    Quarto DESC,
    Jogador`;

  const response = await sequelize.query(query);
  return response[0];
};

module.exports = {
  get,
};
