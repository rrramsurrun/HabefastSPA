import React, { useEffect } from 'react';
import { useMasterContext } from '../store/MasterContext';
import { useLocation, useNavigate } from 'react-router-dom';

export default function BackButton() {
  const navigate = useNavigate();
  const { lastPath } = useMasterContext();
  return <button onClick={() => navigate(lastPath)}>Back</button>;
}
