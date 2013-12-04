var showdown = new Showdown.converter();

Ember.Handlebars.helper('format-markdown', function(input) {
  return new Handlebars.SafeString(showdown.makeHtml(input));
});

Ember.Handlebars.helper('format-date', function(date) {
  if (date) {
    return moment(date).fromNow();
  }
});

Ember.Handlebars.helper('format-date-complete', function(date) {
	if (date) {
		return moment(date).format('LL');
	}
});