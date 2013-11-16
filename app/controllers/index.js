var IndexController = Ember.ArrayController.extend({
    actions: {
        deleteEntry: function(post){
          post.deleteRecord();
          post.save();
        },
        editEntry: function(post){
          console.log('editEntry action');
        }
    }
});

export default IndexController;
