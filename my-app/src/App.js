import {BrowserRouter} from 'react-router-dom'  
import AllComponent from './components/AllComponents';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <AllComponent/>
      </BrowserRouter>
    </div>
  );
}

export default App;
