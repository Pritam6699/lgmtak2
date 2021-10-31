import React from 'react';
import './cards.css';
import card from "react-bootstrap/card";
export default function cards(props) {
    return (
        <div className="cards">
            {props.cardData.map((person, index) => {
                return (
                    <card style={{width: "21rem"}}>
                        <card.Img varient="top" src={person.avatar} />
                        <card.Body>
                            <card.Text>
                                <ul>

                                    <li>Name: {person.first_name} {person.last_name}</li>
                                    <li>Email: {person.email}</li>
                                    <li>ID: {person.id}</li>
                                </ul>
                            </card.Text>
                        </card.Body>
                    </card>
                );
            })}
        </div>
    );
}