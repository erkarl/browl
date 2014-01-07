// Controller for adding a person
var NewAdminController = Ember.Controller.extend({

    init: function() {
        this._super();
        this.reset();
    },

    reset: function(){
        this.setProperties({
            title: '',
            body: ''
        });
    },

    actions: {
        addNew: function(){
          var hash = this.getProperties('title', 'body');
          var newPost = this.store.createRecord('post', hash);
          newPost.save();
          /*
          newPost.save().then(function(){
              addnew.reset();
              addnew.transitionToRoute('index');
            });
          */
          }
        }
});

export default NewAdminController;
