import React from 'react';

const Rank = ({firm, visible}) => {
    if (!visible) {
        return (
            <h1 style={{textAlign: "center"}}>Введите номер фирмы!</h1>
        )
    }
    return (
        <div>
            <h1>Рейтинг</h1>
            <div className="rank">
                <p style={{fontWeight: "bold"}}>Балл: {firm.score}</p>
                <p>Количество рекомендаций от фирм: {firm.recommendations_count}</p>
                <p>Количество упоминаний на форуме недобросовестных партнеров: {firm.bad_partner_mentions_count}</p>
                <p>Сумма отрицательных баллов: {firm.negative_points_sum}</p>
                <p>Количество претензий от фирм: {firm.claims_count}</p>
            </div>
        </div>
    );
};

export default Rank;