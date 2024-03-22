import { useState } from 'react';
import { toast } from 'react-toastify';

const Register = () => {
  const [form, setForm] = useState({});

  const onSubmit = async (e) => {
    e.preventDefault();
    const resultJSON = await fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify({
        password: form.password,
        email: form.email,
        name: form.name
      })
    });

    const { success } = await resultJSON.json();
    if (success) {
      toast.success('User registered successfully.');
      setForm({});
    }
  }

  return (<div className="grid grid-flow-cols grid-cols-12">
    <div className="col-start-4 col-span-6 shadow-md rounded-md p-4 mt-[5%]">
      <form onSubmit={ (e) => onSubmit(e) } className="w-full block">
        <input
          className="border p-2 text-lg border-gray mb-2 rounded-md w-full block"
          type="type"
          value={ form.name || '' }
          required={ true }
          onChange={(e) => setForm({
            ...form,
            name: e.target.value
          })}
          placeholder="Name"
        />
        <input
          className="border p-2 text-lg border-gray mb-2 rounded-md w-full block"
          type="email"
          required={ true }
          value={ form.email || '' }
          onChange={(e) => setForm({
            ...form,
            email: e.target.value
          })}
          placeholder="Email address"
        />
        <input
          className="border p-2 text-lg border-gray rounded-md w-full block"
          type="password"
          required={ true }
          value={ form.password || '' }
          onChange={(e) => setForm({
            ...form,
            password: e.target.value
          })}
          placeholder="Password"
        />
        <button
          type="submit"
          className="bg-blue w-full text-white text-xl p-2 rounded-md mt-2">
            Register
        </button>
      </form>
    </div>
  </div>);
};

export default Register;
