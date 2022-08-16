import { useState, createContext, useContext } from "react";
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [passcode, setPasscode] = useState(null);

  const login = (passcode) => {
    setPasscode(passcode);
  };

  const logout = () => {
    setPasscode(null);
  };

  return (
    <AuthContext.Provider value={{ passcode, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
