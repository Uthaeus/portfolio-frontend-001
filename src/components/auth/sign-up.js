import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useContext } from "react";

import { UserContext } from "../../store/user-context";

function SignUp() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { loginUser } = useContext(UserContext);

    function submitHandler(data) {
        console.log(data);
        let userData = {
            user: {
                email: data.email,
                username: data.username,
                password: data.password,
                password_confirmation: data.password_confirmation
            }
        };

        fetch('http://localhost:4000/users/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(response => {
            if (response.ok) {
                let token = response.headers.get('Authorization').split(' ')[1];
                console.log('setting token', token);
                localStorage.setItem('token-001', token);
                return response.json();
            }
        })
        .then(data => {
            console.log('sign up data', data);
            loginUser(data.data);
            navigate('/');
        })
        .catch(error => console.log('sign up error', error));
    }

    return (
        <div className="auth-container">
            <h1 className="auth-title">Sign Up</h1>

            <form onSubmit={handleSubmit(submitHandler)} className="auth-form">
                <div className="form-group mb-2">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" {...register('email', { required: true })} />
                    {errors?.email && <span className="error">Email is required</span>}
                </div>

                <div className="form-group mb-2">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" {...register('username', { required: true })} />
                    {errors?.username && <span className="error">Username is required</span>}
                </div>

                <div className="form-group mb-2">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" {...register('password', { required: true })} />
                    {errors?.password && <span className="error">Password is required</span>}
                </div>

                <div className="form-group mb-2">
                    <label htmlFor="password_confirmation">Password Confirmation</label>
                    <input type="password" className="form-control" {...register('password_confirmation', { required: true })} />
                    {errors?.password_confirmation && <span className="error">Password Confirmation is required</span>}
                </div>

                <button type="submit" className="auth-btn">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUp;