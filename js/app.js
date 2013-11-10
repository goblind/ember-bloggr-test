App = Ember.Application.create({
  ready: function(){
    loadTemplates('hbs/posts.hbs'),
    loadTemplates('hbs/post.hbs'),
    loadTemplates('hbs/about.hbs'),
    loadTemplates('hbs/post__edit.hbs')
  }
});

App.Router.map(function() {
  this.resource('about');
  this.resource('posts', function() {
    this.resource('post', { path: ':post_id' });
  });
});

App.PostsRoute = Ember.Route.extend({
  model: function() {
    return posts;
  },

  events: {
    createPost: function(){
      var posts = this.modelFor('posts');
      var post = posts.pushObject({
        id: posts.length
      });
      this.transitionTo('/edit', post);
    }    
  }
});

App.PostRoute = Ember.Route.extend({
  model: function(params) {
    return posts.findBy('id', params.post_id);
  }
});

App.PostController = Ember.ObjectController.extend({
  isEditing: false,
  edit: function() {
    this.set('isEditing', true);
  },
  doneEditing: function() {
    this.set('isEditing', false);
    this.get('store').commit();
  }
});

var showdown = new Showdown.converter();

Ember.Handlebars.helper('format-markdown', function(input) {
  return new Handlebars.SafeString(showdown.makeHtml(input));
});

Ember.Handlebars.helper('format-date', function(date) {
  return moment(date).fromNow();
});

