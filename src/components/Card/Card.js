import React from 'react';
import './Card.css';

function Card({ character: { name, description, thumbnail } })
{
    return (
        <div className="card">
            <div className="card-border" data-description={ description }>
                <h2>{ name }</h2>
                <img alt={ name } src={ `${ thumbnail.path }/standard_fantastic.${ thumbnail.extension }` } />
            </div>
        </div>
    )
}

export default Card;