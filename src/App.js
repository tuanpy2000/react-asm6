import { Routes, Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Navigate } from 'react-router-dom';

import CocktailDetail from './pages/CocktailDetail';
import AuthRoute from './Components/AuthRoute';
import PrivateRoute from './Components/PrivateRoute';
import Login from './pages/Login';
import Home from './pages/Home';
import CocktailCart from './pages/CocktailCart';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigate to='/login' replace />} />
        <Route exact path='/home' element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route exact path='/:id' element={<PrivateRoute><CocktailDetail /></PrivateRoute>} />
        <Route exact path='/cart' element={<PrivateRoute><CocktailCart /></PrivateRoute>} />
        <Route exact path='/login' element={<AuthRoute><Login /></AuthRoute>} />
      </Routes>
    </div>
  );
}

export default App;
