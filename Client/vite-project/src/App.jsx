import './App.css';
import {  Routes, Route } from "react-router-dom";
import Navbar from './Layout/Navbar';
import Login from './Page/Login';
import Profile from './Page/Profile';
import About from './Page/About';
import Home from './Page/Home';
import SignUp from './Page/SignUp';
import { Provider } from 'react-redux';
import store from './Store/Store';
import Protected from './ProtectedWrapper/Protected';
function App() {


  const routes = [
    {
      path: '/',
      element: <Protected><Navbar /><Home /></Protected>
    },
    {
      path: '/About',
      element: <Protected><Navbar /><About /></Protected>
    },
    {
      path: '/Profile',
      element: <Protected><Navbar /><Profile /></Protected>
    },
    {
      path: '/Login',
      element: <Login />
    },
    {
      path: '/SignUp',
      element: <SignUp />
    }
  ];
  return (
    <Provider store={store}>
        <Routes>
        {routes.map((route, i) => (
            <Route key={i} path={route.path} element={route.element} />
          ))}
        </Routes>
    </Provider>
  );
}

export default App;
