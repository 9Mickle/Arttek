import React from 'react';
import {Card, ListGroup, ListGroupItem} from "react-bootstrap";

const Activity = ({firm, visible}) => {
    if (!visible) {
        return (
            <h1 style={{margin: "20px 0"}}>Введите номер фирмы!</h1>
        )
    }
    return (
        <div>
            <Card style={{ width: "800px", marginTop: "15px"}}>
                <Card.Body>
                    <Card.Title>Активность</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Дата регистрации: {firm.registration_date}</ListGroupItem>
                    <ListGroupItem>Дата последнего изменения данных: {firm.contact_info_changed}</ListGroupItem>
                    <ListGroupItem>Число дней со входами на сайт за последние 30 дней: {firm.last_month_active_days}</ListGroupItem>
                    <ListGroupItem>Дата удаления: {firm.deletion_date}</ListGroupItem>
                </ListGroup>
            </Card>
        </div>
    );
};

export default Activity;