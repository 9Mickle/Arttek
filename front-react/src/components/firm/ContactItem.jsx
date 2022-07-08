import React from 'react';
import {Card, ListGroup, ListGroupItem} from "react-bootstrap";

const ContactItem = ({contact, number}) => {
    return (
        <div>
            <Card style={{ width: "800px", marginTop: "15px"}}>
                <Card.Body>
                    <Card.Title>{number}. {contact.name}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Код в ATI: {contact.ati_id}</ListGroupItem>
                    <ListGroupItem>Рабочий телефон: {contact.phone}</ListGroupItem>
                    <ListGroupItem>Мобильный телефон: {contact.mobile_phone}</ListGroupItem>
                    <ListGroupItem>Город: {contact.contact_city}</ListGroupItem>
                    <ListGroupItem>Рейтинг: {contact.score}</ListGroupItem>
                    <ListGroupItem>Количество рекомендаций: {contact.recommendations_count}</ListGroupItem>
                    <ListGroupItem>Количество упоминаний на форуме недобросовестных партнеров: {contact.bad_partner_mentions_count}</ListGroupItem>
                    <ListGroupItem>fax: {contact.fax}</ListGroupItem>
                    <ListGroupItem>icq: {contact.icq}</ListGroupItem>
                    <ListGroupItem>skype: {contact.skype_name}</ListGroupItem>
                    <ListGroupItem>email: {contact.email}</ListGroupItem>
                    <ListGroupItem>Язык: {contact.language}</ListGroupItem>
                </ListGroup>
            </Card>
        </div>
    );
};

export default ContactItem;