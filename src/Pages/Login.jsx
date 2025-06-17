import React from 'react';

const Login = () => {
  const handlelogIn = e => {
      e.preventDefault()
      const form = e.target;
      const email =form.email.value;
      const password =form.password.value;
      console.log(email)
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
        </div>
      </div>
    </div>
  );
};

export default Login;