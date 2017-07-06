var myFunc = function (
	successHandler,
	failureHandler,
	url,
	mime) {
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