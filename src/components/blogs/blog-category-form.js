import { useForm } from "react-hook-form";

function BlogCategoryForm({ addCategoryHandler }) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    function submitHandler(data) {
        console.log(data);
        let dataToSubmit = {
            category: {
                name: data.name
            }
        };

        fetch("http://localhost:4000/categories", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${localStorage.getItem('token-001')}`
            },
            body: JSON.stringify(dataToSubmit)
        })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
        })
        .then((data) => {
            addCategoryHandler(data);
            reset();
        })
        .catch((error) => console.log("category form error", error));
    } 

    return (
        <form className="blog-category-form" onSubmit={handleSubmit(submitHandler)}>
            <div className="form-group mb-1">
                <input type="text" placeholder="new category" className="form-control" {...register("name", { required: true })} />    
                {errors?.name && <span className="text-danger">This field is required</span>}
            </div>

            <button type="submit" className="category-form-btn">Submit</button>
        </form>
    );
}

export default BlogCategoryForm;