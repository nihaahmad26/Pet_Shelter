const PersonController = require('../controllers/person.controller');
module.exports = function(app){
    app.get('/api', PersonController.index);
    app.post('/api/pet', PersonController.createPerson);     /* This is new */
    app.get('/api/pet/', PersonController.getAllPeople);
    app.get('/api/pet/:id', PersonController.getPerson);
    app.put('/api/pet/:id', PersonController.updatePerson);
    app.delete('/api/pet/:id', PersonController.deletePerson);



}



