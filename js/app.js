App = Ember.Application.create({  
  ready: function(){
    loadTemplates('hbs/posts.hbs'),
    loadTemplates('hbs/post.hbs'),
    loadTemplates('hbs/about.hbs'),
    loadTemplates('hbs/post_edit.hbs'),
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

App.Post = DS.Model.extend({
  title: DS.attr('string'),
  author: DS.attr('string'),
  date: DS.attr('date', { defaultValue: new Date() }),  
  excerpt: DS.attr('string'),
  body: DS.attr('string')
});

App.PostsNewRoute = Ember.Route.extend({
  model: function() {
    return this.get('store').createRecord('post');
  },
  actions: {    
    doneEditing: function() {                                  
      var model = this.modelFor('postsNew');
      var title = model.get('title');
      if (validatePost(model)) {
        model.save();
        this.transitionTo('posts.index');
      }      
    },
    cancelEditing: function() {
      this.transitionTo('posts.index');
    }
  }
});

App.PostsNewController = Ember.ObjectController.extend({      
                        checkFocus: function() {
                            $('#titleInput').focus(function() {
                              alert('hola');
                              if( $(this).val() == 'Title needed' ) {
                                  $(this).animate({color:'white'}, 1000, function() {
                                      $(this).val('').css('color','#333333');
                                  });
                              }
                            })
                            .blur(function() {
                                if( $(this).is(':animated') ) {
                                    $(this).stop().css('color','#b94a48');
                                }
                                if( $(this).val() == '' ) {
                                    $(this).val('Title needed');
                                }
                              });
                          },
                            


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

