import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRouter from './Router'
import { Provider } from 'react-redux'
import AppStore from './utils/AppStore'
import { RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={AppStore}>
   <RouterProvider router={AppRouter}/>
   </Provider>
  </StrictMode>,
)
