import FormInput from "../components/FormInput";
import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

function Login() {
  const {login} = useLogin()
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const password = formData.get("password");
    const email = formData.get("email");

    login(email, password);
  };

  return (
    <section className="min-h-screen grid place-items-center">
      <div className="w-full flex flex-col items-center">
        <h3 className="text-center font-bold text-3xl">Login</h3>
        <form onSubmit={handleSubmit} className="w-full max-w-96">
          <FormInput label="Email:" name="email" type="email" />
          <FormInput label="Password" name="password" type="password" />
          <div className="flex justify-center my-10">
            <button type="submit" className="btn btn-secondary w-full">
              Login
            </button>
          </div>
        </form>
        <div>
          <p>
            If you don't have account,{" "}
            <Link className="link link-primary" to="/register">
              Register
            </Link>{" "}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login;
