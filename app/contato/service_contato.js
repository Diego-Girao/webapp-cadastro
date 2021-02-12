class ContatoService{
    constructor(){
        this.contacts = [
            {id:1, name:'João', email:'joao@test.com', phone:"33221100"},
            {id:2, name:'Maria', email:'maria@test.com', phone:"33221111"},
            {id:3, name:'Adão', email:'adao@test.com', phone:"33221122"},
            {id:4, name:'Eva', email:'eva@test.com', phone:"33221133"},
            {id:5, name:'Pedro', email:'pedro@test.com', phone:"33221144"},
        ]

        this.findAll = this.findAll.bind(this);
        this.filterOdd = this.filterOdd.bind(this);
        this.save = this.save.bind(this);
        this.insert = this.insert.bind(this);
        this.update = this.update.bind(this);
        this.remove = this.remove.bind(this);
    }

    findById(id){
        let contact = null;
        for(let index = 0; index < this.contacts.length; index++){
            if(this.contacts[index].id == id){
                contact = this.contacts[index];
                break;
            }
        }
        return contact;
    }

    findAll(){
        return this.contacts;
    }

    filterOdd(){
        let result = [];
        let index = 0;
        while(index < this.contacts.length){
            if((index +1) %2 != 0){
                result.push(this.contacts[index]);
            }
            index = index +1;
        }

        return result;
    }
    save(contact){
        if(!contact.id){
            this.insert(contact);
        }else{
            this.update(contact);
        }
    }
    insert(contact){
        contact.id = new Date().getTime();
        this.contacts.push(contact);
    }
    update(contact){

        let index = 0;
        while(index < this.contacts.length){
            if(this.contacts[index].id == contact.id){
                this.contacts[index].name = contact.name;
                this.contacts[index].email = contact.email;
                this.contacts[index].phone = contact.phone;
                break;
            }
            index =  index +1;
        }
    }
    remove(id){
        this.contacts = this.contacts.filter(contact => contact.id != id);
        //pesquisar a posição do elemento no array
        // let pos = -1;
        // let index = 0;
        // while(index < this.contacts.length){
        //     if(this.contacts[index].id == id){
        //         pos = id;
        //         break;
        //     }
        //     index = index =1;
        // }
        // //remover o elemento do array
        // if(pos > -1){
        //     this.contacts.splice(pos,1); 
        // }
    }


}

module.exports = new ContatoService();