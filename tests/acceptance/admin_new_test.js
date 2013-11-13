var App;

module('Acceptances - AdminNew', {
  setup: function(){
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('admin new renders', function(){

  visit('/admin/new').then(function(){
    var title = find('h2#title');
    equal(title.text(), 'New Post');
  });
});
