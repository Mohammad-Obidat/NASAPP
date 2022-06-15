import { BrowserRouter as Router } from 'react-router-dom';
import NasaNavbar from './components/NasaNavbar';
import NasaNewsContainer from './components/NasaNewsContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <>
        <NasaNavbar />
        <NasaNewsContainer />
      </>
    </Router>
  );
}

export default App;
