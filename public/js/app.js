App = Ember.Application.create({      
  ready: function(){            
    loadTemplates('hbs/posts.hbs'),
    loadTemplates('hbs/post.hbs'),
    loadTemplates('hbs/about.hbs'),
    loadTemplates('hbs/post_edit.hbs'),
    loadTemplates('hbs/posts_new.hbs'),
    loadTemplates('hbs/projects.hbs'),
    loadTemplates('hbs/projects.hbs'),
    loadTemplates('hbs/project.hbs'),    
    loadTemplates('hbs/project_info.hbs'),
    loadTemplates('hbs/project_notes.hbs'),
    loadTemplates('hbs/project_edit.hbs'),
    loadTemplates('hbs/projects_new.hbs')
  }  
});

 App.ApplicationAdapter = DS.LSAdapter.extend({
     namespace: 'model-emberjs'
 });

 App.ApplicationAdapter = DS.LSAdapter;



/*
var templates = [];

/*
    first_function,
    second_function,
    third_function,
    forth_function
]


async.series([
    function(callback){
        // do some stuff ...
        callback(null, 'one');
    },
    function(callback){
        // do some more stuff ...
        callback(null, 'two');
    }
],
// optional callback
function(err, results){
    // results is now equal to ['one', 'two']
});*/