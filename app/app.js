import Resolver from 'resolver';

var App = Ember.Application.extend({
  LOG_ACTIVE_GENERATION: true,
  LOG_MODULE_RESOLVER: true,
  LOG_TRANSITIONS: true,
  LOG_TRANSITIONS_INTERNAL: true,
  LOG_VIEW_LOOKUPS: true,
  modulePrefix: 'appkit', // TODO: loaded via config
  Resolver: Resolver['default']
});

/*
App.initializer({
  name: 'Register Components',
  initialize: function(container, application) {
    // Options for Auth
    var options = {
        serverTokenEndpoint: "http://browl-api.karlranna.com/oauth2/access_token/"
    };
    Ember.SimpleAuth.setup(container, application, options);
  }
});
*/

Ember.RSVP.configure('onerror', function(error) {
  // ensure unhandled promises raise awareness.
  // may result in false negatives, but visibility is more important
  var options = {
      serverTokenEndpoint: "http://browl-api.karlranna.com/oauth2/access_token/"
  };
  Ember.SimpleAuth.setup(container, application, options);
  if (error instanceof Error) {
    Ember.Logger.assert(false, error);
    Ember.Logger.error(error.stack);
  }
});

export default App;
