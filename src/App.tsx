import React, { useEffect, useState } from 'react'
import { Preloader } from './components/Preloader'
import { Landing } from './pages/Landing';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const App = () => {
	const [done, setDone] = useState(false);
	useEffect(() => {
		setTimeout(() => setDone(true), 1000)
	}, [])

	return (
		<>
			{done
				? (
					<Router>
						<Routes>
							<Route path={'/'} element={<Landing />} />
						</Routes>
					</Router>
				)
				: <Preloader />
			}
		</>
	)
}
