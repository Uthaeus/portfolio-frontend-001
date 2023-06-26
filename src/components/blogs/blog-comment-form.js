import { useForm } from "react-hook-form";

function BlogCommentForm({ user, blogId, addCommentHandler }) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    let name = user ? user.username : 'Anonymous';

    function submitHandler(data) {
        let dataToSubmit = {
            blog_comment: {
                content: data.content,
                author: name,
                blog_id: blogId,
                user_id: user ? user.id : null
            }
        };

        fetch('http://localhost:4000/blog_comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToSubmit)
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
        .then(data => {
            addCommentHandler(data);
            reset();
        })
        .catch(error => console.log('add comment error', error));
    }

    return (
        <form onSubmit={handleSubmit(submitHandler)} className="blog-comment-form">
            <div className="form-group mb-1">
                <label htmlFor="content">Comment</label>
                <textarea className="form-control" rows={3} {...register("content", { required: true })} />
                {errors?.content && <span className="error">This field is required</span>}
            </div>

            <button type="submit" className="blog-comment-form-btn">Submit</button>
        </form>
    );
}

export default BlogCommentForm;