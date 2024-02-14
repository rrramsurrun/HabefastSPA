import { useEffect } from 'react';
import { Credentials } from '../../classes/Credentials';
import { useMasterContext } from '../MasterContext';
import { authenticate } from '../repository';

export default function useAuthenticate(requestAuth: Credentials | null) {
  const { updateToken } = useMasterContext();

  useEffect(() => {
    if (requestAuth) {
      async function send(auth: Credentials) {
        const response = (await authenticate(auth)) as string;
        if (response) {
          updateToken(response);
        }
      }
      send(requestAuth);
    }
  }, [requestAuth]);
}
