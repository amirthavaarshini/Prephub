import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Quiz from './Components/Quiz';

function App() {
  return (
    <div className="App">
      <Routes >
        <Route path='/' element={<Home />}/>
        <Route path='/quiz' element={<Quiz />}/>

      </Routes>
    </div>
  );
}

export default App;
