// import React, { useState } from 'react';

// function MyForm() {
//   const [formState, setFormState] = useState({
//     name: '',
//     email: '',
//   });

//   const handleChange = event => {
//     setFormState({
//       ...formState,
//       [event.target.name]: event.target.value,
//     });
//   };

//   const handleSubmit = event => {
//     event.preventDefault();
//     // handle form submission...
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input type="text" name="name" value={formState.name} onChange={handleChange} />
//       </label>
//       <label>
//         Email:
//         <input type="email" name="email" value={formState.email} onChange={handleChange} />
//       </label>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default MyForm;


import React, { useState } from 'react';

function MyForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
  });

  const handleChange = event => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    // Log form data to console
    console.log(formState);
    // Add your fetch or axios call here if you're sending data to a server
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formState.name} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formState.email} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;