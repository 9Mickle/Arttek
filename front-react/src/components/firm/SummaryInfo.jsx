import React from 'react';
import {Card, ListGroup, ListGroupItem} from "react-bootstrap";

const SummaryInfo = ({firm, visible}) => {
    if (!visible) {
        return (
            <h1 style={{margin: "20px 0"}}>Введите номер фирмы!</h1>
        )
    }
    return (
        <div>
            <Card style={{ width: "800px", marginTop: "15px"}}>
                <Card.Body>
                    <Card.Title>Основные данные о фирме</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Полное имя фирмы: {firm.full_name}</ListGroupItem>
                    <ListGroupItem>ATI код: {firm.ati_id}</ListGroupItem>
                    <ListGroupItem>ИНН: {firm.inn}</ListGroupItem>
                    <ListGroupItem>ОГРНИП: {firm.ogrn}</ListGroupItem>
                    <ListGroupItem>Профиль деятельности фирмы: {firm.firm_type}</ListGroupItem>
                    <ListGroupItem>Страна: {firm.location.country_name}, {firm.position_in_country} место</ListGroupItem>
                    <ListGroupItem>Город: {firm.location.short_name}, {firm.position_in_city} место</ListGroupItem>
                    <ListGroupItem>Адрес: {firm.address}</ListGroupItem>
                    <ListGroupItem>Сайт: {firm.web_site}</ListGroupItem>
                    <ListGroupItem>Ссылка на карточку фирмы: <a href={firm.info_reference}>профиль</a></ListGroupItem>
                    <ListGroupItem>Ссылка на паспорт: <a href={firm.passport_reference}>паспорт</a></ListGroupItem>
                    <ListGroupItem>Количество подтвержденных ТС: {firm.verified_trucks}</ListGroupItem>
                    <ListGroupItem>Язык: {firm.language}</ListGroupItem>
                </ListGroup>
            </Card>
        </div>
    );
};

export default SummaryInfo;