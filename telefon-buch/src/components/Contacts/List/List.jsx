import { useState, useMemo } from "react";
import PropTypes from 'prop-types';

const List = ({ contacts }) => {
    const [filterText, setFilterText] = useState("");

    const handleFilterTextChange = (e) => {
        setFilterText(e.target.value);
    };

    const filtered = useMemo(() => {
        return contacts.filter((item) => {
            return Object.keys(item).some((key) =>
                item[key]
                    .toString()
                    .toLowerCase()
                    .includes(filterText.toLocaleLowerCase())
            );
        });
    }, [contacts, filterText]);

    console.log(filtered, "filtered");

    return (
        <>
            <input
                type="text"
                placeholder="Filter contact"
                value={filterText}
                onChange={handleFilterTextChange}
            />
            <ul className="list">
                {filtered.map((contact, index) => (
                    <li key={index}>
                        <span>{contact.fullname}</span>
                        <span>{contact.phone_number}</span>
                    </li>
                ))}
            </ul>
            <p>Total Contacts ({filtered.length})</p>
        </>
    );
};

List.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            fullname: PropTypes.string.isRequired,
            phone_number: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default List;