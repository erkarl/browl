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
          console.log('NewAdminController addNew action');
          console.log('Hash: ' + JSON.stringify(this.getProperties('title', 'body')));
          var hash = this.getProperties('title', 'body');
          var that = this;
          this.store.createRecord('post', hash).save().then(function(){
            console.log('record successfully created');
            that.reset();
            that.transitionToRoute('index');
          });
        }
    }
});

export default NewAdminController;
