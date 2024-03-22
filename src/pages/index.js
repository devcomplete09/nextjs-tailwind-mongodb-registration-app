import { useState } from 'react';
import { toast } from 'react-toastify';

const HomePage = () => {
  const [form, setForm] = useState({});

  const onSubmit = async (e) => {
    e.preventDefault();
    const resultJSON = await fetch('/api/user', {
      method: 'PUT',
      body: JSON.stringify({
        password: form.password,
        email: form.email
      })
    });

    const { validUser, user } = await resultJSON.json();
    if (validUser) {
      toast.success(`Welcome back ${user.name}`);
      return setForm({});
    }

    toast.warn('Invalid email address or password');
  }

  return (<div className="grid grid-flow-cols grid-cols-12">
    <div className="col-start-4 col-span-6 shadow-md rounded-md p-4 mt-[5%]">
      <form onSubmit={ (e) => onSubmit(e) }className="w-full block">
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
          value={ form.password || '' }
          required={ true }
          onChange={(e) => setForm({
            ...form,
            password: e.target.value
          })}
          placeholder="Password"
        />
        <button
          type="submit"
          className="bg-blue w-full text-white text-xl p-2 rounded-md mt-2">
            Sign in
        </button>
      </form>
    </div>
  </div>);
};

export default HomePage;
