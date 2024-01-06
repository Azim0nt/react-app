import { Routes, Route, useLocation } from 'react-router-dom';

import Navigation from './Navigation';
import Main from './Main';

import Excursion from './Excursion'
import OurExcursions from './OurExcursions';
import NoPage from './NoPage'
function AllComponent(props) {
    const location = useLocation()
    return (
        <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Navigation />}>
                <Route index element={<Main />} />
                <Route path="/main" element={<Main />}/>
                <Route path='/excursions' element={<OurExcursions />}/>
                <Route path="*" element={<NoPage />} />
            </Route>
        </Routes>
    );
}

export default AllComponent;