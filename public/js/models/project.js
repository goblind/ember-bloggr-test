App.Project = DS.Model.extend({
  name: DS.attr('string'),
  note: DS.attr('string'),
  date: DS.attr('date', { defaultValue: new Date() })
});