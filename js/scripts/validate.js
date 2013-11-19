function validatePost(model){
	var title = model.get('title');
	var author = model.get('author');	
	var excerpt = model.get('excerpt');
	var body = model.get('body');

	if (Ember.empty(title))		
		outputWarning('title');
	if (Ember.empty(author))
		outputWarning('author');
	if (Ember.empty(excerpt))
		outputWarning('excerpt');
	if (Ember.empty(body))
		outputWarning('body');

	if(Ember.empty(title) || Ember.empty(author) || Ember.empty(excerpt) || Ember.empty(body))
		return false;
	else
		return true;	
}

function outputWarning(control) {
	control += 'Input';
	control = '#' + control
	var _this = $(control);
	//_this.attr('placeholder', 'Required');	
	_this.next('span').text('Required').css('display', 'inline').fadeOut(2000);	
}


