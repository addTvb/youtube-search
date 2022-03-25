import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { Layout, Login, SearchPage, Favorites, NotFound } from 'pages';
import store from 'redux/store';

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route path='/login' element={<Login />} />
						<Route path='/search' element={<SearchPage />} />
						<Route path='/favorites' element={<Favorites />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
				</Layout>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
