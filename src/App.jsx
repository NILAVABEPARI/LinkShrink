import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from './layouts/AppLayout';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import Auth from './pages/Auth';
import Link from './pages/Link';
import Redirect from './pages/Redirect';
import UrlProvider from './Context';
import RequireAuth from './components/RequireAuth';


const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />
      },
      {
        path: "/dashboard",
        element: <RequireAuth>
          <Dashboard />
        </RequireAuth>
      },
      {
        path: "/auth",
        element: <Auth />
      },
      {
        path: "/link/:id",
        element: <RequireAuth>
          <Link />
        </RequireAuth>
      },
      {
        path: "/:id",
        element: <Redirect />
      }
    ]
  }
])

function App() {
  return <UrlProvider>
    <RouterProvider router={router} />
  </UrlProvider>
}

export default App
