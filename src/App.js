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
import { fetchPartners } from './features/partners/partnersSlice';
import { fetchPromotions } from './features/promotions/promotionsSlice';
import { fetchComments } from './features/comments/commentsSlice';

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchCampsites());
		dispatch(fetchPartners());
		dispatch(fetchPromotions());
		dispatch(fetchComments());
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
