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




