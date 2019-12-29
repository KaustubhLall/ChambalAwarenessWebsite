import {loremIpsum} from "lorem-ipsum";
import React from 'react';
import Card from "react-bootstrap/Card";

const contents = {
    title: 'IntachKota',
    favicon_logo_src: "holder.js/30x30",

    mainPage: {
        topImage: "holder.js/800x400",
        missionStatement: 'This is our mission statement. ' + loremIpsum({count: 3}),
        firstImageRowSrc: ["holder.js/400x400", "holder.js/400x400", "holder.js/400x400"],
        announcement_1: (
            <Card style={{width: '18rem'}}>
                <Card.Header>Intach Kota - A Brief Review </Card.Header>
                <Card.Body>
                    <Card.Title>Post Earth Day</Card.Title>
                    <Card.Text>
                        {loremIpsum({count: 3})}
                    </Card.Text>
                </Card.Body>

                <Card.Footer>
                    <small className="text-muted">RP Bhatnagar</small>
                </Card.Footer>
            </Card>
        )
    }
};

// main page

const announcement_1 = (
    <Card style={{width: '18rem'}}>
        <Card.Body>
            <Card.Title>Intach Kota - A Brief Review</Card.Title>
            <Card.Text>
                {loremIpsum({count: 3})}
            </Card.Text>
        </Card.Body>

        <Card.Footer>
            <small className="text-muted">RP Bhatnagar</small>
        </Card.Footer>
    </Card>
);
export default contents;