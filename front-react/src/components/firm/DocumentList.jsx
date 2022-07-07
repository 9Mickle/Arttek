import React from 'react';
import DocumentItem from "./DocumentItem";

const DocumentList = ({documents, visible}) => {
        if (!visible) {
            return (
                <h1 style={{textAlign: "center"}}>Введите номер фирмы!</h1>
            )
        }
        return (
            <div>
                <h1>Документы фирмы</h1>
                <div className="document">
                    {documents.map((document, index) =>
                        <DocumentItem number={index + 1} document={document} key={document.link}/>
                    )}
                </div>
            </div>
        );
    };

export default DocumentList;