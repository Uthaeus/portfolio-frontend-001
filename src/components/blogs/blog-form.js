import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function BlogForm({ blog }) {
    const { register, handleSubmit, errors, reset } = useForm();
    const navigate = useNavigate();

    useEffect(() => {
        if (blog) {
            reset(blog);
        }
    }, [blog, reset]);

    function submitHandler(data) {
        console.log(data);
        navigate("/blogs");
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