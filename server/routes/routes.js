const PlayerController = require('../controllers/controller');

module.exports = function(app){
    app.get('/api/players', PlayerController.findAllPlayers);
    app.post('/api/players/new', PlayerController.createPlayer);
    app.get('/api/players/:id', PlayerController.findOnePlayer);
    app.put('/api/players/:id', PlayerController.updatePlayer);
    app.delete('/api/players/:id', PlayerController.deletePlayer);
}