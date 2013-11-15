var User = DS.Model.extend({
    username: DS.attr('string'),
    first_name: DS.attr('string'),
    last_name: DS.attr('string'),
    e_mail: DS.attr('string')
});

User.FIXTURES = [
  { id: 1, username: 'karlr', first_name: 'Karl', last_name: 'Ranna', e_mail: 'karl@karlranna.com'},
  { id: 2, username: 'johns', first_name: 'John', last_name: 'Smith', e_mail: 'john@smith.com'},
  { id: 3, username: 'janed', first_name: 'Jane', last_name: 'Doe', e_mail: 'jane@doe.com'},
];

export default User;
