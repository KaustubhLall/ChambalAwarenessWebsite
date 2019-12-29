import {loremIpsum} from "lorem-ipsum";
import React from 'react';
import Card from "react-bootstrap/Card";
import * as ad from '../static/ad.PNG'
import Popover from "react-bootstrap/Popover";

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
        ),

        facts: (
            <Popover id="popover-basic">
                <Popover.Title as="h3">{'Facts about Chambal'}</Popover.Title>
                <Popover.Content>
                    The Chambal is the chief tributary of the Yamuna River and rises in the Vindhya Range just south of
                    Mhow, western Madhya Pradesh state. From its source it flows north into southeastern Rajasthan state
                    along the Aravalis. Turning northeast, it flows past Kota and along the Rajasthan–Madhya Pradesh
                    border; shifting east-southeast, it forms a portion of the Uttar Pradesh–Madhya Pradesh border and
                    flows through Uttar Pradesh to empty into the Yamuna after a 550-mile (900-km) course.

                    The Chambal’s lower course is lined by a 10-mile (16-km) belt of badland gullies resulting from
                    accelerated soil erosion and is the site of a major project in soil conservation.

                    It is ecologically a very important river and harbours a rich biodiversity including two species of
                    crocodiles. The water of the river while not fit for drinking can still be used for agriculture and
                    provides a favourable habitat for the flora and fauna. Industrialization in Kota and surrounding
                    areas, as well as increasing human habitat are causes of increased pollution and concern.
                </Popover.Content>
            </Popover>
        ),

        mission: (
            <Popover id="popover-basic">
                <Popover.Title as="h3">Our Mission</Popover.Title>
                <Popover.Content>
                    The Chambal committee is a voluntary organization of citizes of Kota. It is a part of the Kota
                    chapter of INTACH. It is working on preserving the quality of river Chambal and aims to address
                    negative factors which impact the Chambal ecosystem. It is also addressing the issues of groundwater
                    pollution viz incesticides, pollutants etc. which affect the quality of water through the 14 waste
                    water drains falling into the river within the city of Kota. The growth of population along the
                    river has its own impact on damaging the natural flora and fauna of the river ecosystem leading to
                    detirioration of river ecosystem and soil erosion.
                </Popover.Content>
            </Popover>

        ),

        committee: (
            <Popover id="popover-basic">
                <Popover.Title as="h3">Our People</Popover.Title>
                <Popover.Content>
                    And here's some <strong>amazing</strong> content. It's very engaging.
                    right?
                </Popover.Content>
            </Popover>
        ),


    },

    FAQPage: {},

    GalleryPage: {
        images: [
            {
                src: "https://picsum.photos/1400/400",
                desc: '',
            },
        ],


    },

    ContactUsPage: {},

    ChambalRiverPage: {},


};

export default contents;