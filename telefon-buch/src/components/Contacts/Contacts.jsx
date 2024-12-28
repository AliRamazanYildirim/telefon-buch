import { useEffect, useState } from "react";
import Form from "./Form/Form";
import List from "./List/List";
import "./styles.css"

const Contacts = () => {
    const [contacts, setContacts] = useState([
        {
            fullname: "Ali",
            phone_number: "123",
        },
        {
            fullname:'Elif',
            phone_number:'321'
        },
        {
            fullname:'Alparslan',
            phone_number:'117'
        }
    ]);

    useEffect(() => {
        console.log(contacts);
    }, [contacts]);

    return (
        <div id="container">
            <h1>Contacts</h1>
            <List contacts={contacts} />
            <Form addContact={setContacts} contacts={contacts} />
        </div>
    );
};

export default Contacts;
