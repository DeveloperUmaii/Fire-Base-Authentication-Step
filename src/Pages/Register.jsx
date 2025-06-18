import { useContext } from "react";
import { AuthContext } from "../AutheProvidor/AuthProvider";

const Register = () => {

  // const conTextHookInfo = useContext(AuthContext);
  const { registrationUser } = useContext(AuthContext);

  const handleRegistration = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    registrationUser(email,password);
    console.log(name, photo, email, password);
    // console.log();
    
    // form.reset();
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register Now!</h1>
          <p className="py-6">
            Join us and enjoy amazing features. Register with your details to get started.
          </p>
        </div>

        <div className="card w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegistration} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="User Name"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                name="photo"
                type="url"
                placeholder="Photo URL"
                className="input input-bordered"
                required
              />
            </div>

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
              <button type="submit" className="btn btn-neutral">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
