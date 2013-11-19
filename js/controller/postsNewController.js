App.PostsNewController = Ember.ObjectController.extend({   
  validateTitle: function() {
    var title = this.get('title');
    return title ? '' :  'error';
  }.property('title'),
  validateAuthor: function() {
    var author = this.get('author');
    return author ? '' :  'error';
  }.property('author'),  
  validateExcerpt: function() {
    var excerpt = this.get('excerpt');
    return excerpt ? '' :  'error';
  }.property('excerpt'),
  validateBody: function() {
    var body = this.get('body');
    return body ? '' :  'error';
  }.property('body')
});


