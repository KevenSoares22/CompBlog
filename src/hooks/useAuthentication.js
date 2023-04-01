/* eslint-disable no-unused-vars */
import { db } from '../firebase/config';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from 'firebase/auth';

import { useEffect, useState } from 'react';

export const useAuthentication = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const [cancelled, setCancelled] = useState(false);

  function checkIfIsCancelled() {
    if (cancelled) {
      return;
    }
  }
  const auth = getAuth();

  const createUser = async (data) => {
    checkIfIsCancelled();
    setLoading(true);
    setError(null);
    try {
      const { user } = await createUserWithEmailAndPassword(auth, data.email, data.password);
      await updateProfile(user, {
        displayName: data.displayName,
      });

      setLoading(false);
      return user;
    } catch (error) {
      console.log(error.message);
      console.log(typeof error.message);

      let systemErrorMessage;
      if (error.message.includes('Password')) {
        systemErrorMessage = 'A senha precisa conter pelomenos 6 digitos';
      } else if (error.message.includes('email-already')) {
        systemErrorMessage = 'Email já cadastrado';
      } else {
        systemErrorMessage = 'Ocorreu um erro, tente novamente';
      }

      setError(systemErrorMessage);
    }

    setLoading(false);
  };

  const login = async (data) => {
    checkIfIsCancelled();
    setError('');
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      setLoading(false);
    } catch (error) {
      let systemErrorMessage;
      if (error.message.includes('user-not-found')) {
        systemErrorMessage = 'Email não cadastrado';
      } else if (error.message.includes('wrong-password')) {
        systemErrorMessage = 'Senha incorreta';
      } else {
        systemErrorMessage = 'Ocorreu um erro, tente novamente';
      }
      setError(systemErrorMessage);
      setLoading(false);
    }
  };

  const logout = () => {
    checkIfIsCancelled();
    signOut(auth);
  };

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return {
    auth,
    createUser,
    error,
    loading,
    login,
    logout,
  };
};
