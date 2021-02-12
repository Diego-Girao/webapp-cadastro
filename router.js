const routes = [
    require('./app/contato/router_contato')
]

function configureRoutes(app){
        for(let route of routes){
            route.configure(app);
        }
}

module.exports = {
    configureRoutes
}