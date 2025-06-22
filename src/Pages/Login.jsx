import { useContext } from "react";
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
    <div className="min-h-screen bg-base-200 flex items-center justify-center">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-green-500">LogIn Now!</h1>
          <p className="py-6">
            Join us and enjoy amazing features. Register with your details to get started.
          </p>
        </div>

        <div className="card w-full max-w-sm shadow-2xl bg-base-100">
        {/* sing In with Gogle Button */}
        <div onClick={signInWithGoogle} class="shadow-xl flex cursor-pointer items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg   hover:bg-gray-50 mx-6 ">
          <div className="px-4 py-2"><svg class="w-6 h-6" viewBox="0 0 40 40"><path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107"></path><path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00"></path><path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50"></path><path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2"></path></svg>
          </div>
          <span class="w-5/6 px-4 py-3 font-bold text-center">Sign in with Google</span>
        </div>
        <div class="flex items-center justify-between mt-4 mx-7">
          <span class="w-1/5 border-b  lg:w-1/4"></span>
          <div class="text-xs text-center text-gray-500 uppercase  hover:underline">or login with email</div>
          <span class="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
        </div>
        
          <form onSubmit={handlelogIn} className="card-body">

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control mt-6">
              <button type="submit" className="btn btn-neutral bg-green-400">LogIn</button>
            </div>
          </form>
          <div class="flex items-center justify-between mt-0 mb-2 mx-7">
            <span class="w-1/5 border-b  lg:w-1/4"></span>
            <NavLink to='/register' class="text-xs text-center text-gray-500 uppercase  hover:underline">or  sign up</NavLink>
            <span class="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;