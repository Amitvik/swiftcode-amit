var app = angular.module('chatApp', ['ngMaterial']);
app.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('purple')
        .accentPalette('green');
});

app.controller('chatController', function ($scope) {
    $scope.messages = [
        {
            'sender': 'USER',
            'text': 'Hello'
		},
        {
            'sender': 'BOT',
            'text': 'Hi what up'
		},
        {
            'sender': 'USER',
            'text': 'what is the time'
		},
        {
            'sender': 'BOT',
            'text': 'it is half past noon'
		}
	];


});