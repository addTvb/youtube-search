import axios from 'axios';
import { apiKey, baseUrl } from './constants';

export default axios.create({
	baseURL: baseUrl,
	params: {
		key: apiKey,
	},
});
