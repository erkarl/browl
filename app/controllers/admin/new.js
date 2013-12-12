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

    address_id: null,

    savePost: function(userModel){
      console.log('saving new post');
      console.log('userModel: ' + userModel);
      this.set('address_id', 123);
      /*
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
      */
    },

    somethingElse: function(addressID){
      console.log('somethingElse');
      console.log('CONTROLLERS VARIABLE ADDRESS ID: ' + this.get('address_id'));
    },

    actions: {
        addNew: function(){
          var hash = this.getProperties('title', 'body');
          var context = this;
          this.get('store').find('user', 1).
            then(this.savePost()).
            then(this.somethingElse());

          /* OLD
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
          */
        }
    }
});

export default NewAdminController;
