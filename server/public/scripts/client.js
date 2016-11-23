var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/link', {
      templateUrl: '/views/templates/link.html',
      controller: 'LinkController',
      controllerAs: 'link'
    })
    .when('/gannondorf' ,{
      templateUrl: '/views/templates/gannondorf.html',
      controller: 'GannondorfController',
      controllerAs: 'gannondorf'
    })

    .when('/zelda' ,{
      templateUrl: '/views/templates/zelda.html',
      controller: 'ZeldaController',
      controllerAs: 'zelda'
    })

    .otherwise({
      redirectTo: 'link'
    });

}]);

app.controller('LinkController', function() {
  console.log('link controller running');
  var self = this;
  self.message = "Through The Legend of Zelda series, Link is depicted as a child, teenager, or young adult of the Hylian race, originating from the fictional land of Hyrule. Link often travels through Hyrule, defeating creatures, evil forces, and the series' primary antagonist, Ganon, while attempting to save Princess Zelda and Hyrule. To defeat Ganon, Link usually requires the mystic Master Sword and Light Arrows, or a similar legendary weapon, obtained after many trials and battles. In the course of his journey he will typically acquire various other magical objects or items, including musical instruments and weaponry.";

});

app.controller('GannondorfController', function() {
  console.log('gannondorf controller running');
  var self = this;
  self.message = "In the games, the character alternates between two forms: a massive, demonic boar-like creature and a tall, heavily-built Gerudo, a race of humanoid desert brigands. Ganondorf is the archenemy of the series' central protagonist, Link, and the leader of the Gerudo. His specific motives vary from game to game, but most often involve capturing Princess Zelda and planning to conquer Hyrule and the world at large. To this end, he seeks the Triforce, a powerful magical relic that grants any wish its bearer desires, and usually manipulates several other villains to realize his ambitions.In most games, he already possesses the Triforce of Power, a third of the full Triforce that gives him godlike strength, boundless mystical power and makes him invulnerable to all but the most powerful sacred weapons, such as the Master Sword. However, Ganondorf's lust for power can never be satisfied. The character has been well received by critics and fans alike, becoming one of the most popular and recognizable villains in gaming.";

});

app.controller('ZeldaController', function() {
  console.log('zelda controller running');
  var self = this;
  self.message = "Though she is the eponymous character, her story role is often that of donor or damsel in distress. The player instead controls Link, the series' central protagonist, and usually focuses on defeating Ganon (or Ganondorf), the series' main antagonist.[3] Many Zelda games adopt the classic princess-and-dragon premise of chivalric literature: Zelda is usually kidnapped or imprisoned by Ganon, prompting Link to come to her rescue. Some games in the series have emphasized Zelda's magical abilities and importance to the functioning of Hyrule, demonstrating that she is more than capable of taking care of herself. In several games, she is one of the Sages, whose work is essential to defeating Ganon; in others, she adopts alternative personae in order to take a more active role in her kingdom; and in some, she is a self-sacrificing princess regnant. Zelda's alter egos include the ninja Sheik in Ocarina of Time and the pirate Tetra in The Wind Waker and Phantom Hourglass.!";
});
