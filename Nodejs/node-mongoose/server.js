var mongoose = require('mongoose'),
    assert = require('assert');

var Dishes = require('./models/dishes');
var Promotions = require('./models/promotions');
var Leaders = require('./models/leadership');

// Connection URL
var url = 'mongodb://localhost:27017/conFusion';
mongoose.connect(url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log("Connected correctly to server");

    // create a new user
    var newDish = Dishes({
        name: 'Uthapizza',
        image: 'images/uthapizza.png',
        category: 'mains',
        label: 'Hot',
        price: '4.99',
        description: 'A unique . . .',
        comments: [
            {
                rating: 5,
                comment: 'Imagine all the eatables, living in conFusion!',
                author: 'John Lemon'
            },
             {
                rating: 4,
                comment: 'Sends anyone to heaven, I wish I could get my mother-in-law to eat it!',
                author: 'Paul McVites'
            }
        ]
    });
    
    var newPromotion = Promotions({
        name:'Weekend Grand Buffet',
        image:'images/buffet.png',
        label:'',
        price:'$19.99',
        description:'Featuring . . .'
    });
    
     var newLeader = Leaders({
        name:'Peter Pan',
        image:'images/alberto.png',
        designation:'Chief Epicurious Officer',
        abbr:'CEO',
        description:'Our CEO, Peter, . . .'
    });

    // save the user
    newDish.save(function (err) {
        if (err) throw err;
        console.log('Dish created!');

        // get all the users
        Dishes.find({}, function (err, dishes) {
            if (err) throw err;

            // object of all the users
            console.log(dishes);
                        db.collection('dishes').drop(function () {
                db.close();
            });
        });
    });
    
    newPromotion.save(function(err){
        if(err) throw err;
        console.log('Promotion Created!');
        
        //get all the promotions
        Promotions.find({}, function(err, promotions){
            if(err) throw err;
            
            console.log(promotions);
            db.collection('promotions').drop(function (){
                db.close();
            });
        });
    });
    
    newLeader.save(function (err){
        if(err) throw err;
        console.log('Leader created!');
        
        Leaders.find({}, function(err, leaders){
            if(err) throw err;
            console.log(leaders);
            db.collection('leaders').drop(function(){
                db.close();
            });
        });        
    });
});