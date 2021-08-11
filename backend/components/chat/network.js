const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

//chats
router.get('/:userId', function(req, res){
    
    const filterMessages = req.query.user || null;

    controller.listChats(req.params.userId)
        .then((users)=>{
            response.success(req, res, users, 200);
        }) 
        .catch(e=>{
            response.error(req, res, "Error inesperado", 500, e);
        });
});


router.post('/', function(req, res){
    controller.addChat(req.body.users)
    .then((createChat)=>{
        response.success(req, res, "Created Correctfully", 201, createChat);
    })
    .catch(e =>{
        response.error(req, res, "Error inesperado", 500, e);
    });
});


router.delete('/:id', (req, res) => {
    
    controller.deleteChat(req.params.id)
        .then(()=>{
            response.success(req, res, `Chat ${req.params.id} eliminado`, 200);
        })
        .catch( e =>{
            response.error(req, res, "Error interno", 500, e);
        });
});

router.patch('/:id', (req,res)=>{
    console.log(req.params.id);
    controller.updateChat(req.param.id, req.body.text)
        .then((data)=>{
            response.success(req, res, data, 200)
        })
        .catch(e=>{
            response.error(req, res, "Error Interno", 500, e);
        });
    res.send('Ok');
});


module.exports = router