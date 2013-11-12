import Post from 'appkit/routes/post';

var route;
module("Unit - PostRoute", {
  setup: function(){
    var container = isolatedContainer([
      'route:post'
    ]);

    route = container.lookup('route:post');
  }
});

test("it exists", function(){
  ok(route);
  ok(route instanceof Post);
});
