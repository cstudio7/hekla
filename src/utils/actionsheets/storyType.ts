import openActionSheet from '../openActionSheet';
import { formatStoryType } from 'stores/models/StoriesType';

const icons = {
  topstories: require('assets/icons/32/trophy.png'),
  newstories: require('assets/icons/32/new.png'),
  askstories: require('assets/icons/32/decision.png'),
  showstories: require('assets/icons/32/training.png'),
  jobstories: require('assets/icons/32/jobs.png'),
};

const types = [
  'topstories',
  'newstories',
  'askstories',
  'showstories',
  'jobstories',
];

const options = types.map(type => ({
  id: type,
  title: formatStoryType(type),
  titleTextAlignment: 0,
  icon: icons[type],
}));

export default cb => openActionSheet({ options, cancel: 'Cancel' },  cb);
