import { combineReducers } from 'redux';
import auth from './auth';
import speciality from './speciality';
import topic from './topic';
import article from './article';
import ui from './ui';
import video from './video';

export default combineReducers({
	auth,
	speciality,
	topic,
	article,
	ui,
	video,
});
