var App;

module('Acceptances - AdminIndex', {
  setup: function(){
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('admin index renders', function(){

  visit('/admin').then(function(){
    var title = find('h2#title');
    equal(title.text(), 'Admin');
  });
});
