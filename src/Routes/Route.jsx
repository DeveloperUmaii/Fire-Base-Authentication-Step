import { createBrowserRouter } from 'react-router-dom'
import LayOut from '../LayOut/LayOut';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Error from '../Components/Error';
import Register from '../Pages/Register';
import PrivateRoute from '../Private/PrivateRoute';
import BangBang from '../Components/BangBang';


const route = createBrowserRouter([
  {
    path: '/',
    element: <LayOut />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/Bangbang',
        element: <PrivateRoute>
                    <BangBang />
                </PrivateRoute>,
      },
      //   path: '/Bangbang',
      //   element: <PrivateRoute>
      //               <BangBang />
      //           </PrivateRoute>,
      // },
    ],
  },
])

export default route;