var Post = DS.Model.extend({
    title: DS.attr('string'),
    content: DS.attr('string')
});

Post.FIXTURES = [
  { id: 1, title: 'Sample Title', content: 'Sample Content' },
  { id: 2, title: 'Title Sample', content: 'Content Sample' },
  { id: 3, title: 'Example Title', content: 'Title Example' }
];

export default Post;
