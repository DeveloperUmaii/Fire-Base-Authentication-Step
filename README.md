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
##### অথ কনটেক্সট টপিকটা বোঝার জন্য এক্সপ্ল্যানিং, ওয়ান্ডারফুল লেকচার কনসেপচুয়াল  সেশন MileStone:09 FireBase Authentication(Jakariya) Vdo Time Line [26:00 - 40:00]
 #### Context Hook Creat (Two) 02
 অথ প্রোভাইডার বা যেকোনো কম্পনেন্ট তৈরি করে সেইটা দিয়ে সম্পূর্ণ ওয়েবঅ্যাপ কে রেপ করা সম্পূর্ণ ওয়েবঅ্যাপ ba ওয়েবসাইটটা থাকে রাউটার প্রোভাইডারের মধ্যে < RouterProvider router={route} /> তার মানে রাউটার প্রোভাইডার কে রেপ করতে হবে চিলড্রেন হিসেবে এবং প্যারেন্ট কম্পনেন্ট AuthProvider /> বা  RapComponent /> বা ParentComponent /> বা যে কোনো কম্পনেন্ট. কম্পনেন্ট এর ভেতরে চিলড্রেন টাকে রেন্ডার  করার জন্য রিটার্ন করতে হবে
 
 <pre lang="markdown"></pre>




