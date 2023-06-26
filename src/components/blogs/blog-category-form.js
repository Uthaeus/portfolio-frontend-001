import { useForm } from "react-hook-form";

function BlogCategoryForm() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    function submitHandler(data) {
        console.log(data);
    } 

    return (
        <form className="blog-category-form" onSubmit={handleSubmit(submitHandler)}>
            <div className="form-group mb-1">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" {...register("name", { required: true })} />    
                {errors?.name && <span className="text-danger">This field is required</span>}
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

export default BlogCategoryForm;