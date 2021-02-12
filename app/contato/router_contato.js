const controller = require('./controller_contato');

class ContatoRouter{

    configure(router){
        router.get('/contatos',controller.list);
        router.get('/contatos/formulario',controller.form);
        router.post('/contatos/salvar',controller.save);
        router.get('/contatos/remover/:id',controller.remove);
    }
}

module.exports = new ContatoRouter();