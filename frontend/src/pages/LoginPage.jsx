import axios from "axios";
import { Button, Card, Input, Label } from "../components/ui";
import { useForm } from "react-hook-form";
import { Link,useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signin } = useAuth();
  const navigate = useNavigate();


  const onSubmit = handleSubmit(async (data) => {
    await signin(data);
    navigate("/profile")
  });
  return (
    <div className="h-[calc(100vh-64px)] flex items-center justify-center">
      <Card>
        <h3 className="text-2xl font-bold"> Sign in</h3>

        <form onSubmit={onSubmit}>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            placeholder=" Enter your email"
            {...register("email", { required: true })}
          />
          {errors.email && <p className="text-red-500">email is required</p>}

          <Label htmlFor="password">password</Label>
          <Input
            type="password"
            placeholder=" Enter your password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <p className="text-red-500">password is required</p>
          )}
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
