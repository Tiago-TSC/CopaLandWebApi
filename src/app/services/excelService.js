const XlsxTemplate = require('xlsx-template');
const fs = require('fs');
const path = require('path');
const moment = require('moment');

const { templatesPath, tmpPath } = require('../helpers/pathHelper');

const generateExcelFile = (values, templateName) => {
  return new Promise(async (resolve, reject) => {
    await fs.readFile(path.resolve(templatesPath, `${templateName}.xlsx`), (err, data) => {
      if (err) {
        reject(err);
      } else {
        const template = new XlsxTemplate(data);
        const sheetNumber = 1;

        template.substitute(sheetNumber, values);

        const response = template.generate({ type: 'uint8array' });
        const fileName = `${templateName}${moment().format('YYYYMMDDHHmmss')}.xlsx`;

        fs.writeFile(path.join(tmpPath, fileName), response, err2 => {
          if (err2) {
            reject(err2);
          }

          resolve();
        });
      }
    });
  });
};

module.exports = {
  generateExcelFile,
};
