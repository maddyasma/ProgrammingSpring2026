import { useForm } from "react-hook-form";
import "./newFossilForm.css";
export function NewFossilForm(props) {
    const {addFossilFn} = props;
    const { register, handleSubmit,formState: { errors }, reset } = useForm();
    function handleSubmitJob(data) {
        addFossilFn(data);
        reset();
    }
    return (
        <div className= "form-wrapper">
            <h4>Add a new fossil to the collection</h4>
          <form onSubmit={handleSubmit(handleSubmitJob)}>
          <div className="form-group">
            <label>Fossil Name</label>
            <input {...register("name", { required: true })} />
            </div>
            <div className="form-group">
              <label>Image</label>
              <input {...register("image", { required: true })} />
              {errors.image && (<p className="error">Image is required</p>)}
            </div>
            <div className="form-group">
            <label>Fossil Era</label>
            <label><input value="Paleozoic Era" type="checkbox" {...register("era")} /> Paleozoic Era</label>
            <label><input value="Mesozoic Era" type="checkbox" {...register("era")} /> Mesozoic Era</label>
            <label><input value="Cenozoic Era" type="checkbox" {...register("era")} /> Cenozoic Era</label>
            </div>
            <button type="submit">Add Fossil</button>
          </form>
        </div>
    )
}