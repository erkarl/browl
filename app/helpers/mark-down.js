var markDown = Ember.Handlebars.makeBoundHelper(function(word) {
  return new Handlebars.SafeString(markdown.toHTML(word));
});

export default markDown;
