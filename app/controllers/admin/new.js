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
          var that = this;
          this.store.createRecord('post', hash).save().then(function(){
            that.reset();
            that.transitionToRoute('index');
          });
        }
    }
});

export default NewAdminController;
