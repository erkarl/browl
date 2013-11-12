import New from 'appkit/routes/admin/new';

var route;
module("Unit - NewPostRoute", {
  setup: function(){
    var container = isolatedContainer([
      'route:admin/new'
    ]);

    route = container.lookup('route:admin/new');
  }
});

test("it exists", function(){
  ok(route);
  ok(route instanceof New);
});
