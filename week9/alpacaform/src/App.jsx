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
        <form onSubmit={handleSubmit(handleMyForm)}>
          <fieldset>
            <legend>
              Personal Info
            </legend>
            <div>

              <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" {...register("firstName")} />
            </div>

            <div>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" {...register("lastName")} />
            </div>

            <div>
            <label htmlFor="streetAddress">Street Address</label>
            <input type="text" id="streetAddress" {...register("streetAddress")} />
            </div>
        
            <div>
              <label htmlFor="state">State</label>
              <select id="state" {...register("state")}>
                <option value="CA">California</option>
                <option value="NY">New York</option>
                <option value="TX">Texas</option>
              </select>
            </div>
             <div>
               <label htmlFor="country">Country</label>
            <input type="text" id="country" {...register("country")} />
            </div>
            <div>
              <p>
                Favorite Alpaca Color<label>White<input type="radio" value="white" {...register("favColor")} /></label>
                Favorite Alpaca Color<label>Brown<input type="radio" value="brown" {...register("favColor")} /></label>
                Favorite Alpaca Color<label>Black<input type="radio" value="black" {...register("favColor")} /></label>
              </p>
            </div>
          </fieldset>
          <button type="submit">Submit</button>
        </form>
        </div>
    </div>

  )
}
export default App;

