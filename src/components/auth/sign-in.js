import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useContext } from "react";

import { UserContext } from "../../store/user-context";

function SignIn() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { loginUser } = useContext(UserContext);

    function submitHandler(data) {
        let userData = {
            user: {
                email: data.email,
                password: data.password
            }
        };

        fetch('http://localhost:4000/users/sign_in', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
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
            console.log('sign in data', data);
            loginUser(data.data);
            navigate('/');
        })
        .catch(error => console.log('sign in error', error));
    }

    return (
        <div className="auth-container">
            <h1 className="auth-title">Sign In</h1>

            <form onSubmit={handleSubmit(submitHandler)} className="auth-form">
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

                <button type="submit" className="auth-btn">Sign In</button>
            </form>
        </div>
    );
}

export default SignIn;