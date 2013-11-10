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
        }
    }
});

export default NewAdminController;
