var UsersRoute = Ember.Route.extend({
    model: function(params){
        return this.get('store').find('user', params.id);
    }
});

export default UsersRoute;
