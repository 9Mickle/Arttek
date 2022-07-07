import React from 'react';

const SummaryInfo = ({firm, visible}) => {
    if (!visible) {
        return (
            <h1 style={{textAlign: "center"}}>Введите номер фирмы!</h1>
        )
    }
    return (
        <div>
            <h1>Основные данные о фирме</h1>
            <div className="firm">
                <div>
                    <p style={{fontWeight: "bold"}}>Полное имя фирмы: {firm.full_name}</p>
                    <p>ATI код: {firm.ati_id}</p>
                    <p>ИНН: {firm.inn}</p>
                    <p>ОГРНИП: {firm.ogrn}</p>
                    <p>Профиль деятельности фирмы: {firm.firm_type}</p>
                    <p>Страна: {firm.location.country_name}, {firm.position_in_country} место</p>
                    <p>Город: {firm.location.short_name}, {firm.position_in_city} место</p>
                    <p>Адрес: {firm.address}</p>
                    <p>Сайт: {firm.web_site}</p>
                    <p>Ссылка на карточку фирмы: <a href={firm.info_reference}>профиль</a></p>
                    <p>Ссылка на паспорт: <a href={firm.passport_reference}>паспорт</a></p>
                    <p>Количество подтвержденных ТС: {firm.verified_trucks}</p>
                    <p>Язык: {firm.language}</p>
                </div>
            </div>
        </div>
    );
};

export default SummaryInfo;