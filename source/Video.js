Euroquiz.Video = function() {
	return {
		restrict: 'E',
		template:
			'<figure data-ng-show="visible">' +
				'<iframe frameborder="0" allowfullscreen data-ng-src="http://www.youtube.com/embed/{{video}}?html5=1&showinfo=0&autoplay=1&start=100"></iframe>' +
				// '<div class="mask" data-ng-show="mask"></div>' +
			'</figure>',
		scope: {
			video: '=video',
			mask: '=mask',
			visible: '=visible'
		},
		replace: true
	};
};