import { useForm } from "react-hook-form";

function PortfolioCommentForm({ user, addCommentHandler, portfolioId }) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    function submitHandler(data) {
        let dataToSubmit = {
            portfolio_comment: {
                content: data.content,
                portfolio_item_id: portfolioId,
                user_id: user ? user.id : 1,
                author: user ? user.username : 'Anonymous'
            }
        };

        fetch('http://localhost:4000/portfolio_comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataToSubmit),
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
        .catch((error) => console.log('portfolio comment error', error));
    }

    return (
        <form onSubmit={handleSubmit(submitHandler)} className="portfolio-comment-form">
            <div className="form-group mb-2">
                <textarea className="form-control" rows={3} placeholder="share your thoughts..." {...register("content", { required: true })} />
                {errors.content && <span className="error">This field is required</span>}
            </div>

            <button type="submit" className="portfolio-comment-form-btn">Submit</button>
        </form>
    );
}

export default PortfolioCommentForm;