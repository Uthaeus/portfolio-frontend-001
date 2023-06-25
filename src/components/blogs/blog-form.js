import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function BlogForm({ blog }) {
    const { register, handleSubmit, errors, reset } = useForm();
    const navigate = useNavigate();
    const [method, setMethod] = useState("POST");
    const [url, setUrl] = useState("http://localhost:4000/blogs");

    useEffect(() => {
        if (blog) {
            reset(blog);
            setMethod("PUT");
            setUrl(`http://localhost:4000/blogs/${blog.id}`);
        }
    }, [blog, reset]);

    function buildForm(data) {
        const formData = new FormData();

        formData.append("blog[title]", data.title);
        formData.append("blog[body]", data.body);
        formData.append("blog[image]", data.image[0]);

        return formData;
    }

    function submitHandler(data) {
        fetch(url, {
            method,
            body: buildForm(data),
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token-001')}`
            }
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
        .then(data => {
            navigate(`/blogs/${data.id}`);
        })
        .catch(error => console.log('blog form submit error', error));
    }

    return (
        <form onSubmit={handleSubmit(submitHandler)} className="blog-form">
            <div className="form-group mb-2">
                <label htmlFor="title">Title</label>
                <input type='text' className="form-control" {...register("title", {required: true})} />
                {errors?.title && <span className="text-danger">This field is required</span>}
            </div>

            <div className="form-group mb-2">
                <label htmlFor="image">Image</label>
                <input type='file' className="form-control" {...register("image", {required: true})} />
            </div>

            <div className="form-group mb-3">
                <label htmlFor="body">Body</label>
                <textarea className="form-control" {...register("body", {required: true})} />
                {errors?.body && <span className="text-danger">This field is required</span>}
            </div>

            <button type="submit" className="blog-form-btn mb-2">Submit</button>
        </form>
    );
}

export default BlogForm;