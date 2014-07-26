var Person = require('./person');
var Models = {};

Models.Person = Person;

var host = {firstname: 'Bob', lastname: 'Barker'};


//Models.Person.create(host, function(err,person){
//	console.log('Come on Down!');
//});

//Models.Person.destroy(function(){
//  console.log('person deleted!');
//});

//Models.Person.all(function(err, people){
//  console.log(people);
//});

//Models.Person.findBy("id", 1, function(err, person){
//  console.log("found", person);
//  person.update({firstname: "sam", lastname: "creek"}, function(err, person){
//   console.log("UPDATED:", person)
// });
//})

Models.Person.findBy('lastname','Barker', function(err,foundPerson){
	console.log('Found: ', foundPerson);
});

module.exports = Models;