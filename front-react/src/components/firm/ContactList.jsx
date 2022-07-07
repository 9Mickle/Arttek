import React from 'react';
import ContactItem from "./ContactItem";

const ContactList = ({contacts, visible}) => {
    if (!visible) {
        return (
            <h1 style={{textAlign: "center"}}>Введите номер фирмы!</h1>
        )
    }
    return (
        <div>
            <div>
                <h1>Контакты фирмы</h1>
                {contacts.map((contact) =>
                    <ContactItem contact={contact} key={contact.contact_id}/>
                )}
            </div>
        </div>
    );
};

export default ContactList;