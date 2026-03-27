import './App.css';
import { useForm } from 'react-hook-form';  
function App() {
 const { register, handleSubmit } = useForm();
 function handleMyForm(data) {
  console.log("this is the data",data);
 }

  return (
    <div>
  <h1>
      my form
      </h1>
      <div>
        <form onSubmit={handleSubmit((handleMyForm) => console.log(data))}>
          <fieldset>
            <legend>
              Personal Info
            </legend>
            <div>
              <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" {...register("firstName")} />
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" {...register("lastName")} />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" {...register("email")} />
            </div>
            
          </fieldset>
          <button type="submit">Submit</button>
        </form>
        </div>
    </div>

  )
}
export default App
