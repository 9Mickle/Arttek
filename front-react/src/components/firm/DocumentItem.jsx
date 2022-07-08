import React from 'react';
import {Card, ListGroup, ListGroupItem} from "react-bootstrap";

const DocumentItem = (props) => {
    return (
        <div>
            <Card style={{ width: "800px", marginTop: "15px"}}>
                <Card.Body>
                    <Card.Title>{props.number}. {props.document.description}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Ссылка на документ: <a href={props.document.link}>Документ</a></ListGroupItem>
                    <ListGroupItem>Дата создания: {props.document.creation_date}</ListGroupItem>
                    <ListGroupItem>Имя: {props.document.name}</ListGroupItem>
                </ListGroup>
            </Card>
        </div>
    );
};

export default DocumentItem;