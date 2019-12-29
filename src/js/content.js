import {loremIpsum} from "lorem-ipsum";
import React from 'react';
import Card from "react-bootstrap/Card";
import * as ad from '../static/ad.PNG'

const contents = {
    title: 'IntachKota',
    favicon_logo_src: "holder.js/30x30",

    mainPage: {
        topImage: "https://picsum.photos/1400/400",
        missionStatement: 'Our mission is Jal Shakti, arising out of chambal river in Hadoti Region, Kota city.',
        firstImageRowSrc:
            ["https://picsum.photos/400", "https://picsum.photos/400",
                "https://picsum.photos/400"],
        ad: ad,
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
    },

    FAQPage: {},

    GalleryPage: {},

    ContactUsPage: {},

    ChambalRiverPage: {},


};

export default contents;