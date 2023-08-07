import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Login, SearchPage, NotFound } from 'pages';
import { PrivateRoute } from './PrivateRoute';
import { Layout } from 'app/layout/Layout';
import './index.css';

function App() {
	return (
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
					<Route path='*' element={<NotFound />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
