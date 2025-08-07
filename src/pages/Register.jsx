import { Link } from "react-router-dom";
import FormInput from "../components/FormInput";

function Register() {
  const {register} = useRegister()
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)

    const displayName = formData.get("displayName")
    const password = formData.get("password")
    const email = formData.get("email")

    register(email, displayName, password)
  }
  return (
    <section className="min-h-screen grid place-items-center">
      <div className="w-full flex flex-col items-center">
        <h3 className="text-center font-bold text-3xl">Register</h3>
        <form onSubmit={handleSubmit} action="" className="w-full max-w-96">
          <FormInput label="Display Name:" name="displayName" type="text" />
          <FormInput label="Email:" name="email" type="email" />
          <FormInput label="Password" name="password" type="password" />
          <div className="flex justify-center my-10">
            <button type="submit" className="btn btn-secondary">Register</button>
          </div>
        </form>
        <div>
          <p>
            If you have account,{" "} <Link className="link link-primary" to="/Login">Login</Link>{" "}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Register;
