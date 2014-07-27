var Person = require('./person');
var Models = {};

Models.Person = Person;

var host = {firstname: 'Bob', lastname: 'Barker'};


// Models.Person.create(host, function(err,person){
// 	console.log('Come on Down!');
// });


// Models.Person.all(function(err, people){
//  console.log(people);
// });


// Models.Person.findBy("id", 9, function(err, person){
//  	console.log("found", person);
//  	person.destroy(function(err,res){
//  		console.log('EXTERMINATE!', person);
// 	});
// });


Models.Person.findBy("id", 9, function(err, person){
   console.log("found", person);
    person.update({firstname: "sam", lastname: "creek"},
    function(err, person){
      console.log("UPDATED:", person);
  });
});


module.exports = Models;