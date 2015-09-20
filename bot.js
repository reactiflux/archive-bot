var slackAPI = require('slackbotapi')
var token = require('./config.json').token
var onMessage = require('./onMessage')

slack = new slackAPI({
	'token': token,
	'logging': false
});

slack.on('message', onMessage)
