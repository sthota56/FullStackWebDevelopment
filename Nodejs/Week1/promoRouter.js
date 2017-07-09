var express = require('express');

var app = module.exports = express();
    
app.get('/',function(req,res,next){
        res.end('Will send all the promotions to you!');
});

app.post('/',function(req, res, next){
     res.end('Will add the promotion: ' + req.body.name + ' with details: ' + req.body.description);
});

app.delete('/',function(req, res, next){
        res.end('Deleting all promotions');
});

app.get('/:promoId',function(req,res,next){
        res.end('Will send details of the promotion: ' + req.params.promoId +' to you!');
})

app.put('/:promoId',function(req, res, next){
    res.write('Updating the promotion: ' + req.params.promoId + '\n');
    res.end('Will update the promotion: ' + req.body.name + 
            ' with details: ' + req.body.description);
})

app.delete('/:promoId', function(req, res, next){
        res.end('Deleting promotion: ' + req.params.promoId);
});