/* eslint-disable react/prop-types */
import React, { createContext, useContext } from 'react';
import P from 'prop-types';
const AuthContext = createContext();

export function AuthProvider({ children, value }) {
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
  children: P.node,
  value: P.object,
};

export function useAuthValue() {
  return useContext(AuthContext);
}
