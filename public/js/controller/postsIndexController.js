App.PostsIndexController = Ember.ArrayController.extend({
  needs: "posts",
  posts: Ember.computed.alias("controllers.posts")
});