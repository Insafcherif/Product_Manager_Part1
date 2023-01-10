
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import CreateProductform  from './Components/CreateProductform';
import Main from './Components/Main';
import OneProduct from './Components/OneProduct';
import Upadateproduct from './Components/Updateproduct';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/create' element={<CreateProductform/>}/>
      <Route path='/products/:id' element={<OneProduct/>}/>
      <Route path='/products/:id' element={<Upadateproduct/>}/>
    </Routes>

    </div>
  );
}

export default App;
