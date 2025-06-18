### Run Project
<pre lang="markdown">npm run dev</pre>

#### FireBase Step (One) 01
Fire Base প্রজেক্ট তৈরি করে > ফায়ার বেস ইনস্টল করে > এরপর ফায়ারবেস কনফিগ ফাইল তৈরি করে > ফাইলে কনফিগ কপি পেস্ট করা
<pre lang="markdown">npm install firebase</pre>
<pre lang="markdown">// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // অটো ইমপোর্ট না হলে ম্যানুয়ালি ইমপোর্ট করতে হবে
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);  //আলাদাভাবে তৈরি করে  এক্সপোর্ট</pre>
###### fire base sign-in method সাইন ইন ম্যাথডে গিয়ে প্রয়োজনীয় সাইন ইন মেথড গুলি এক্টিভেট বা চালু করা যেমন google login facebook লগইন Email লগইন
##### অথ কনটেক্সট টপিকটা বোঝার জন্য এক্সপ্ল্যানিং, ওয়ান্ডারফুল লেকচার কনসেপচুয়াল  সেশন MileStone:09 FireBase Authentication(Jakariya) Vdo-part-01 Time Line [26:00 - 40:00]
 #### Context Hook Creat (Two) 02
 অথ প্রোভাইডার বা যেকোনো কম্পনেন্ট তৈরি করে সেইটা দিয়ে সম্পূর্ণ ওয়েবঅ্যাপ কে রেপ করা সম্পূর্ণ ওয়েবঅ্যাপ ba ওয়েবসাইটটা থাকে রাউটার প্রোভাইডারের মধ্যে < RouterProvider router={route} /> তার মানে রাউটার প্রোভাইডার কে রেপ করতে হবে চিলড্রেন হিসেবে এবং প্যারেন্ট কম্পনেন্ট AuthProvider /> বা  RapComponent /> বা ParentComponent /> বা যে কোনো কম্পনেন্ট. কম্পনেন্ট এর ভেতরে চিলড্রেন টাকে রেন্ডার  করার জন্য রিটার্ন করতে হবে
 
 <pre lang="markdown">import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
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
        div>
            AuthContext.Provider value={contextInfo}>
                    {children}
            /AuthContext.Provider>
        /div>
    );
};

export default AuthProvider;</pre>
<pre lang="markdown">import { useContext, useState } from "react";
import { AuthContext } from "../AutheProvidor/AuthProvider";

const Register = () => {

  // const conTextHookInfo = useContext(AuthContext);
  const { registrationUser, user, setUser } = useContext(AuthContext);
  // const [error, setError] = useState(""); //Password And confirm Password Matching Error!

  const handleRegistration = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    // const confirmPassword = form.confirmPassword.value;
    
    // Password and conform password er kaj
    // if (password !== confirmPassword) {       
    //   setError("Password didn't match with Confirm Password")
    //       return
    // }


    registrationUser(email,password)
              .then(result =>{ 
                setUser(result.user)})
                
              .catch(result => console.log(error.message))
    console.log(name, photo, email, password);
    
    // console.log();
    
    // form.reset();
  };

  return (
    

            div className="form-control">
            label className="label">
            span className="label-text">Password
            /span>
            /label>
            input
                name="password"
                type="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
            /div>

  );
};

export default Register;
</pre>
<pre lang="markdown">import { useContext } from "react";
import { AuthContext } from "../AutheProvidor/AuthProvider";

const Login = () => {
  const {logInUser} = useContext(AuthContext);
  const handlelogIn = e => {
      e.preventDefault()
      const form = e.target;
      const email =form.email.value;
      const password =form.password.value;
      logInUser(email,password)
      console.log(email)
  }
  return (

  );
};

export default Login;</pre>



###### Password, Confirm Password, minimum 6 character etc  লেকচার in কনসেপচুয়াল  সেশন MileStone:09 FireBase Authentication(Jakariya) Vdo-part-02 Time Line [30:00 - 40:00]  
runnig last part-03 [14:00-]




