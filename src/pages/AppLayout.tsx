import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useFetch } from '../store/hooks/useFetch';
import { useMasterContext } from '../store/MasterContext';

export default function AppLayout() {
  let location = useLocation();
  const { clearError, updateLastPath } = useMasterContext();
  useFetch();

  useEffect(() => {
    clearError();
    return () => {
      console.log(location.pathname);
      updateLastPath(location.pathname);
    };
  }, [location]);

  return (
    <>
      <Outlet />
    </>
  );
}
