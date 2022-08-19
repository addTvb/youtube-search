import Placeholder from 'images/placeholder.jpg';

export const setVideoCover = (covers: any) => {
	return covers ? covers.medium.url : Placeholder;
};
