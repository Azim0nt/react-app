import { Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './Navigation';
import Main from './Main';
import About from './About';
import Excursion from './Excursion'
import Types from './Types'
import NoPage from './NoPage'
function AllComponent(props) {
    const location = useLocation()
    return (
        <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Navigation />}>
                <Route index element={<Main />} />
                <Route path="/main" element={<Main />}/>
                <Route path='excursion' element={<Excursion />}/>
                <Route path="/about" element={<About />} />
                <Route path="/types" element={<Types />} />
                <Route path="*" element={<NoPage />} />
            </Route>
        </Routes>
    );
}

export default AllComponent;