import { useEffect, useState } from "react";

const Form = ({addContact, contacts}) => {
    const initialFormValues = {fullname:'', phone_number:''}
    const [form, setForm] = useState({fullname: '', phone_number:''});

    const onChangeInput= (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handleForm = (e) => {
        e.preventDefault();
        if(form.fullname === '' || form.phone_number === '') {
            return false;
        }
        addContact([...contacts, form])
        console.log(form);
    }

    useEffect(() => {
        setForm(initialFormValues);
    },[contacts]);
    
  return <>
  <form onSubmit={handleForm}>
  <div>
    <input name="fullname" placeholder="Full Name" onChange={onChangeInput} value={form.fullname}></input>
  </div>
  <div>
    <input name="phone_number" placeholder="Phone number" onChange={onChangeInput} value={form.phone_number}></input>
  </div>
  <button>Add</button>
  </form>
  </>;
};

export default Form;
