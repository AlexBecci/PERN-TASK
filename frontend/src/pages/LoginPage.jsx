import { Button, Card, Input, Label } from "../components/ui";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function LoginPage() {
  const { register, handleSubmit, formState: {errors} } = useForm();
  const { signin, errors: loginErrors } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    const user = await signin(data);

    if (user) {
      navigate("/tasks");
    }
  });
  return (
    <div className="h-[calc(100vh-10rem)] flex items-center justify-center">
      <Card>
        {loginErrors &&
          loginErrors.map((err) => (
            <p className="text-white p-2 text-center bg-red-800"> {err}</p>
          ))}

        <h3 className="text-2xl font-bold"> Sign in</h3>

        <form onSubmit={onSubmit}>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            placeholder=" Enter your email"
            {...register("email", { required: true })}
          />
           {errors.email && (<p className="text-red-500">Email is required</p>)}

          <Label htmlFor="password">password</Label>
          <Input
            type="password"
            placeholder=" Enter your password"
            {...register("password", { required: true })}
          />
           {errors.password && (<p className="text-red-500">Password is required</p>)}

          <Button>Sign in</Button>

          <div className="flex justify-between my-4">
            <p> Don't have an account?</p>
            <Link to="/register" className="font-bold">
              {" "}
              Register
            </Link>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default LoginPage;
