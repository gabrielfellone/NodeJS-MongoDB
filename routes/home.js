module.exports = function(app){
    var homeCont = app.controllers.home;
    app.get('/', homeCont.index);
    app.post('/login', homeCont.login);
    app.get('/logout', homeCont.logout);
    app.post('/novoUsuario', homeCont.novoUsuario);

}