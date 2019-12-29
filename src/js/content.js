import {loremIpsum} from "lorem-ipsum";
import React from 'react';
import * as ad from '../static/ad.PNG'
import Popover from "react-bootstrap/Popover";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
        annoucements: [
            {
                title: 'River Issues',
                id:'issues',
                content: (
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Negative factor of Chambal ecosystem</ListGroupItem>
                        <ListGroupItem>Groundwater pollution due to insecticides etc</ListGroupItem>
                        <ListGroupItem>National heritage dangers and prevention</ListGroupItem>
                        <ListGroupItem>CSR Funding</ListGroupItem>
                    </ListGroup>
                ),
            },
            {
                title: 'MSWM Condunrum',
                id: 'mswm',
                content: (
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Swachh Bharat mission</ListGroupItem>
                        <ListGroupItem>Microplastic pollution</ListGroupItem>
                        <ListGroupItem>Garbage data, 22 nallas pollution and satellite imaging</ListGroupItem>
                        <ListGroupItem>E-waste management warriors</ListGroupItem>
                        <ListGroupItem>Measure and manage</ListGroupItem>
                        <ListGroupItem>CSR Funding</ListGroupItem>
                    </ListGroup>
                ),
            },
            {
                title: 'Biodiversity',
                id:'biodiversity',
                content: (
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Bio diversity 23 index</ListGroupItem>
                        <ListGroupItem>Vulnerable Mukundera Tiger Reserve</ListGroupItem>
                        <ListGroupItem>Environmental aberration</ListGroupItem>
                        <ListGroupItem>Tree plantation</ListGroupItem>
                        <ListGroupItem>CSR Funding</ListGroupItem>
                    </ListGroup>
                ),
            },
            {
                title: 'Tour Packages',
                id:'packages',
                content: (
                    <ListGroup className="list-group-flush">
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                    </ListGroup>
                ),
            },
            {
                title: 'Self Employment Program',
                id:'sep',
                content: (
                    <ListGroup className="list-group-flush">
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                    </ListGroup>
                ),
            },
            {
                title: 'Yearly Awards and Events',
                id:'awards',
                content: (
                    <ListGroup className="list-group-flush">
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                    </ListGroup>
                ),
            },
            {
                title: 'SMART Heritage',
                id:'heritage',
                content: (
                    <ListGroup className="list-group-flush">
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                    </ListGroup>
                ),
            },
            {
                title: 'CSR Pitch Decking',
                content: (
                    <ListGroup className="list-group-flush">
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                    </ListGroup>
                ),
            },

        ],

        facts:
            <div>
                <p>The Chambal is the chief tributary of the Yamuna River and rises in the Vindhya Range just south of
                    Mhow, western Madhya Pradesh state. From its source it flows north into southeastern Rajasthan state
                    along the Aravalis. Turning northeast, it flows past Kota and along the Rajasthan–Madhya Pradesh
                    border; shifting east-southeast, it forms a portion of the Uttar Pradesh–Madhya Pradesh border and
                    flows through Uttar Pradesh to empty into the Yamuna after a 550-mile (900-km) course.
                </p>
                <p>
                    The Chambal’s lower course is lined by a 10-mile (16-km) belt of badland gullies resulting from
                    accelerated soil erosion and is the site of a major project in soil conservation.
                </p>
                <p>
                    It is ecologically a very important river and harbours a rich biodiversity including two species of
                    crocodiles. The water of the river while not fit for drinking can still be used for agriculture and
                    provides a favourable habitat for the flora and fauna. Industrialization in Kota and surrounding
                    areas, as well as increasing human habitat are causes of increased pollution and concern.
                </p>
            </div>
        ,

        mission: (
            <p>
                The Chambal committee is a voluntary organization of citizes of Kota. It is a part of the Kota
                chapter of INTACH. It is working on preserving the quality of river Chambal and aims to address
                negative factors which impact the Chambal ecosystem. It is also addressing the issues of groundwater
                pollution viz incesticides, pollutants etc. which affect the quality of water through the 14 waste
                water drains falling into the river within the city of Kota. The growth of population along the
                river has its own impact on damaging the natural flora and fauna of the river ecosystem leading to
                detirioration of river ecosystem and soil erosion.
            </p>
        ),


        committee: (
            <Accordion defaultActiveKey="0">
                <Container>
                    <Row>
                        <Col>
                            <ButtonGroup vertical>
                                <Button variant='link' size='sm' target={'_blank'} href={'mailto:vibhabhatnagar1943@gmail.com'}> Bhat Vibha (RPB) 997-1798-5686 </Button>
                                <Button variant='link' size='sm' target={'_blank'} href={'mailto:vivekjain_taxperts@yahoo.in'}> Jain P. C. (Advocate) 941-418-5600</Button>
                                <Button variant='link' size='sm' target={'_blank'} href={'mailto:blank'}> ChmblSena GopalSharma 91 9829089464</Button>
                            </ButtonGroup>
                        </Col>
                    </Row>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        See All
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="1">
                        <ButtonGroup vertical>
                            {/*todo make a contact card*/}
                            <Button variant='link' size='sm' target={'_blank'} href={'mailto:blank'}> Hem Lata Gandhi(Susan) 9 9413240629</Button>
                            <Button variant='link' size='sm' target={'_blank'} href={'mailto:kuldeep.lbsgroup@gmail.com'}> Mathur Kuldeep(LBS) 91 9829253001 </Button>
                            <Button variant='link' size='sm' target={'_blank'} href={'mailto:sethinikhilesh@gmail.com'}> Nikhilesh Sethi 91 9829035650 </Button>
                            <Button variant='link' size='sm' target={'_blank'} href={'mailto:blank'}> Prof. G. S. Bhatnagar 91 9829047737 </Button>
                            <Button variant='link' size='sm' target={'_blank'} href={'mailto:trea.grmes@gmail.com'}> RearAdmiral(Retd) Vineet Bakshi 91 9823257000 </Button>
                            <Button variant='link' size='sm' target={'_blank'} href={'mailto:blank'}> SaxenaArun(IIT)BOMBAY 91 8369936626 </Button>
                            <Button variant='link' size='sm' target={'_blank'} href={'mailto:victoriaksingh@googlemail.com'}> Singh Victoria (Dhakarkheri) 91 9829036384 </Button>
                            <Button variant='link' size='sm' target={'_blank'} href={'mailto:blank'}> Srivastva J. N. (Historian)919461294580 </Button>
                            <Button variant='link' size='sm' target={'_blank'} href={'mailto:Tarumeetsingh@gmail.com'}> Tarumeet Singh Bedi 919828138333</Button>
                            <Button variant='link' size='sm' target={'_blank'} href={'mailto:blank'}> A. H. Zaidi +91 98291 62271</Button>
                            <Button variant='link' size='sm' target={'_blank'} href={'mailto:blank'}> Krishendra Sg. Nama +91 94131 29603 </Button>
                            <Button variant='link' size='sm' target={'_blank'} href={'mailto:blank'}> Manu Bhatnagar (NHD) +91 98100 36461 </Button>
                            <Button variant='link' size='sm' target={'_blank'} href={'mailto:blank'}> Dr. PrahladDubey +91 92516 09368 </Button>
                            <Button variant='link' size='sm' target={'_blank'} href={'mailto:blank'}> BrijeshVijayvargiya-Press +91 94142 57341 </Button>
                            <Button variant='link' size='sm' target={'_blank'} href={'mailto:blank'}> SarveshwariRaniwala +91 94141 79858</Button>
                            <Button variant='link' size='sm' target={'_blank'} href={'mailto:blank'}> Dr SushmaAhuja +91 99280 74780 </Button>
                        </ButtonGroup>
                    </Accordion.Collapse>
                </Container>
            </Accordion>
        ),


    },

    FAQPage: {},

    GalleryPage: {
        images: [
            {
                src: "https://picsum.photos/1400/400",
                desc: loremIpsum({count: 3}),
                title: loremIpsum()
            },
            {
                src: "https://picsum.photos/1400/400",
                desc: loremIpsum({count: 3}),
                title: loremIpsum()
            },
            {
                src: "https://picsum.photos/1400/400",
                desc: loremIpsum({count: 3}),
                title: loremIpsum()
            },
            {
                src: "https://picsum.photos/1400/400",
                desc: loremIpsum({count: 3}),
                title: loremIpsum()
            },
            {
                src: "https://picsum.photos/1400/400",
                desc: loremIpsum({count: 3}),
                title: loremIpsum()
            },
        ],


    },

    ContactUsPage: {},

    ChambalRiverPage: {},


};

export default contents;