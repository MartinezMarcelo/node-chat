const express = require('express');
const router = express.Router();
const multer = require('multer');
const response = require('../../network/response');
const controller = require('./controller');


const upload = multer({
    dest: 'uploads/files/',
}); 

//messages
router.get('/', function(req, res){
    // res.send('Lista de Mensajes')
    const filterMessages = req.query.user || null;

    controller.getMessages(filterMessages)
        .then((messageList)=>{
            response.success(req, res, messageList, 200);
        }) 
        .catch(e=>{
            response.error(req, res, "Error inesperado", 500, e);
        });
});


router.post('/', upload.single('file'), function(req, res){
    controller.addMessage(req.body.chat, req.body.user, req.body.message, req.file)
    .then((createMessage)=>{
        response.success(req, res, "Created Correctfully", 201, createMessage);
    })
    .catch(e =>{
        response.error(req, res, "Error inesperado", 500, e);
    });
});


router.delete('/:id', (req, res) => {
    
    controller.deleteMessage(req.params.id)
        .then(()=>{
            response.success(req, res, `Usuario ${req.params.id} eliminado`, 200);
        })
        .catch( e =>{
            response.error(req, res, "Error interno", 500, e );
        });
});

router.patch('/:id', (req,res)=>{
    console.log(req.params.id);
    controller.updateMessage(req.param.id, req.body.text)
        .then((data)=>{
            response.success(req, res, data, 200)
        })
        .catch(e=>{
            response.error(req, res, "Error Interno", 500, e);
        });
    res.send('Ok');
});


module.exports = router