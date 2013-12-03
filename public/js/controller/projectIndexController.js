App.ProjectIndexController = Ember.ArrayController.extend({
  needs: "project",
  project: Ember.computed.alias("controllers.project")
});