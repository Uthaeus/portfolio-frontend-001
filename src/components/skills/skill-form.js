import { useForm } from "react-hook-form";

function SkillForm({ addSkillHandler }) {
    const { register, handleSubmit, reset } = useForm();

    function submitHandler(data) {
        fetch('http://localhost:4000/skills', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token-001')}`
            },
            body: JSON.stringify(data)
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
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="percent_utilized">Percent Utilized</label>
                        <input type='number' className="form-control" {...register('percent_utilized', {required: true})} />
                    </div>
                </div>

                <div className="col-md-6">
                    <button type="submit" className="skill-form-btn">Add Skill</button>
                </div>
            </div>
        </form>
    );
}

export default SkillForm;