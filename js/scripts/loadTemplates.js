function loadTemplates(url){	
	var res = url.replace('_','/');	
	templateName = res.slice(4, - 4);    
    Ember.$.ajax({
      url: url, 
      async: false,              
      success: function (resp) {
        Ember.TEMPLATES[templateName] = Ember.Handlebars.compile(resp);        
      }         
    });
}