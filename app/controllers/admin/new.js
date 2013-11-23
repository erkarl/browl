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
          this.get('store').find('user', 1).then(function(userModel){
            var addnew = that;
            var hash = {
              user: userModel,
              title: that.get('title'),
              body: that.get('body')
            };
            // console.log('hash: ' + JSON.stringify(hash));
            addnew.store.createRecord('post', hash).save().then(function(){
              addnew.reset();
              addnew.transitionToRoute('index');
            });
          });
        }
    }
});

export default NewAdminController;
