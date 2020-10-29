import React from 'react'

const Card = (props) => {
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title text-center">
                        {props.svgHeader}
                        <br></br>
                        {props.headerText}
                    </h5>
                    <hr></hr>
                    <p className="card-text text-center">{props.slogan}</p>
                    <ul class="list-group text-center">
                        {props.children}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export { Card }
