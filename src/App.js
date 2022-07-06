import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import './App.css';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import Header from './components/Header';
import Footer from './components/Footer';
import CampsiteDetailPage from './pages/CampsiteDetailPage';
import AboutPage from './pages/AboutPage';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCampsites } from './features/campsite/campsitesSlice';

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchCampsites());
	}, [dispatch]);

	return (
		<div className="App">
			<Header />
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='contact' element={<ContactPage />} />
					<Route path='directory' element={<CampsitesDirectoryPage />} />
					<Route path='about' element={<AboutPage />} />
					<Route
						path='directory/:campsiteId'
						element={<CampsiteDetailPage />}
						// remember, by accessing this URL, an object containing
						// campsiteId as its first property is handed to the element
					/>
				</Routes>
			<Footer />
		</div>
	);
}

export default App;
