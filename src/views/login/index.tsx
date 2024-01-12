import React, { useCallback, useEffect } from 'react';
import Loader from '../../components/Loader';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const { user, loginWithRedirect } = useAuth0();
  const navigate = useNavigate();

  const handleRedirection = useCallback(() => {

    if (user) {
      navigate('/home')
      return;
    }

    loginWithRedirect();
  }, [loginWithRedirect, navigate, user])

  useEffect(() => {
    handleRedirection();
  }, [handleRedirection]);


  return (
    <Loader />
  );
}

export default Login;
