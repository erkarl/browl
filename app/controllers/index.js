var IndexController = Ember.ArrayController.extend({
    actions: {
        deleteEntry: function(post){
          Ember.run(function(){
            post.deleteRecord();
            post.save();
          });
        }
    }
});

export default IndexController;
