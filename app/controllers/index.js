var IndexController = Ember.ArrayController.extend({
    actions: {
        deleteEntry: function(post){
          console.log('deleteEntry action' + post);
          console.log('postID' + post.get('id'));
          post.deleteRecord();
          post.save();
        }
    }
});

export default IndexController;
