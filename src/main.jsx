import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'  // ইমপোর্ট না করলে টেল উইন্ড কাজ করবে না ইনডেক্স সিএসএস
import { RouterProvider } from 'react-router-dom'
import rooooooottt from './Routes/Route';
// import router from './routes/Routes' // রাউটারটাকে পুনরায় আবার ইমপোর্ট করতে হবে

ReactDOM.createRoot(document.getElementById('root')).render(
  < React.StrictMode >
         < RouterProvider router={rooooooottt} />
  </ React.StrictMode >
);