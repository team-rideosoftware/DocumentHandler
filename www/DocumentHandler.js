var myFunc = function (
	successHandler,
	failureHandler,
	url,
	mime) {
	mime = typeof mime !== 'undefined' ? mime : null;
	cordova.exec(
		successHandler,
		failureHandler,
		"DocumentHandler",
		"HandleDocumentWithURL",
		[{"url" : url, "mime" : mime}]);
};

window.handleDocumentWithURL = myFunc;

if(module && module.exports) {
	module.exports = myFunc;
}