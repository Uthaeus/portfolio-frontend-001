import { useForm } from "react-hook-form";

function TechForm({ portfolioId, addTechHandler }) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    function buildForm(data) {
        const formData = new FormData();

        formData.append('technology[name]', data.name);
        formData.append('technology[percent_utilized]', data.percent_utilized);
        formData.append('technology[portfolio_id]', portfolioId);

        if (data.image[0]) {
            formData.append('technology[image]', data.image[0]);
        }

        return formData;
    }

    function submitHandler(data) {
        fetch('http://localhost:4000/technologies', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token-001')}`
            },
            body: buildForm(data)
        })
        .then(response => response.json())
        .then(data => {
            console.log('create tech data', data);
            addTechHandler(data);
            reset();
        })
        .catch(error => console.log('create technology error', error));
    }

    return (
        <form className="tech-form" onSubmit={handleSubmit(submitHandler)}>
            <div className="form-group mb-2">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" {...register("name", { required: true })} />
                {errors.name && <span className="text-danger">Name is required</span>}
            </div>

            <div className="form-group mb-2">
                <label htmlFor="percent_utilized">Percent Utilized</label>
                <input type="number" className="form-control" {...register("percent_utilized", { required: true })} />
                {errors.percent_utilized && <span className="text-danger">Percent Utilized is required</span>}
            </div>

            <div className="form-group mb-2">
                <label htmlFor="image">Image</label>
                <input type="file" className="form-control" {...register("image")} />
            </div>

            <div className="form-group mb-2">
                <button type="submit" className="tech-form-btn">Save</button>
            </div>
        </form>
    );
}

export default TechForm;