// import React, { useState } from 'react';

// const Form = () => {

//   const [formState, setFormState] = useState({

//     fullName: '',

//     toppings: [],

//     size: '',

//   });

//   const [isSubmitted, setIsSubmitted] = useState(false);
// //yup scem
//   const handleChange = event => {
//     //Distructer at least 4 things event.target
//     //turn values or type
//     //yup last
//     setFormState({

//       ...formState,

//       [event.target.name]: event.target.value,

//     });

//   };
//   //
//   const handleSubmit = event => {
//     //scem valadtion
//     event.preventDefault();

//     // Log form data to console

//     console.log(formState);

//     // Add your fetch or axios call here if you're sending data to a server

//     // Set the submission status

//     setIsSubmitted(true);

//   };

//   const handleFormReset = () => {

//     setFormState({

//       name: '',

//       email: '',

//       size: '',

//     });

//   };

//   return (

//     <form onSubmit={handleSubmit}>

//       <h1>Order Your Pizza.</h1>

//       <label>

//         Fullname:

//         <input type="text" name="name" value={formState.name} onChange={handleChange} />

//       </label>



//       <label>

//         Size:

//         <select name="size" value={formState.size} onChange={handleChange}>

//           <option value="">Select size</option>

//           <option value="S">Small</option>

//           <option value="M">Medium</option>

//           <option value="L">Large</option>

//         </select>

//       </label>

//       <label>
//         <input
//           type="checkbox"
//           value="Pepperoni"
//           onChange={handleChange}
//         />
//         Pepperoni

//         <input
//           type="checkbox"
//           value="Green Peppers"
//           onChange={handleChange}
//         />
//         Green Peppers

//         <input
//           type="checkbox"
//           value="Pineapple"
//           onChange={handleChange}
//         />
//         Pineapple

//         <input
//           type="checkbox"
//           value="Mushrooms"
//           onChange={handleChange}
//         />
//         Mushrooms

//         <input
//           type="checkbox"
//           value="Ham"
//           onChange={handleChange}
//         />
//         Ham



//       </label>

//       <button type="submit" disabled={!formState.name || !formState.size}>

//         Submit

//       </button>

//       {isSubmitted && (

//         <p>Your order has been placed successfully! Thank you for ordering.</p>

//       )}

//     </form>

//   );

// };

// export default Form;



import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for HTTP requests

const Form = () => {
  const [formState, setFormState] = useState({
    name: '',
    size: '',
    toppings: [],
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    // Handle different input types (text, select, checkbox)
    setFormState((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? [...prevState[name], value] : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send form data to the server (replace with your actual API endpoint)
      const response = await axios.post('http://localhost:9009/api/order', formState);

      // Handle the response (e.g., show success message)
      console.log('Order submitted successfully:', response.data);

      // Clear the form fields
      setFormState({
        name: '',
        size: '',
        toppings: [],
      });

      // Set the submission status
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting order:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Order Your Pizza</h1>
      <label>
        Full Name:
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Size:
        <select name="size" value={formState.size} onChange={handleChange}>
          <option value="">Select size</option>
          <option value="S">Small</option>
          <option value="M">Medium</option>
          <option value="L">Large</option>
        </select>
      </label>
      <div>
        Toppings:
        <label>
          <input
            type="checkbox"
            name="toppings"
            value="Pepperoni"
            onChange={handleChange}
          />
          Pepperoni
        </label>
        {/* Add other topping checkboxes similarly */}
      </div>
      <button type="submit">Place Order</button>
      {isSubmitted && (
        <p>Thank you for your order, {formState.name}!</p>
      )}
    </form>
  );
};

export default Form;
