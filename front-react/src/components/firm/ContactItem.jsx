import React from 'react';

const ContactItem = ({contact}) => {
    return (
        <div>
            <div className="contact">
                <p>Код в ATI: {contact.ati_id}</p>
                <p>Имя: {contact.name}</p>
                <p>Рабочий телефон: {contact.phone}</p>
                <p>Мобильный телефон: {contact.mobile_phone}</p>
                <p>Город: {contact.contact_city}</p>
                <p>Рейтинг: {contact.score}</p>
                <p>Количество рекомендаций: {contact.recommendations_count}</p>
                <p>Количество упоминаний на форуме недобросовестных партнеров: {contact.bad_partner_mentions_count}</p>
                <p>fax: {contact.fax}</p>
                <p>icq: {contact.icq}</p>
                <p>skype: {contact.skype_name}</p>
                <p>email: {contact.email}</p>
                <p>Язык: {contact.language}</p>
            </div>
        </div>
    );
};

export default ContactItem;