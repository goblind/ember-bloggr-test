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
      post.deleteRecord(); //deleteRecord() + save() = destroyRecord()
      post.save();      
      this.transitionTo('posts.index');
    }    
  }
});