import {loremIpsum} from "lorem-ipsum";
import React from 'react';
import Card from "react-bootstrap/Card";

const contents = {
    title: 'IntachKota',
    favicon_logo_src: "holder.js/30x30",

    mainPage: {
        topImage: "data:image/jpeg;base64,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",
        missionStatement: 'Our mission is Jal Shakti, arising out of chambal river in Hadoti Region, Kota city.',
        firstImageRowSrc:
            ["https://picsum.photos/400", "https://picsum.photos/400",
                "https://picsum.photos/400"],
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
        ),

        announcement_2: (
            <Card style={{width: '18rem'}}>
                <Card.Header>Our Mission - Reviewing Chambal River </Card.Header>
                <Card.Body>
                    <Card.Title>Awareness Creation in Society</Card.Title>
                    <Card.Text>
                        {loremIpsum({count: 3})}
                    </Card.Text>
                </Card.Body>

                <Card.Footer>
                    <small className="text-muted">RP Bhatnagar</small>
                </Card.Footer>
            </Card>
        ),

        announcement_3: (
            <Card style={{width: '18rem'}}>
                <Card.Header>Our Motivation - Jivit Nadi Organization</Card.Header>
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

export default contents;