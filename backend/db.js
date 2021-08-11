const db = require('mongoose');

async function connect(url){
    db.Promise = global.Promise;

    await db.connect(url,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}

module.exports = connect; 