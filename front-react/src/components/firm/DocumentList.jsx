import React from 'react';
import DocumentItem from "./DocumentItem";

const DocumentList = ({documents, visible}) => {
    if (!visible) {
        return (
            <h1 style={{margin: "20px 0"}}>Введите номер фирмы!</h1>
        )
    }
    return (
        <div>
            <h1 style={{margin: "20px 0"}}>Документы фирмы</h1>
            {documents.length > 0
                ? <div>
                    {documents.map((document, index) =>
                        <DocumentItem number={index + 1} document={document} key={document.link}/>
                    )}
                </div>
                : <h3>Документы не найдены</h3>

            }
        </div>
    );
};

export default DocumentList;