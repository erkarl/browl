var IndexController = Ember.ArrayController.extend({
    actions: {
        deleteEntry: function(post){
          post.removePost();
        }
    }
});

export default IndexController;
