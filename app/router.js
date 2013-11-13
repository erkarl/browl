var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
  this.route('index', { path: '/' });
  this.resource('post', { path: "/post/:id" }, function(){
  });

  this.resource('admin', function(){
      this.route('new');
  });

});

export default Router;
