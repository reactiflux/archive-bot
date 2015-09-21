import SlackApi from 'slackbotapi';
import { token } from '../config.json';
import onMessage from './onMessage';

const slack = new SlackApi({
	token,
	logging: false
});

slack.on('message', onMessage(slack));