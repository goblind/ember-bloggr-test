function validatePost(model){
	var title = model.get('title');
	var author = model.get('author');	
	if(author == undefined || title == undefined)
		return false;
	else
		return true;
}