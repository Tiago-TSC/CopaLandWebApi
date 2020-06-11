const sequelize = require('./dataBaseService');

const PositionName = require('../constants/PositionName');

const getPosition = positionName => {
  let position = {};

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

  return position;
};

const getCountingPositionsQuery = (
  positionName,
  firstYear,
  lastYear,
  firstEdition,
  lastEdition,
) => {
  let yearClause = '';
  let editionClause = '';

  const position = getPosition(positionName);

  if (firstYear && lastYear) {
    yearClause = `AND A3."year" BETWEEN ${firstYear} AND ${lastYear}`;
  }

  if (firstEdition && lastEdition) {
    editionClause = `AND A3."title" BETWEEN '${firstEdition}' AND '${lastEdition}'`;
  }

  const query = `(SELECT CAST(COUNT(*) AS INTEGER) FROM classifications A0
    INNER JOIN positions A1 ON A0."positionId" = A1."id"
    INNER JOIN players A2 ON A0."playerId" = A2."id"
    INNER JOIN editions A3 ON A0."editionId" = A3."id"
    WHERE
      A1."description" = '${position.number}º'
      AND A2."nickname" = T1."nickname"
      ${yearClause}
      ${editionClause}
    ) ${position.description}`;

  return query;
};

const getQuery = params => {
  let yearClause = '';
  let editionClause = '';

  const { firstYear, lastYear, firstEdition, lastEdition } = params;

  if (firstYear && lastYear) {
    yearClause = `AND T2."year" BETWEEN ${firstYear} AND ${lastYear}`;
  }

  if (firstEdition && lastEdition) {
    editionClause = `AND T2."title" BETWEEN '${firstEdition}' AND '${lastEdition}'`;
  }

  const query = `SELECT
    T1."nickname" Jogador,
    CAST(SUM(T3."points") AS INTEGER) Pontos,
    ${getCountingPositionsQuery(PositionName.first, firstYear, lastYear)},
    ${getCountingPositionsQuery(PositionName.second, firstYear, lastYear)},
    ${getCountingPositionsQuery(PositionName.third, firstYear, lastYear)},
    ${getCountingPositionsQuery(PositionName.fourth, firstYear, lastYear)}
  FROM classifications T0
  INNER JOIN players T1 ON T0."playerId" = T1."id"
  INNER JOIN editions T2 ON T0."editionId" = T2."id"
  INNER JOIN positions T3 ON T0."positionId" = T3."id"
  WHERE
    1 = 1
    ${yearClause}
    ${editionClause}
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

  return query;
};

const get = async params => {
  const query = getQuery(params);

  const response = await sequelize.query(query);
  return response[0];
};

module.exports = {
  get,
};
