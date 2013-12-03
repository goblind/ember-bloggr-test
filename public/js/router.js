App.Router.map(function() {
  this.resource('about');
  this.resource('projects', function() {
    this.route('new');
    this.resource('project', { path: ':project_id'}, function(){
      this.route('info', { path: "info"});
      this.route('notes', { path: "notes"});
    });
  });
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
      var model = this.modelFor('postsNew');        
      if (validatePost(model)) {
        model.save();
        this.transitionTo('posts.index');
      }      
    },
    cancelEditing: function() {            
      this.get('controller.model').deleteRecord()            
      this.transitionTo('posts.index');
    }
  }
});

App.PostsRoute = Ember.Route.extend({
  model: function() {    
    return this.get('store').find('post');
  },
  actions: {
    doneEditing: function() {           
      this.controllerFor('post').send('finishedEditing');      
      this.get('controller.model').save();  
    },
    cancelEditing: function() {      
      this.transitionTo('posts.index');
    }
  }
});

App.PostRoute = Ember.Route.extend({
  model: function(params) {    
    return this.get('store').find('post', params.post_id);
  }
});

App.ProjectsRoute = Ember.Route.extend({
  model: function() {
    return this.get('store').find('project');
    //return projects;
  },
  actions: {
    doneEditing: function() {           
      this.controllerFor('project').send('finishedEditing');      
      this.get('controller.model').save();  
    },
    cancelEditing: function() {      
      this.transitionTo('project.index');
    }
  }
});

App.ProjectRoute = Ember.Route.extend({
  model: function(params) {
    return this.get('store').find('project', params.project_id);
  }
});

App.ProjectsNewRoute = Ember.Route.extend({
  model: function() {
    return this.get('store').createRecord('project');
  },
  actions: {
    doneEditing: function() {
      var model = this.modelFor('projectsNew');
      model.save();
      this.transitionTo('projects.index');
    },
    cancelEditing: function(){
      this.get('controller.model').deleteRecord()
      this.transitionTo('projects.index');
    }
  }
});

App.ProjectNotesRoute = Ember.Route.extend({
  model: function(params) {    
  }
});

App.ProjectInfoRoute = Ember.Route.extend({
  model: function(params) {    
  }
});

var projects = [{
  id: '1',
  title: "Kupert",
  date: new Date('12-27-2012'),
  note: "node.js is something like well you can't figure it out ultil you get your hands on it."
}, {
  id: '2',
  title: "Contador",
  date: new Date('12-27-2012'),
  note: "this way you can understand a couple of things." 
}];