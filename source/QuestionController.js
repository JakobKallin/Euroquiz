Euroquiz.QuestionController = function($scope, eurovision) {
	$scope.state = {
		video: null,
		guess: null,
		correct: 0,
		incorrect: 0,
		showVideo: true
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
		
		if ( guess === $scope.question.answer ) {
			$scope.state.correct += 1;
		} else {
			$scope.state.incorrect += 1;
		}
	};
	
	$scope.proceed = function() {
		var video = eurovision.videos.after($scope.state.video) || eurovision.videos[0];
		var incorrect = eurovision.countries.except(video.country).random(3);
		var correct = video.country;
		
		console.log('Playing ' + video.country);
		
		// Put incorrect answers into options.
		var options = incorrect.slice();
		// Add correct answer at random position.
		options.splice(options.randomIndex(), 0, correct);
		options.sort();
		
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