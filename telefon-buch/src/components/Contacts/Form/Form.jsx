import { useEffect, useState, useMemo } from "react";
import PropTypes from 'prop-types';

const Form = ({ addContact, contacts }) => {
  const initialFormValues = useMemo(() => ({ fullname: '', phone_number: '' }), []);
  const [form, setForm] = useState(initialFormValues);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleForm = (e) => {
    e.preventDefault();
    if (form.fullname === '' || form.phone_number === '') {
      return false;
    }
    addContact([...contacts, form]);
    console.log(form);
  };

  useEffect(() => {
    setForm(initialFormValues);
  }, [contacts, initialFormValues]);

  return (
    <form onSubmit={handleForm}>
      <div>
        <input
          name="fullname"
          placeholder="Full Name"
          onChange={onChangeInput}
          value={form.fullname}
        />
      </div>
      <div>
        <input
          name="phone_number"
          placeholder="Phone number"
          onChange={onChangeInput}
          value={form.phone_number}
        />
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

Form.propTypes = {
  addContact: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};

export default Form;