import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { Layout, Login, SearchPage, Favorites, NotFound } from 'pages';
import { PrivateRoute } from 'components';
import store from 'redux/store';

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route path='/login' element={<Login />} />
						<Route
							path='/search'
							element={
								<PrivateRoute>
									<SearchPage />
								</PrivateRoute>
							}
						/>
						<Route
							path='/favorites'
							element={
								<PrivateRoute>
									<Favorites />
								</PrivateRoute>
							}
						/>
						<Route path='*' element={<NotFound />} />
					</Routes>
				</Layout>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
