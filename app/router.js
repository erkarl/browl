var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
  this.resource('post', { path: "/post/:id" }, function(){
  });

  this.resource('admin', function(){
      this.route('new');
      this.route('edit', { path: "/edit/:id" });
      this.route('users');
  });

});

export default Router;
