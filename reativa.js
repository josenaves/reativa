planetas = new Meteor.Collection("planetas");

if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Bem-vindo ao incrível mundo da programação reativa.";
  };

  Template.planetario.planetas = function() {
  	return planetas.find();
  };

  Template.hello.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
