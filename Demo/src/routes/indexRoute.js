const index = require("../controllers/indexController");
module.exports = function(app) {
    app.get('/', index.main);
}