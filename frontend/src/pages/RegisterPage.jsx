import { Button, Card, Input, Label } from "../components/ui";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    await signup(data);
    navigate("/profile");
    /*
    const response = await fetch("http://localhost:3000/api/signup", {
      method: `POST`,
      credentials: 'include',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Credentials': true
      },
    });
    const dataSignup = await response.json();
    console.log(dataSignup);
    **/
  });

  return (
    <div className="h-[calc(100vh-64px)] flex items-center justify-center">
      <Card>
        <h3 className="text-2xl font-bold"> Register</h3>

        <form onSubmit={onSubmit}>
          <Label htmlFor="name">name</Label>

          <Input
            placeholder=" Enter your fullname"
            {...register("name", { required: true })}
          />
          {errors.name && <p className="text-red-500">Name is required</p>}
          <Label htmlFor="email">email</Label>

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

          <Button>Register</Button>
          <div className="flex justify-between my-4">
            <p> Already have an account?</p>
            <Link to="/login" className="font-bold">
              {" "}
              Sign in
            </Link>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default RegisterPage;
