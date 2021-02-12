const service = require('./service_contato');

class ContatoController{

    list(request, response){

        const contacts = service.findAll();
        response.render('contato/list.html',{contacts});
    }

    form(request,response){
        let id = parseInt(request.query.id) || 'novo';
        let contact = null;
        if(id && id !== 'novo'){
            contact = service.findById(id);
        }
        response.render('contato/formulario.html',{contact});
    }

    save(request, response){
        const {id, name, email, phone} = request.body;
        // const id = request.body.id;
        // const name = request.body.name;
        // const email = request.body.email;
        // const phone = request.body.phone;

        const contact = {
            id,
            name,
            email,
            phone
        }
        service.save(contact);
        response.redirect('/contatos');
    }
    remove( request, response){
        const id = request.params.id;
        service.remove(id);
        response.redirect('/contatos');
    }
}

module.exports = new ContatoController();