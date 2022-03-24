import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Layout, Login, SearchPage, Favorites, NotFound } from 'pages';

function App() {
	return (
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
	);
}

export default App;
