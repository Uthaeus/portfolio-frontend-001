import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../../store/user-context";
import defaultAvatar from '../../assets/images/hammer-thumb.jpg';

function EditUser() {
    const { user, loginUser } = useContext(UserContext);
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: user
    });

    function buildForm(data) {
        let formData = new FormData();

        formData.append('user[email]', data.email);
        formData.append('user[username]', data.username);
        
        if (data.avatar[0]) {
            formData.append('user[avatar]', data.avatar[0]);
        }

        formData.append('user[password]', data.password);
        formData.append('user[password_confirmation]', data.password_confirmation);
        formData.append('user[current_password]', data.current_password);

        return formData;
    }

    function submitHandler(data) {
        fetch('http://localhost:4000/users/', {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token-001')}`
            },
            body: buildForm(data),
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
        .then(data => {
            console.log(data);
            loginUser(data.data);
            navigate('/');
        })
        .catch(error => console.log('edit user error', error));
    }

    return (
        <div className="auth-container">
            <h1 className="auth-title">Edit User</h1>

            <form onSubmit={handleSubmit(submitHandler)} className="auth-form">
                <div className="form-group mb-2">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" {...register('email', { required: true })} />
                    {errors.email && <span className="text-danger">This field is required</span>}
                </div>

                <div className="form-group mb-2">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" {...register('username', { required: true })} />
                    {errors.username && <span className="text-danger">This field is required</span>}
                </div>

                <div className="form-group mb-2">
                    <label htmlFor="avatar">Avatar</label>
                    <input type="file" className="form-control" {...register('avatar')} />
                </div>

                <div className="form-group mb-2">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" {...register('password', { required: true })} />
                    {errors.password && <span className="text-danger">This field is required</span>}
                </div>

                <div className="form-group mb-2">
                    <label htmlFor="password_confirmation">Password Confirmation</label>
                    <input type="password" className="form-control" {...register('password_confirmation', { required: true })} />
                </div>

                <div className="form-group mb-2">
                    <label htmlFor="current_password">Current Password</label>
                    <input type="password" className="form-control" {...register('current_password', { required: true })} />
                    {errors.current_password && <span className="text-danger">This field is required</span>}
                </div>

                <button type="submit" className="auth-btn">Edit User</button>
            </form>

            <Link to="/" className="auth-link">Back to Home</Link>
        </div>
    );
}

export default EditUser;