const service = require('./app/contato/service_contato');

const contatos = service.findAll();

console.log(contatos);