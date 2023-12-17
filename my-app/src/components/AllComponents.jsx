import { Routes, Route, useLocation } from 'react-router-dom'
function AllComponent(props) {
    const location = useLocation()
    return ( 
        <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Navigation/>}>

            </Route>
        </Routes>
     );
}

export default AllComponent;