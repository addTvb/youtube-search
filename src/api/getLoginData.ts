export const getLoginData = () => {
	return fetch('data.json', {
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		},
	})
		.then(function (response) {
			return response.json();
		})
		.then(function (myJson) {
			return myJson;
		});
};
