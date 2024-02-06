import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useFetch } from '../store/hooks/useFetch';
import { useMasterContext } from '../store/MasterContext';

export default function AppLayout() {
  let location = useLocation();
  const { clearError } = useMasterContext();
  useFetch();

  useEffect(() => {
    clearError();
  }, [location]);

  return (
    <>
      <Outlet />
    </>
  );
}
