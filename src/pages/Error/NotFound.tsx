import React from 'react';
import { useLocation } from 'react-router-dom';

const NotFound: React.FC = () => {
  const location = useLocation();

  return (
    <div>
      <h2>404 - Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <p>Attempted URL: <code>{location.pathname}</code></p>
    </div>
  );
};

export default NotFound;
