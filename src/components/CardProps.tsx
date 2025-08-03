import React from 'react';

interface CardProps {
    title: string;
    image: string;
    content: string;
}

const Card: React.FC<CardProps> = ({title, image, content}) => {
    return (
        <div
            style={{
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '16px',
                maxWidth: '300px',
            }}
        >
            <h3>{title}</h3>
            <img
                src={image}
                alt={title}
                style={{width: '100%', height: 'auto', borderRadius: '4px'}}
            />
            <p>{content}</p>
        </div>
    );
};

export default Card;
