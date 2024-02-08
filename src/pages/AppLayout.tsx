import { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useFetch } from '../store/hooks/useFetch';
import { useMasterContext } from '../store/MasterContext';
import useAuthenticate from '../store/hooks/useAuthenticate';
import { Credentials } from '../classes/Credentials';

export default function AppLayout() {
  let location = useLocation();
  const { clearError, updateLastPath, token } = useMasterContext();
  const [requestAuth, setRequestAuth] = useState<Credentials | null>(null);
  useAuthenticate(requestAuth);
  useFetch();

  useEffect(() => {
    clearError();
    return () => {
      updateLastPath(location.pathname);
    };
  }, [location]);

  const username = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  function handleSubmit() {
    if (username.current !== null && password.current !== null) {
      setRequestAuth({
        username: username.current.value,
        password: password.current.value,
      });
    }
  }

  if (token === '') {
    return (
      <div className="flexCol">
        <label htmlFor="username">Username</label>
        <input id="username" ref={username} defaultValue={'Admin'} />
        <label htmlFor="password">Password </label>
        <input id="password" ref={password} defaultValue={'123'} />

        <button onClick={handleSubmit}>Request Authorisation</button>
      </div>
    );
  }

  return (
    <>
      <Outlet />
    </>
  );
}
