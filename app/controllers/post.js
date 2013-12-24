var PostController = Ember.ObjectController.extend({
  actions: {
    saveChanges: function(){
    },
    removePost: function() {
      var post = this.get('model');
      post.deleteRecord();
      post.save();
    }
  }
});

export default PostController;
