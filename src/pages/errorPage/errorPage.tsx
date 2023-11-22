import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
export const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className='flex items-center flex-col p-10'>
      <ExclamationTriangleIcon className='h-32 w-32 text-tst-primary-red' />
      <h1 className='mt-10 font-bold text-2xl'>Page not found</h1>
      <p>The page you are looking for is not available</p>
      <Button onClick={() => navigate('/')}>Return to Home Page</Button>
    </div>
  );
};
