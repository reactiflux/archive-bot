module.exports = function(data) {
  if(!slack.getChannel(data.channel) || !slack.getUser(data.user) || !data.text) return false //they aren't in a public channel

  var channel = slack.getChannel(data.channel).name
	var slackUser = slack.getUser(data.user)

  var user = {
    id: slackUser.id,
    real_name: slackUser.profile.real_name,
    username: slackUser.name,
    avatar: slackUser.profile.image_original
  }

	console.log(user, channel)
}
