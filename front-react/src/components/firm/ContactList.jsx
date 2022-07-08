import React from 'react';
import ContactItem from "./ContactItem";

const ContactList = ({contacts, visible}) => {
    if (!visible) {
        return (
            <h1 style={{margin: "20px 0"}}>Введите номер фирмы!</h1>
        )
    }
    return (
        <div>
            <h1 style={{margin: "20px 0"}}>Контакты фирмы</h1>
            {contacts.length > 0
                ?<div>
                    {contacts.map((contact, index) =>
                        <ContactItem number={index + 1} contact={contact} key={contact.contact_id}/>
                    )}
                </div>
                : <h3>Контакты не найдены</h3>
            }
        </div>
    );
};

export default ContactList;