exports.getIdByDescription = async (id, description, fieldName, model) => {
  let responseId = null;

  if (!isNaN(id)) {
    responseId = id;
  } else {
    if (description) {
      const response = await model.findAll({ where: { [fieldName]: description } });

      if (response.length > 0) {
        responseId = response[0].id;
      }
    }
  }

  return responseId;
};
