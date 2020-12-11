import React from 'react';
import { Card } from '../Card';
import './CardsContainer.css';

function CardsContainer({ characters })
{
    return (
        <div className="cards-container">
            {
                characters.map( character => {
                    return <Card key={ character.id } character={ character } />
                })
            }
        </div>
    )
}

export default CardsContainer;