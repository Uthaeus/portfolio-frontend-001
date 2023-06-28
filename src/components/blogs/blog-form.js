import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function BlogForm({ blog }) {
    const { register, handleSubmit, errors, reset } = useForm();
    const navigate = useNavigate();
    const [method, setMethod] = useState("POST");
    const [url, setUrl] = useState("http://localhost:4000/blogs");
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        if (blog) {
            reset(blog);
            setMethod("PUT");
            setUrl(`http://localhost:4000/blogs/${blog.id}`);
        }
    }, [blog, reset]);

    useEffect(() => {
        fetch("http://localhost:4000/categories")
            .then((res) => res.json())
            .then((data) => setCategories(data))
            .catch((error) => console.log("categories error", error));
    }, []);

    function buildForm(data) {
        const formData = new FormData();

        formData.append("blog[title]", data.title);
        formData.append("blog[category_id]", data.category_id);
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
            <div className='row'>
                <div className="col-md-5">
                    <div className="form-group mb-2">
                        <label htmlFor="title">Title</label>
                        <input type='text' className="form-control" {...register("title", {required: true})} />
                        {errors?.title && <span className="text-danger">This field is required</span>}
                    </div>

                    <div className="form-group mb-2">
                        <label htmlFor="category">Category</label>
                        <select className="form-control" {...register("category_id", {required: true})}>
                            <option value="">Select a category</option>
                            {categories.map((category) => (
                                <option key={category.id} value={category.id}>{category.name}</option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group mb-4">
                        <label htmlFor="image">Image</label>
                        <input type='file' className="form-control" {...register("image", {required: true})} />
                    </div>

                    <button type="submit" className="blog-form-btn mb-2">Submit</button>
                </div>
            
                <div className="col-md-7">
                    <div className="form-group mb-3">
                        <label htmlFor="body">Body</label>
                        <textarea className="form-control" rows={9} {...register("body", {required: true})} />
                        {errors?.body && <span className="text-danger">This field is required</span>}
                    </div>
                </div>
            </div>
        </form>
    );
}

export default BlogForm;