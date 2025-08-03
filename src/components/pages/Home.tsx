import React from 'react';
import Card from '../CardProps';

const Home: React.FC = () => {
    const cardData = [
        {
            title: 'Smart Lighting Setup',
            image: 'https://via.placeholder.com/150',
            content: 'Installation von intelligenten Lichtsystemen in Ihrem Zuhause.',
        },
        {
            title: 'AI Assistant Integration',
            image: 'https://via.placeholder.com/150',
            content: 'Wir integrieren Sprachassistenten für ein komfortables Smart Home.',
        },
        {
            title: 'Security System Installation',
            image: 'https://via.placeholder.com/150',
            content: 'Komplette Einrichtung eines smarten Sicherheitssystems.',
        },
    ];

    return (
        <div style={{ backgroundColor: 'white', textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '24px' }}>
                <img
                    src="https://via.placeholder.com/300x200?text=Smart+Home"
                    alt="Smart Home"
                    style={{ borderRadius: '8px' }}
                />
                <img
                    src="https://via.placeholder.com/300x200?text=K%C3%BCnstliche+Intelligenz"
                    alt="Künstliche Intelligenz"
                    style={{ borderRadius: '8px' }}
                />
            </div>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
                {cardData.map((card, index) => (
                    <Card key={index} title={card.title} image={card.image} content={card.content} />
                ))}
            </div>
        </div>
    );
};

export default Home;
