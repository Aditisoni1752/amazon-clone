import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter,  RouterProvider } from 'react-router-dom';
import Cart from './component/Cart.jsx';
import Home from './component/Home.jsx';
import myntraStore from './store/index.js';
import {Provider} from 'react-redux'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      { path: 'home', element: <Home/> }, 
      { path: 'cart', element: <Cart/> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={myntraStore}>
    <RouterProvider router={router} />
    </Provider>
 
  </StrictMode>,
)
