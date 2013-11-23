var EditRoute = Ember.Route.extend({
    model: function(params){
        // console.log('getting model for AdminEditRoute');
        return this.get('store').find('post', params.id);
    }
});

export default EditRoute;
