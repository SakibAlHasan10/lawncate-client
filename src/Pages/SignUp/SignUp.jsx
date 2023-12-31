import { Link } from "react-router-dom";

const SignUp = () => {
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    const user = {email, password}
    fetch('https://lawncare-server-imux2lo58-sakib-al-hasans-projects.vercel.app/users',{
        method: "POST",
        headers:{
            "content-type":"application/json"
        },
        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        console.log('user create is successfully')
    })
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
            <Link to={"/sign_in"}>
              <span className="btn-sm">SignIn</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
