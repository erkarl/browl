// Controller for adding a person
var EditAdminController = Ember.ObjectController.extend({

    fetchPost: function(){
      return this.get('model');
    },
    actions: {
        addNew: function(){
          console.log('EditAdminController addNew action');
          var hash = this.getProperties('title', 'body');
          var that = this;
          debugger;
          // TODO: Handle modifying the post.

          /*
          this.get('model').then(function(postObject){
            postObject.set('title', this.get('title'));
            postObject.set('body', this.get('body'));
            debugger;
          });
          */
          /*
          this.get('store').find('user', 1).then(function(userModel){
            var addnew = that;
            var hash = {
              user: userModel,
              title: that.get('title'),
              body: that.get('body')
            };
            console.log('hash: ' + JSON.stringify(hash));
            addnew.store.createRecord('post', hash).save().then(function(){
              addnew.reset();
              addnew.transitionToRoute('index');
            });
          });
          */
        }
    }
});

export default EditAdminController;
