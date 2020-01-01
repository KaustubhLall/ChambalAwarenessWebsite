import React from 'react';

import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import * as Gallery1 from '../static/gallery1.jpg'
import * as Gallery2 from '../static/Gallery2.jpg'
import * as Gallery3 from '../static/gallery3.jpg'
import * as Gallery4 from '../static/gallery4.jpg'
import * as Gallery5 from '../static/Gallery5.jpg'

import * as sep from '../static/sep.jpeg'
import * as g1 from '../static/g1.jpg'
import * as g2 from '../static/g2.jpg'
import * as g3 from '../static/g3.jpg'
import * as g4 from '../static/g4.jpg'
import * as g5 from '../static/g5.jpg'

import * as smart from '../static/smart.jpeg'
import * as csr from '../static/csr.jpeg'
import * as ad from '../static/ad.PNG'

import * as fp0 from '../static/ms.jpeg'
import * as fp1 from '../static/fp1.jpeg'
import * as fp2 from '../static/fp2.jpeg'
import * as fp3 from '../static/fp3.jpeg'

const contents = {
        title: 'Chambal Charcha Kota',
        faviconLogo: "holder.js/30x30",

        mainPage: {
            missionImage: fp0,
            missionStatement: 'Our mission is Jal Shakti, through a rejuvenated, pollution and chemical free Chambal in the Hadoti Region sustaining the affected populations and ' +
                'biodiversity of Chambal ecological system including its flora and fauna.',
            firstImageRowSrc:
                [fp1, fp2, fp3],
            ad: ad,
            announcements: [
                {
                    title: 'River Issues',
                    id: 'issues',
                    content: (
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Negative factors affecting the Chambal ecosystem </ListGroupItem>
                            <ListGroupItem>Groundwater pollution due to insecticides etc </ListGroupItem>
                            <ListGroupItem>Maintenance and cleanliness of National heritage monuments and Ghats </ListGroupItem>
                            <ListGroupItem>Maintenance of natural heritage and Flora and Fauna </ListGroupItem>
                            <ListGroupItem>Funding partnerships and local CSR funding and ownership by Companies and Coaching Institutes etc.</ListGroupItem>
                        </ListGroup>
                    ),
                    image: Gallery3,
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
                    image: Gallery2,
                },
                {
                    title: 'Biodiversity',
                    id: 'biodiversity',
                    content: (
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Ensuring awareness and assessment of the INTACH 23 point Biodiversity Index under the aegis of INTACH Kota Chapter amongst civil society and
                                organizations.</ListGroupItem>

                            <ListGroupItem>Assisting government efforts as well as awareness among villagers living in the the Mukundera forests to find sustainable self employment and
                                not destroy the forest wildlife especially Tigers and the Mukundera Tiger Reserve</ListGroupItem>
                            <ListGroupItem>Raising awareness on environmental aberration</ListGroupItem>
                            <ListGroupItem>Tree plantation</ListGroupItem>
                            <ListGroupItem>CSR Funding</ListGroupItem>
                        </ListGroup>
                    ),
                    image: Gallery1,
                },
                {
                    title: 'Tourism',
                    id: 'packages',
                    content: (
                        <ListGroup className="list-group-flush">
                            <ListGroupItem> Eco Tourism Packages for Mukandara Hills</ListGroupItem>
                            <ListGroupItem> Rock painting weekend Tours</ListGroupItem>
                            <ListGroupItem> Jain Sacred Land Tours</ListGroupItem>
                            <ListGroupItem> Mathuradhish and city Temple Tours</ListGroupItem>
                        </ListGroup>
                    ),
                    image: Gallery4,
                },
                {
                    title: 'Self Employment',
                    id: 'sep',
                    content: (
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Assisting in the creation of self employment opportunities for the population in conjunction with the government by assiting in raising
                                awareness</ListGroupItem>
                        </ListGroup>
                    ),
                    image: sep,

                },
                {
                    title: 'Yearly Awards and Events',
                    id: 'awards',
                    content: (
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Bi- Annual Bird watching event is held in January and July every year</ListGroupItem>
                            <ListGroupItem>Best Tour Package of the year Award by Chambal Charcha</ListGroupItem>
                            <ListGroupItem>Annual Best Kitchen Garden Contest</ListGroupItem>
                            <ListGroupItem>Hadoti Heritage Hero Award</ListGroupItem>
                            <ListGroupItem>Best Viraasat Clubs in schools</ListGroupItem>
                            <ListGroupItem>Best Natural Heritge Photos</ListGroupItem>
                            <ListGroupItem>Best Rock Painting Discovery Award</ListGroupItem>
                            <ListGroupItem>Best Hadoti Herbal Catalogue Maker</ListGroupItem>
                            <ListGroupItem>Best CSR funding raisor</ListGroupItem>
                            <ListGroupItem>Best Biodiversity protection effort</ListGroupItem>
                        </ListGroup>
                    ),
                    image: Gallery5,

                },
                {
                    title: 'SMART Heritage',
                    id: 'heritage',
                    content: (
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Supporting a Smart Chambal planning to compliment Smart City Kota</ListGroupItem>
                            <ListGroupItem>Beautification and cleaning of Chambal Ghats and Temples</ListGroupItem>
                            <ListGroupItem>Raising awareness of solid waste management and assist govt audit of waste management efforts</ListGroupItem>
                            <ListGroupItem>Usage of online Kota Smart City Apps like medcords</ListGroupItem>
                        </ListGroup>
                    ),
                    image: smart,

                },
                {
                    title: 'CSR Pitch Decking',
                    id: 'csr',
                    content: (
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Working with members, partners and organizations to raise funds</ListGroupItem>
                        </ListGroup>
                    ),
                    image: csr,

                },

            ],

            facts:
                <Accordion defaultActiveKey="0">
                    <p>The Chambal is the chief tributary of the Yamuna River and rises in the Vindhya Range just south of
                        Mhow, western Madhya Pradesh state. From its source it flows north into southeastern Rajasthan state
                        along the Aravalis.
                    </p>

                    <Accordion.Collapse eventKey="2">
                        <div>
                            <p>
                                Turning northeast, it flows past Kota and along the Rajasthan–Madhya Pradesh
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
                    </Accordion.Collapse>

                    <Accordion.Toggle as={Button} variant="info" eventKey="2">
                        See All
                    </Accordion.Toggle>
                </Accordion>
            ,

            mission: (
                <Accordion>
                    <p>The Chambal committee is a voluntary organization of citizens of Kota. It is a part of the Kota
                        chapter of INTACH. It is working on preserving the quality of river Chambal and aims to address
                        negative factors which impact the Chambal ecosystem.
                    </p>

                    <Accordion.Collapse eventKey="1">
                        <p>
                            It is also addressing the issues of groundwater
                            pollution viz insecticides, pollutants etc. which affect the quality of water through the 14 waste
                            water drains falling into the river within the city of Kota. The growth of population along the
                            river has its own impact on damaging the natural flora and fauna of the river ecosystem leading to
                            deterioration of river ecosystem and soil erosion mainly through CSR and individual funding (Pitch Decking).
                        </p>
                    </Accordion.Collapse>
                    <Accordion.Toggle as={Button} variant="info" eventKey="1">
                        See All
                    </Accordion.Toggle>
                </Accordion>
            ),


            committee: (
                <Accordion defaultActiveKey="0">
                    <Container>
                        <Row>
                            <Col>
                                <ButtonGroup vertical>
                                    <Button variant='link' size='sm' target={'_blank'} href={'mailto:rpbhatnagar2015@gmail.com'}> RP Bhatnagar (Chairman) +91-991-003-1155 /
                                        +91-941-370-2055 </Button>
                                    <Button variant='link' size='sm' target={'_blank'} href={'mailto:vibhabhatnagar1943@gmail.com'}> Anupratan Bhatnagar +91-935-263-3393 </Button>
                                    <Button variant='link' size='sm' target={'_blank'} href={'mailto:vivekjain_taxperts@yahoo.in'}> P. C. Jain (Advocate) +91-941-418-5600</Button>
                                    <Button variant='link' size='sm' target={'_blank'} href={'mailto:blank'}> Gopal Sharma +91-982-908-9464</Button>
                                    <Button variant='link' size='sm' target={'_blank'} href={'mailto:blank'}> Hem Lata Gandhi +91-941-324-0629</Button>

                                </ButtonGroup>
                            </Col>
                        </Row>


                        <Accordion.Collapse eventKey="1">
                            <ButtonGroup vertical>
                                <Button variant='link' size='sm' target={'_blank'} href={'mailto:kuldeep.lbsgroup@gmail.com'}>Kuldeep Mathur (LBS) +91-982-925-3001 </Button>
                                <Button variant='link' size='sm' target={'_blank'} href={'mailto:sethinikhilesh@gmail.com'}> Nikhilesh Sethi +91-982-903-5650 </Button>
                                <Button variant='link' size='sm' target={'_blank'} href={'mailto:blank'}> Prof. G. S. Bhatnagar +91-982-904-7737 </Button>
                                <Button variant='link' size='sm' target={'_blank'} href={'mailto:trea.grmes@gmail.com'}> Vineet Bakshi (Rear Admiral Retd) +91-982-325-7000 </Button>
                                <Button variant='link' size='sm' target={'_blank'} href={'mailto:blank'}> Arun Saxena (IIT BOMBAY) +91-836-993-6626 </Button>
                                <Button variant='link' size='sm' target={'_blank'} href={'mailto:victoriaksingh@googlemail.com'}> Victoria Singh (Dhakarkheri)
                                    +91-982-903-6384 </Button>
                                <Button variant='link' size='sm' target={'_blank'} href={'mailto:blank'}> Srivastva J. N. (Historian) +91-946-129-4580 </Button>
                                <Button variant='link' size='sm' target={'_blank'} href={'mailto:Tarumeetsingh@gmail.com'}> Tarumeet Singh Bedi +91-982-813-8333</Button>
                                <Button variant='link' size='sm' target={'_blank'} href={'mailto:blank'}> A. H. Zaidi +91-982-916-2271</Button>
                                <Button variant='link' size='sm' target={'_blank'} href={'mailto:blank'}> Krishendra Sg. Nama +91-941-312-9603 </Button>
                                <Button variant='link' size='sm' target={'_blank'} href={'mailto:blank'}> Manu Bhatnagar (NHD) +91-981-003-6461 </Button>
                                <Button variant='link' size='sm' target={'_blank'} href={'mailto:blank'}> Dr. PrahladDubey +91-925-160-9368 </Button>
                                <Button variant='link' size='sm' target={'_blank'} href={'mailto:blank'}> Brijesh Vijayvargiya-Press +91-941-425-7341 </Button>
                                <Button variant='link' size='sm' target={'_blank'} href={'mailto:blank'}> Sarveshwari Raniwala +91-941-417-9858</Button>
                                <Button variant='link' size='sm' target={'_blank'} href={'mailto:blank'}> Dr. Sushma Ahuja +91-992-807-4780 </Button>
                                <Button variant='link' size='sm' target={'_blank'} href={'mailto:susan@taaindia.org'}> Dr. Susan Raj +91-707-304-4452 </Button>
                            </ButtonGroup>
                        </Accordion.Collapse>

                        <Accordion.Toggle as={Button} variant="info" eventKey="1">
                            See All
                        </Accordion.Toggle>
                        <p/>
                    </Container>
                </Accordion>
            ),


        }
        ,
        FAQPage: [
            {
                question: 'How can I join the Chambal Charcha campaign?',
                answer: 'You can join the campaign by contacting any of the members and enrolling with them.',
            },
            {
                question: 'How do I join "Jivit Nadi" and "Samudra Mitra" schemes within Kota city?',
                answer: 'You can join the campaign by contacting RP Bhatnagar (CCC) or any other member.',

            },
            {
                question: 'In what way can this campaign help government schemes of "Atal Yojna" and similar efforts?',
                answer: 'This campaign shall be at the grassroots/village level helping the macroschemes above.',

            },
            {
                question: 'What will the test for water cleanliness be?',
                answer: 'The water cleanliness shall be on the before/after model of water via biochemical method i.e. water as it is, and after cleaning.',
            },
            {
                question: 'How will communication between me and website/you be improved?',
                answer: 'The awareness of the problem and motivation to solve it shall be the improvement criterion.',
            },
            {
                question: 'Which schools have formed the Virasat clubs under INTACH?',
                answer: 'Bakshi schools Kota, Lal Bahadur Shashtri Schools Kota and RAC School Kota.',
            },
            {
                question: 'How will the beautification of Chambal and smart city Kota be affected by this campaign?',
                answer: 'Beautification and smart city on sustainable basis shall be a continuous process and will be implemented with the help of UIT Kota/Collector/Commissioner/INTACH Kota.',
            },
            {
                question: 'What are the 23 parameters of biodiversity by INTACH and how will the trees be maintained?',
                answer: 'The trees will be maintained via app treelogger and on Haridwar Forest department method of people giving money to maintain a particular tree on family events.',
            }

        ]
        ,
        GalleryPage: {
            images: [
                {
                    src: g1
                },
                {
                    src: g2
                },
                {
                    src: g3
                },
                {
                    src: g4
                },
                {
                    src: g5
                },

            ],


        },

        contacts: [
            {
                name: 'Contact name',
                number: <strong>+91 1234567890</strong>,
                email: <Button variant={'outline-secondary'} href={'mailto:'}>email@email.com</Button>,
            },


        ]

    }
;

export default contents;