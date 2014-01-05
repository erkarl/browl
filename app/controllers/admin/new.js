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
          this.store.createRecord('post', hash).save().then(function(){
              addnew.reset();
              addnew.transitionToRoute('index');
            });
          }
        }
});

export default NewAdminController;
