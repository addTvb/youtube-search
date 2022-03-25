import axios from 'axios';
const KEY = 'AIzaSyBLDIis9nlJd6dSW2j7Ml1-morrJAZ9eLc'; // mention your youtube API key here

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3/',
	params: {
		part: 'snippet',
		maxResults: 12,
		key: KEY,
	},
});
