Array.prototype.randomIndex = function() {
	return Math.floor(Math.random() * this.length);
};

Array.prototype.random = function(count) {
	count = count || 1;
	var values = [];
	
	while ( values.length < count ) {
		var candidate = this[this.randomIndex()];
		if ( !values.contains(candidate) ) {
			values.push(candidate);
		}
	}
	
	return values;
};

Array.prototype.except = function(value) {
	return this.slice().remove(value);
};

Array.prototype.contains = function(value) {
	return this.indexOf(value) !== -1;
};

Array.prototype.remove = function(value) {
	var index = this.indexOf(value);
	this.splice(index, 1);
	return this;
};

Array.prototype.after = function(value) {
	var index = this.indexOf(value);
	if ( index === -1 ) {
		return undefined;
	} else {
		return this[index + 1];
	}
};