import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Login, SearchPage, Favorites, NotFound } from 'pages';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/login' element={<Login />} />
				<Route path='/search' element={<SearchPage />} />
				<Route path='/favorites' element={<Favorites />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
