var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
  this.resource('post', { path: "/post/:id" }, function(){
  });
});

export default Router;
