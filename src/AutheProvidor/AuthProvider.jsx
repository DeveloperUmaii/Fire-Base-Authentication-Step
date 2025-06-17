import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import { auth } from "../Firebase/Firebase.config";
    // import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const AuthProvider = ({children}) => {
    const AuthContext = createContext(null);

const registrationUser = ( email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed up 
//     // const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });

  const contextInfo ={
    registrationUser,

  }

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