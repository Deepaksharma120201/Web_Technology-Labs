const validator = require('xsd-schema-validator');

const xmlString = require('fs').readFileSync('data.xml', 'utf8');
const xsdPath = 'data.xsd';

validator.validateXML(xmlString, xsdPath)
  .then(result => {
    if (result.valid) {
      console.log("XML file is validated!");
    } else {
      console.error("Something went wrong!!", result.errors);
    }
  })
  .catch(error => {
    console.error("Validation error:", error);
  });