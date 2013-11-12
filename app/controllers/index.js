var IndexController = Ember.ArrayController.extend({
    actions: {
        deleteEntry: function(post){
          post.deleteRecord();
          post.save();
        }
    }
});

export default IndexController;
