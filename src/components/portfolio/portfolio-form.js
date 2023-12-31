import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useNavigate } from "react-router";

function PortfolioForm({ portfolio }) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const navigate = useNavigate();

    useEffect(() => {
        if (portfolio) {
            reset(portfolio);
        }
    }, [portfolio, reset]);

    function buildForm(data) {
        const formData = new FormData();

        formData.append('portfolio_item[title]', data.title);
        formData.append('portfolio_item[description]', data.description);
        formData.append('portfolio_item[url]', data.url);

        if (data.image[0]) {
            formData.append('portfolio_item[image]', data.image[0]);
        }

        return formData;
    }

    function submitHandler(data) {
        console.log(data);

        fetch('http://localhost:4000/portfolio_items', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token-001')}`
            },
            body: buildForm(data)
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
        .then(data => {
            console.log(data);
            navigate('/portfolio');
        })
        .catch(error => console.log('create portfolio error', error));
    }

    return (
        <form className="portfolio-form" onSubmit={handleSubmit(submitHandler)}>
            <div className="form-group mb-2">
                <label htmlFor="title">Title</label>
                <input type="text" className="form-control" {...register("title", { required: true })} />
                {errors.title && <span className="text-danger">Title is required</span>}
            </div>

            <div className="form-group mb-2">
                <label htmlFor="description">Description</label>
                <textarea className="form-control" rows={3} {...register("description", { required: true })}></textarea>
                {errors.description && <span className="text-danger">Description is required</span>}
            </div>

            <div className="form-group mb-2">
                <label htmlFor="url">URL</label>
                <input type="text" className="form-control" {...register("url")} />
            </div>

            <div className="form-group mb-2">
                <label htmlFor="image">Image</label>
                <input type="file" className="form-control" {...register("image", {required: true})} />
                {errors.image && <span className="text-danger">Image is required</span>}
            </div>

            <button type="submit" className="portfolio-form-btn mt-3">{portfolio ? 'Update' : 'Save'}</button>
        </form>
    );
}

export default PortfolioForm;