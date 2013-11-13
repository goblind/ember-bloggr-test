App = Ember.Application.create({
  ready: function(){
    loadTemplates('hbs/posts.hbs'),
    loadTemplates('hbs/post.hbs'),
    loadTemplates('hbs/about.hbs'),
    loadTemplates('hbs/post__edit.hbs'),
    loadTemplates('hbs/posts_new.hbs')
  }
});

 App.ApplicationAdapter = DS.LSAdapter.extend({
     namespace: 'model-emberjs'
 });

 App.ApplicationAdapter = DS.LSAdapter;

//localStorage.clear();

App.Router.map(function() {
  this.resource('about');
  this.resource('posts', function() {
    this.route('new');
    this.resource('post', { path: ':post_id' });
  });
});

App.PostsNewRoute = Ember.Route.extend({
  model: function() {
    return this.get('store').createRecord('post');
  },
  actions: {
    doneEditing: function() {      
      /*debugger;
      if (typeof this.title == 'undefined') {
      //if(typeof obj !== "undefined")  
        this.title = 'hola';
      }*/
      this.modelFor('postsNew').save();
      this.transitionTo('posts.index');
    }
  }
});

App.Post = DS.Model.extend({
  title: DS.attr('string'),
  author: DS.attr('string'),
  date: DS.attr('date', { defaultValue: new Date() }),  
  excerpt: DS.attr('string'),
  body: DS.attr('string')
});

App.PostsRoute = Ember.Route.extend({
  model: function() {    
    return this.get('store').find('post');
  },
  actions: {
    doneEditing: function() {           
      this.controllerFor('post').send('finishedEditing');      
      this.get('controller.model').save();  
    }
  }
});

App.PostRoute = Ember.Route.extend({
  model: function(params) {
    return this.get('store').find('post', params.post_id);
  }
});

App.PostController = Ember.ObjectController.extend({
  isEditing: false,
  edit: function() {
    this.set('isEditing', true);
  },
  finishedEditing: function() {
    this.set('isEditing', false);          
  },
  deleteRecord: function() {        
    if ($('#btnDelete').text() == 'Delete') 
      $('#btnDelete').text('You Sure?');      
    else  {      
      var post = this.get('model');
      post.deleteRecord();
      post.save();      
      this.transitionTo('posts.index');
    }  
  }
});

var showdown = new Showdown.converter();

Ember.Handlebars.helper('format-markdown', function(input) {
  return new Handlebars.SafeString(showdown.makeHtml(input));
});

Ember.Handlebars.helper('format-date', function(date) {
  if (date) {
    return moment(date).fromNow();
  }
});

