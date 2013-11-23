var App;

module('Acceptances - Index', {
  setup: function(){
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('base index renders', function(){

  visit('/').then(function(){
    var title = find('h2#title');
    equal(title.text(), 'Posts');
  });
});
