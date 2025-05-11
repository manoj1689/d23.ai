import React from 'react';
import { useSelector } from 'react-redux';
import Landing from './Landing';
import Dashboard from './Dashboard'; // adjust the import path

const IndexPage = () => {
  // Access token from Redux store
  const accessToken = useSelector((state: any) => state.auth?.access_token);

  return (
    <div>
      {accessToken ? <Dashboard /> : <Landing />}
    </div>
  );
};

export default IndexPage;
