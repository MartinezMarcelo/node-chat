const chalk = require('chalk')

exports.success = (req, res, message, status, details)=>{
    //console.log(chalk.red(chalk.underline.bgYellow('[response error]: ') + (details || "No hay errores")));
        res
        .status(status || 200)
        .send({
            error: '',
            body: message,
            data: details  
        });
    
}

exports.error = (req, res, error, status, details)=>{
    console.log(chalk.red(chalk.underline.bgYellow('[response error]: ') + (details || "No hay errores")));

    res
    .status(500)
    .send({
        error: error,
        body: '',
    });
}