import { createBrowserRouter } from 'react-router-dom';

import App from '@/App';
import { ErrorPage } from '@/pages/errorPage/errorPage';
export const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);
