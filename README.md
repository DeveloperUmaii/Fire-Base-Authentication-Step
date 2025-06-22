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
 
 <pre lang="markdown">import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.config";

export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider();
//   export  const ParentContextHook =useContext(AuthContext);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    const registrationUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

    }
    const googlelogIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
       return signOut(auth)
    }

    const contextInfo = {
        registrationUser,
        logInUser,
        user,
        setUser,
        googlelogIn,
        logOut,

    }

    useEffect(() => {
       const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser)
                console.log(currentUser);
            } else {
                     setUser(currentUser);
                     console.log('log out use Effect')
            }
                });
                return () => {
                    unSubscribe()
                }
    }, [])

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
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Register = () => {

  // const conTextHookInfo = useContext(AuthContext);
  const { registrationUser, setUser, googlelogIn } = useContext(AuthContext);
  // const [error, setError] = useState(""); //Password And confirm Password Matching Error!

  const navigate = useNavigate();
  const location = useLocation();
  // আগের লোকেশন থেকে গন্তব্য ঠিক করা
  const from = location.state?.from?.pathname || "/";

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


    registrationUser(email, password)
      .then(result => {
        setUser(result.user)
        navigate(from, { replace: true });
      })

      .catch(result => console.log(error.message))
    console.log(name, photo, email, password);

    // console.log();

    // form.reset();
  };
  const signInWithGoogle = () => {
    googlelogIn()
      .then(result => {
        setUser(result.user)
        navigate(from, { replace: true });
      })
      .catch(result => console.log(error.message))
    console.log('click hoice google button')
  }

  return (
            div className="min-h-screen bg-base-200 flex items-center justify-center">
            div className="hero-content flex-col lg:flex-row-reverse">
            div className="text-center lg:text-left">
            h1 className="text-5xl font-bold">Register Now!/>>>h1>
            p className="py-6">
             Join us and enjoy amazing features. Register with your details to get started.
            /p>
            /div>
            div className="card w-full max-w-sm shadow-2xl bg-base-100">
             {/* sing In with Gogle Button */}
            div onClick={signInWithGoogle} className="shadow-xl flex cursor-pointer items-center justify-center mt-4 text-gray-600       transition-colors duration-300 transform border rounded-lg   hover:bg-gray-50 mx-6 ">
            div className="px-4 py-2">
             google Log In logo Daisy-Ui update version 
            /div>
            span className="w-5/6 px-4 py-3 font-bold text-center">Sign in with Google/>>>span>
            /div>
            div className="flex items-center justify-between mt-4 mx-7">
            span className="w-1/5 border-b  lg:w-1/4">/>>>span>
            div className="text-xs text-center text-gray-500 uppercase  hover:underline">or login with email/>>>div>
            span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4">/>>>span>
            /div>
            form onSubmit={handleRegistration} className="card-body">
            div className="form-control">
            label className="label">
            span className="label-text">User Name/>>>span>
            /label>
            input
                 name="name"
                 type="text"
                 placeholder="User Name"
                 className="input input-bordered"
                 required
            />
            /div>
            div className="form-control mt-6">
            button type="submit" className="btn btn-neutral">Register/>>>button>
            /div>
            /form>
            div className="flex items-center justify-between mt-0 mb-2 mx-7">
            span className="w-1/5 border-b  lg:w-1/4">/>>>span>
            NavLink to='/login' className="text-xs text-center text-gray-500 uppercase  hover:underline">or  sign in/>>>NavLink>
            span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4">/>>>span>
            /div>
            /div>
            /div>
            /div>
  );
};

export default Register;
</pre>
<pre lang="markdown">import { useContext } from "react";
import { AuthContext } from "../AutheProvidor/AuthProvider";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { logInUser, googlelogIn, setUser } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  // আগের লোকেশন থেকে গন্তব্য ঠিক করা
  const from = location.state?.from?.pathname || "/";

  const handlelogIn = e => {
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    logInUser(email, password)
    console.log(email)
    navigate(from, { replace: true });
  }

  const signInWithGoogle = () => {
    googlelogIn()
      .then(result => {
        setUser(result.user)
        navigate(from, { replace: true });
      })
      .catch(result => console.log(error.message))
    console.log('click hoice google button')
  }

  return (
      div className="min-h-screen bg-base-200 flex items-center justify-center">
      div className="hero-content flex-col lg:flex-row-reverse">
      div className="text-center lg:text-left">
      h1 className="text-5xl font-bold text-green-500">LogIn Now!///>h1>
      p className="py-6">
          Join us and enjoy amazing features. Register with your details to get started.
      /p>
      /div>
         
      div className="card w-full max-w-sm shadow-2xl bg-base-100">
             {/* sing In with Gogle Button */}
      div onClick={signInWithGoogle} class="shadow-xl flex cursor-pointer items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg   hover:bg-gray-50 mx-6 ">
      div className="px-4 py-2">    google Log In logo Daisy-Ui update version 
      /div>
      span class="w-5/6 px-4 py-3 font-bold text-center">Sign in with Google///>span>
      /div>
      div class="flex items-center justify-between mt-4 mx-7">
      span class="w-1/5 border-b  lg:w-1/4">///>span>
      div class="text-xs text-center text-gray-500 uppercase  hover:underline">or login with email///>div>
      span class="w-1/5 border-b dark:border-gray-400 lg:w-1/4">///>span>
      /div>
               
      form onSubmit={handlelogIn} className="card-body">
             
      div className="form-control">
      label className="label">
      span className="label-text">Email///>span>
      /label>
      input
            name="email"
            type="email"
            placeholder="Email"
            className="input input-bordered"
            required
            />
      /div>
             
      div className="form-control">
      label className="label">
      span className="label-text">Password///>span>
      /label>
      input
           name="password"
           type="password"
           placeholder="Password"
           className="input input-bordered"
           required
         />
      /div>
           
      div className="form-control mt-6">
      button type="submit" className="btn btn-neutral bg-green-400">LogIn///>button>
      /div>
      /form>
      div class="flex items-center justify-between mt-0 mb-2 mx-7">
      span class="w-1/5 border-b  lg:w-1/4">///>span>
      NavLink to='/register' class="text-xs text-center text-gray-500 uppercase  hover:underline">or  sign up///>NavLink>
      span class="w-1/5 border-b dark:border-gray-400 lg:w-1/4">///>span>
      /div>
      /div>
      /div>
      /div>
  );
};

export default Login;</pre>



###### Password, Confirm Password, minimum 6 character etc  লেকচার in কনসেপচুয়াল  সেশন MileStone:09 FireBase Authentication(Jakariya) Vdo-part-02 Time Line [30:00 - 40:00]  

###Private Route and Navigation
<pre lang="markdown">// যদি প্রাইভেট রাউট থাকে
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AutheProvidor/AuthProvider';
import { useContext } from 'react';


const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext); // check if user is logged in
  const location = useLocation();

  if (user) {
    return children;
  }
    return Navigate to="/register" state={{ from: location }} replace />;
};

export default PrivateRoute;
</pre>




