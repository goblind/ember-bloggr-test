App.Post = DS.Model.extend({
  title: DS.attr('string'),
  author: DS.attr('string'),
  date: DS.attr('date', { defaultValue: new Date() }),  
  excerpt: DS.attr('string'),
  body: DS.attr('string')
});