Euroquiz.QuestionController = function($scope, eurovision) {
	$scope.state = {
		video: null,
		guess: null
	};
	
	$scope.optionClass = function(option) {
		if ( !$scope.state.guess ) {
			return;
		}
		
		if ( option === $scope.question.answer ) {
			return 'correct';
		} else if ( option === $scope.state.guess ) {
			return 'incorrect';
		}
	};
	
	$scope.giveAnswer = function(guess) {
		$scope.state.guess = guess;
	};
	
	$scope.proceed = function() {
		var video = eurovision.videos.after($scope.state.video) || eurovision.videos[0];
		var incorrect = eurovision.countries.except(video.country).random(3);
		var correct = video.country;
		
		// Put incorrect answers into options.
		var options = incorrect.slice();
		// Add correct answer at random position.
		options.splice(options.randomIndex(), 0, correct);
		
		$scope.question = {
			videoID: video.id,
			options: options,
			answer: correct
		};
		$scope.state.guess = null;
		$scope.state.video = video;
	};
	
	eurovision.videos.forEach(function(video) {
		video.random = Math.random();
	});
	eurovision.videos.sort(function(a, b) {
		return a.random - b.random;
	});
	
	$scope.proceed();
};