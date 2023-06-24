import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

function SignIn() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

    function submitHandler(data) {
        console.log(data);
        navigate('/');
    }

    return (
        <div className="signin">
            <h1>Sign In</h1>

            <form onSubmit={handleSubmit(submitHandler)}>
                <div className="form-group mb-2">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" {...register('email', { required: true })} />
                    {errors?.email && <span className="error">Email is required</span>}
                </div>

                <div className="form-group mb-2">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" {...register('password', { required: true })} />
                    {errors?.password && <span className="error">Password is required</span>}
                </div>

                <button type="submit" className="btn btn-primary">Sign In</button>
            </form>
        </div>
    );
}

export default SignIn;