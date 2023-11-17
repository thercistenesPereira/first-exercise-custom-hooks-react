import Swal from 'sweetalert2';
import { useState } from 'react'; 
import useFormInput from '../hooks/useFormInput';
import './form';

function Form() {
  const firstName = useFormInput('');
  const lastName = useFormInput('');
  const email = useFormInput('');

  const resetForm = () => {
    firstName.onChange('');
    lastName.onChange('');
    email.onChange('');
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(firstName && lastName && email) {
      Swal.fire(
        'Formulário enviado',
        JSON.stringify({
          firstName: firstName.value,
          lastName: lastName.value,
          email: lastName.value,
        }),
        'success'
      );
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Você precisa preencher todos os campos.',
      });
    }
  }

  return(
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name: </label>
        <input
          type="text"
          name="firstName"
          value={firstName.value}
          onChange={ ({target}) => firstName.onChange(target.value) }
        />

        <label htmlFor="lastName">LastName: </label>
        <input
          type="text"
          name="lastName"
          value={lastName.value}
          onChange={ ({target}) => lastName.onChange(target.value) }
        />

        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          value={email.value}
          onChange={ ({target}) =>email.onChange(target.value) }
        />

        <button>Enviar</button>
      </form>
    </div>

  );
}

export default Form;
