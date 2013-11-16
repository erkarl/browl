var EditRoute = Ember.Route.extend({
    model: function(params){
        return this.get('store').find('post', params.id);
    }
});

export default EditRoute;
