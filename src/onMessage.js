export default function (slack) {
  return (data) => {
    const channel = slack.getChannel(data.channel);
    const user = slack.getUser(data.user);

    if (!channel || !user || !data.text) {
      // they aren't in a public channel
      return false;
    }

    const userPayload = {
      id: user.id,
      real_name: user.profile.real_name,
      username: user.name,
      avatar: user.profile.image_original || user.profile.image_192
    };

    console.log(userPayload, channel.name);
  }
}