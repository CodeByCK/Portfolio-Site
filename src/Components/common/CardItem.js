import React from 'react'

const CardItem = ({ svgLogo, title }) => {
    return (
        <div>
            <li class="list-group-item">{svgLogo}<br></br>{title}</li>
        </div>
    )
}

export { CardItem }
