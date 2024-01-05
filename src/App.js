import './index.css'
import './App.js'
import Login from './Login/Login.jsx';
import Register from './Register/Register.jsx';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <div><Login /></div>
  },
  {
    path: '/register',
    element: <div><Register /></div>
  }
])

function App() {
  
  return (
    <div >
       <RouterProvider router={Router}/>
    </div>
  );
}

export default App;
