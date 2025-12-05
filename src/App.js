import { BrowserRouter } from 'react-router-dom';
import Routers from './routes/Routers';
// import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routers />

      </div >
    </BrowserRouter>
    


  );
}

export default App;
