import './App.css';
import {  Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './Store/Store';
import Layout from './Layout/Layout'
import { protectedRoute,publicRoute } from './Routes/Routes';
function App() {


  
  return (
    <Provider store={store}>
        <Routes>
        {protectedRoute.map((route, i) => (
            <Route key={i} path={route.path} element={<Layout> {route.element}</Layout>} />
          ))}
           {publicRoute.map((route, i) => (
            <Route key={i} path={route.path} element={route.element} />
          ))}
        </Routes>

    </Provider>
  );
}

export default App;
