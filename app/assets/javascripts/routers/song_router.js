var SongsRouter = Backbone.Router.extend({
	routes : {
		'' : 'home'
	},

	home : function() {
		var searchView = new Enque.Views.SearchView();
		searchView.render();
		$('#container').prepend(searchView.el);
	}
});