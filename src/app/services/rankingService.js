const sequelize = require('./dataBaseService');

const PositionName = require('../constants/PositionName');
const RankingType = require('../constants/RankingType');

const getIdentifier = rankingType => {
  let identifier = {
    label: 'Jogador',
    column: 'T1."nickname" Jogador',
    join: '',
    labelClause: '',
    positionJoin: '',
    positionClause: 'AND A2."nickname" = T1."nickname"',
  };

  if (rankingType === RankingType.player) {
    return identifier;
  }

  const labelClause = `AND (T2."id" >= T4."initialEditionId" OR T4."initialEditionId" IS NULL)
  AND (T2."id" <= T4."finalEditionId" OR T4."finalEditionId" IS NULL)`;
  const positionClause = `AND (A3."id" >= A4."initialEditionId" OR A4."initialEditionId" IS NULL)
	  AND (A3."id" <= A4."finalEditionId" OR A4."finalEditionId" IS NULL)`;
  let join = `INNER JOIN associations T4 ON T1."id" = T4."playerId"
    INNER JOIN cities T5 ON T4."cityId" = T5."id"`;
  let positionJoin = `INNER JOIN associations A4 ON A2."id" = A4."playerId"
    INNER JOIN cities A5 ON A4."cityId" = A5."id"`;

  if (rankingType === RankingType.city) {
    identifier = {
      label: 'Cidade',
      column: 'T5."name" Cidade',
      join,
      labelClause,
      positionJoin,
      positionClause: `AND A5."name" = T5."name" ${positionClause}`,
    };

    return identifier;
  }

  join += ' INNER JOIN states T6 ON T5."stateId" = T6."id"';
  positionJoin += ' INNER JOIN states A6 ON A5."stateId" = A6."id"';

  if (rankingType === RankingType.state) {
    identifier = {
      label: 'Estado',
      column: 'T6."name" Estado',
      join,
      labelClause,
      positionJoin,
      positionClause: `AND A6."name" = T6."name" ${positionClause}`,
    };

    return identifier;
  }

  join += ' INNER JOIN regions T7 ON T6."regionId" = T7."id"';
  positionJoin += ' INNER JOIN regions A7 ON A6."regionId" = A7."id"';

  if (rankingType === RankingType.region) {
    identifier = {
      label: 'Regiao',
      column: 'T7."name" Regiao',
      join,
      labelClause,
      positionJoin,
      positionClause: `AND A7."name" = T7."name" ${positionClause}`,
    };

    return identifier;
  }

  return null;
};

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

const getCountingPositionsQuery = (positionName, params, positionJoin, positionClause) => {
  let yearClause = '';
  let editionClause = '';
  let generationClause = '';

  const { main, firstYear, lastYear, firstEdition, lastEdition, generationId } = params;

  const position = getPosition(positionName);

  if (firstYear && lastYear) {
    yearClause = `AND A3."year" BETWEEN ${firstYear} AND ${lastYear}`;
  }

  if (firstEdition && lastEdition) {
    editionClause = `AND A3."title" BETWEEN '${firstEdition}' AND '${lastEdition}'`;
  }

  if (main) {
    generationClause = `AND A3."generationId" =
      (SELECT "generationId" FROM editions WHERE "year" = (SELECT MAX("year") FROM editions))`;
  } else if (generationId) {
    generationClause = `AND A3."generationId" = ${generationId}`;
  }

  const query = `(SELECT CAST(COUNT(*) AS INTEGER) FROM classifications A0
    INNER JOIN positions A1 ON A0."positionId" = A1."id"
    INNER JOIN players A2 ON A0."playerId" = A2."id"
    INNER JOIN editions A3 ON A0."editionId" = A3."id"
    ${positionJoin}
    WHERE
      A1."description" = '${position.number}º'
      ${positionClause}
      ${yearClause}
      ${editionClause}
      ${generationClause}
    ) ${position.description}`;

  return query;
};

const getQuery = params => {
  let yearClause = '';
  let editionClause = '';
  let generationClause = '';

  const {
    main,
    rankingType,
    firstYear,
    lastYear,
    firstEdition,
    lastEdition,
    generationId,
  } = params;

  const identifier = getIdentifier(rankingType);

  if (identifier) {
    const { label, column, join, labelClause, positionJoin, positionClause } = identifier;

    if (firstYear && lastYear) {
      yearClause = `AND T2."year" BETWEEN ${firstYear} AND ${lastYear}`;
    }

    if (firstEdition && lastEdition) {
      editionClause = `AND T2."title" BETWEEN '${firstEdition}' AND '${lastEdition}'`;
    }

    if (main) {
      generationClause = `AND T2."generationId" =
      (SELECT "generationId" FROM editions WHERE "year" = (SELECT MAX("year") FROM editions))`;
    } else if (generationId) {
      const parsedGenerationId = parseInt(generationId);

      if (!Number.isNaN(parsedGenerationId)) {
        generationClause = `AND T2."generationId" = ${generationId}`;
      } else {
        throw new Error('O id da geração deve ser igual a um número');
      }
    }

    const query = `SELECT
    ${column},
    CAST(SUM(T3."points") AS INTEGER) Pontos,
    ${getCountingPositionsQuery(PositionName.first, params, positionJoin, positionClause)},
    ${getCountingPositionsQuery(PositionName.second, params, positionJoin, positionClause)},
    ${getCountingPositionsQuery(PositionName.third, params, positionJoin, positionClause)},
    ${getCountingPositionsQuery(PositionName.fourth, params, positionJoin, positionClause)}
  FROM classifications T0
  INNER JOIN players T1 ON T0."playerId" = T1."id"
  INNER JOIN editions T2 ON T0."editionId" = T2."id"
  INNER JOIN positions T3 ON T0."positionId" = T3."id"
  ${join}
  WHERE
    1 = 1
    ${labelClause}
    ${yearClause}
    ${editionClause}
    ${generationClause}
  GROUP BY
    ${label}
  HAVING
    SUM(T3."points") > 0
  ORDER BY
    Pontos DESC,
    Primeiro DESC,
    Segundo DESC,
    Terceiro DESC,
    Quarto DESC,
    ${label}`;

    return query;
  } else {
    throw new Error('Identificador incorreto');
  }
};

const get = async params => {
  const query = getQuery(params);

  const response = await sequelize.query(query);
  return response[0];
};

module.exports = {
  get,
};
