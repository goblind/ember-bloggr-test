function validatePost(model){
	var title = model.get('title');
	var author = model.get('author');	
	var excerpt = model.get('excerpt');
	var body = model.get('body');
	var a = Ember.empty(model);
	if (Ember.empty(title))
		$('#titleInput').val('Title needed').addClass('errorText');
	if (Ember.empty(author))
		$('#authorSpan').val('Name required').addClass('errorText').css( "display", "inline" ).fadeOut(2500);
	if (Ember.empty(excerpt))
		$('#excerptInput').val('Excerpt needed').addClass('errorText');
	if (Ember.empty(body))
		$('#bodyInput').val('Body please').addClass('errorText');

	if(Ember.empty(title) || Ember.empty(author) || Ember.empty(excerpt) || Ember.empty(body))
		return false;
	else
		return true;	
}

