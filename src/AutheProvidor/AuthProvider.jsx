import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useContext, useState } from "react";
import { auth } from "../Firebase/Firebase.config";

export    const AuthContext = createContext(null)

//   export  const ParentContextHook =useContext(AuthContext);

const AuthProvider = ({children}) => {

    const [ user, setUser] = useState(null)

    const registrationUser = ( email, password) => {
      return  createUserWithEmailAndPassword(auth, email, password)

            }
    
    const logInUser = ( email, password) => {
       return signInWithEmailAndPassword(auth, email, password)

            }
    
const contextInfo ={
    registrationUser,
    logInUser,
    user,
    setUser,
    
  }

    return (
        <div>
            <AuthContext.Provider value={contextInfo}>
                    {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;