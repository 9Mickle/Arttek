import React from 'react';

const Activity = ({firm, visible}) => {
    if (!visible) {
        return (
            <h1 style={{textAlign: "center"}}>Введите номер фирмы!</h1>
        )
    }
    return (
        <div>
            <h1>Активность</h1>
            <div className="activity">
                <p>Дата регистрации: {firm.registration_date}</p>
                <p>Дата последнего изменения данных: {firm.contact_info_changed}</p>
                <p>Число дней со входами на сайт за последние 30 дней: {firm.last_month_active_days}</p>
                <p>Дата удаления: {firm.deletion_date}</p>
            </div>
        </div>
    );
};

export default Activity;