var Post = DS.Model.extend({
    title: DS.attr('string'),
    body: DS.attr('string'),
    // user: DS.belongsTo('user'),
});

Post.FIXTURES = [
  { id: 1, title: 'Sample Title', body: 'Sample Content' },
  { id: 2, title: 'Title Sample', body: 'Content Sample' },
  { id: 3, title: 'Example Title', body: 'Title Example' }
];

export default Post;
