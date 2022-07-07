import React from 'react';

const DocumentItem = (props) => {
    return (
        <div>
            <h3 style={{marginTop: "10px"}}>{props.number}. {props.document.description}</h3>
            <div className="document">
                <p>Ссылка на документ: <a href={props.document.link}>Документ</a></p>
                <p>Дата создания: {props.document.creation_date}</p>
                <p>Имя: {props.document.name}</p>
            </div>
        </div>
    );
};

export default DocumentItem;