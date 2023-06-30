import { useForm } from "react-hook-form";

function SkillForm({ addSkillHandler }) {
    const { register, handleSubmit, reset } = useForm();

    function buildForm(data) {
        let formData = new FormData();
        formData.append('skill[title]', data.title);
        formData.append('skill[percent_utilized]', data.percent_utilized);

        if (data.icon_image[0]) {
            formData.append('skill[icon_image]', data.icon_image[0]);
        }

        return formData;
    }

    function submitHandler(data) {
        fetch('http://localhost:4000/skills', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token-001')}`
            },
            body: buildForm(data)
        }) 
        .then(res => res.json())
        .then(data => {
            addSkillHandler(data);
            reset();
        })
        .catch(error => console.log('skill form error', error));
    }

    return (
        <form onSubmit={handleSubmit(submitHandler)} className="skill-form">
            <div className="form-group mb-2">
                <label htmlFor="title">Title</label>
                <input type='text' className="form-control" {...register('title', {required: true})} />
            </div>

            <div className="row">
                <div className="col-md-4">
                    <div className="form-group">
                        <label htmlFor="percent_utilized">Percent Utilized</label>
                        <input type='number' className="form-control" {...register('percent_utilized', {required: true})} />
                    </div>
                </div>

                <div className="col-md-8">
                    <div className="form-group">
                        <label htmlFor="icon_image">Icon Image</label>
                        <input type='file' className="form-control" {...register('icon_image')} />
                    </div>
                </div>
            </div>

            <button type="submit" className="skill-form-btn">Add Skill</button>
        </form>
    );
}

export default SkillForm;