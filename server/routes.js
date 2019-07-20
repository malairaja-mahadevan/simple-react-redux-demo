const path = require('path');
const fs = require('fs');

module.exports = function(app) {
    app.route('/api/users').get((req,res)=>{
        const obj = fs.readFileSync(path.resolve('server/json/users.json'));
        const json = JSON.parse(obj);
        res.header("Access-Control-Allow-Origin", "*");
        res.send(json);
    });
}