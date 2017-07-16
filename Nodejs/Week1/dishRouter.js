var express = require('express');
var bodyparser = require('body-parser');

var dishRouter = express.Router();
dishRouter.use(bodyparser.json());

dishRouter.route('/')



.get(function(req,res,next){
        res.end('Will send all the Dishes to you!');
})

.post(function(req, res, next){
     res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
})

.delete(function(req, res, next){
        res.end('Deleting all dishes');
});

dishRouter.route('/:dishId')


.get(function(req,res,next){
        res.end('Will send details of the dish: ' + req.params.dishId +' to you!');
})

.put(function(req, res, next){
    res.write('Updating the dish: ' + req.params.dishId + '\n');
    res.end('Will update the dish: ' + req.body.name + 
            ' with details: ' + req.body.description);
})

.delete(function(req, res, next){
        res.end('Deleting dish: ' + req.params.dishId);
});

module.exports = dishRouter;