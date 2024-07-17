import { createContext } from "react";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const bulbul = "tofazzal";
  const userInfo = { bulbul };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
