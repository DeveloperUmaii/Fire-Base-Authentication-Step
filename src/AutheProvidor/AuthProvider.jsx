import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useContext } from "react";
import { auth } from "../Firebase/Firebase.config";

export    const AuthContext = createContext(null)
//   export  const ParentContextHook =useContext(AuthContext);

const AuthProvider = ({children}) => {

    // const User

    const registrationUser = ( email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => console.log(result.user))
            }
    
    const logInUser = ( email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then(result => console.log(result.user))
            }
    
const contextInfo ={
    registrationUser,
    logInUser,
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