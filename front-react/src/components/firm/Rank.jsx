import React from 'react';
import {Card, ListGroup, ListGroupItem} from "react-bootstrap";

const Rank = ({firm, visible}) => {
    if (!visible) {
        return (
            <h1 style={{margin: "20px 0"}}>Введите номер фирмы!</h1>
        )
    }
    return (
        <div>
            <Card style={{ width: "800px", marginTop: "15px"}}>
                <Card.Body>
                    <Card.Title>Рейтинг</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem style={{fontWeight: "bold"}}>Балл: {firm.score}</ListGroupItem>
                    <ListGroupItem>Количество рекомендаций от фирм: {firm.recommendations_count}</ListGroupItem>
                    <ListGroupItem>Количество упоминаний на форуме недобросовестных партнеров: {firm.bad_partner_mentions_count}</ListGroupItem>
                    <ListGroupItem>Сумма отрицательных баллов: {firm.negative_points_sum}</ListGroupItem>
                    <ListGroupItem>Количество претензий от фирм: {firm.claims_count}</ListGroupItem>
                </ListGroup>
            </Card>
        </div>
    );
};

export default Rank;