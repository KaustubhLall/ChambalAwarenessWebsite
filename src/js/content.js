import {loremIpsum} from "lorem-ipsum";
import React from 'react';
import * as ad from '../static/ad.PNG'
import Popover from "react-bootstrap/Popover";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

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
                content: '',
            },
            {
                title: 'MSWM Condunrum',
                content: '',
            },
            {
                title: 'Biodiversity',
                content: '',
            },
            {
                title: 'Tour Packages',
                content: '',
            },
            {
                title: 'Self Employment Program',
                content: '',
            },
            {
                title: 'Yearly Awards and Events',
                content: '',
            },
            {
                title: 'SMART Heritage',
                content: '',
            },
            {
                title: 'CSR Pitch Decking',
                content: '',
            },

        ],
        facts: (
            <Popover id="popover-basic" style={{'max-width': '400px'}}>
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
            <Popover id="popover-basic" style={{'max-width': '400px'}}>
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
            <Popover id="popover-basic" style={{'max-width': '600px'}}>
                <Popover.Title as="h3">Our People</Popover.Title>
                <Popover.Content>
                    <ButtonGroup vertical>
                        <Button variant='link' size='sm' href={'mailto:vibhabhatnagar1943@gmail.com'}> Bhat Vibha (RPB) 997-1798-5686 </Button>
                        <Button variant='link' size='sm' href={'mailto:vivekjain_taxperts@yahoo.in'}> Jain P. C. (Advocate) 941-418-5600</Button>
                        <Button variant='link' size='sm' href={'mailto:blank'}> ChmblSena GopalSharma 91 9829089464</Button>
                        <Button variant='link' size='sm' href={'mailto:blank'}> Hem Lata Gandhi(Susan) 9 9413240629</Button>
                        <Button variant='link' size='sm' href={'mailto:kuldeep.lbsgroup@gmail.com'}> Mathur Kuldeep(LBS) 91 9829253001 </Button>
                        <Button variant='link' size='sm' href={'mailto:sethinikhilesh@gmail.com'}> NikhileshSethi 91 9829035650 </Button>
                        <Button variant='link' size='sm' href={'mailto:blank'}> Prof. G. S. Bhatnagar 91 9829047737 </Button>
                        <Button variant='link' size='sm' href={'mailto:trea.grmes@gmail.com'}> RearAdmiral(Retd )Vineet Bakshi 91 9823257000 </Button>
                        <Button variant='link' size='sm' href={'mailto:blank'}> SaxenaArun(IIT)BOMBAY 91 8369936626 </Button>
                        <Button variant='link' size='sm' href={'mailto:victoriaksingh@googlemail.com'}> Singh Victoria (Dhakarkheri) 91 9829036384 </Button>
                        <Button variant='link' size='sm' href={'mailto:blank'}> Srivastva J. N. (Historian)919461294580 </Button>
                        <Button variant='link' size='sm' href={'mailto:Tarumeetsingh@gmail.com'}> Tarumeet Singh Bedi 919828138333</Button>
                        <Button variant='link' size='sm' href={'mailto:blank'}> A. H. Zaidi +91 98291 62271</Button>
                        <Button variant='link' size='sm' href={'mailto:blank'}> Krishendra Sg. Nama +91 94131 29603 </Button>
                        <Button variant='link' size='sm' href={'mailto:blank'}> Manu Bhatnagar (NHD) +91 98100 36461 </Button>
                        <Button variant='link' size='sm' href={'mailto:blank'}> Dr. PrahladDubey +91 92516 09368 </Button>
                        <Button variant='link' size='sm' href={'mailto:blank'}> BrijeshVijayvargiya-Press +91 94142 57341 </Button>
                        <Button variant='link' size='sm' href={'mailto:blank'}> SarveshwariRaniwala +91 94141 79858</Button>
                        <Button variant='link' size='sm' href={'mailto:blank'}> Dr SushmaAhuja +91 99280 74780 </Button>
                    </ButtonGroup>
                </Popover.Content>
            </Popover>
        ),


    },

    FAQPage: {},

    GalleryPage: {
        images: [
            {
                src: "https://picsum.photos/1400/800",
                desc: loremIpsum({count: 3}),
                title: loremIpsum()
            },
            {
                src: "https://picsum.photos/1400/800",
                desc: loremIpsum({count: 3}),
                title: loremIpsum()
            },
            {
                src: "https://picsum.photos/1400/800",
                desc: loremIpsum({count: 3}),
                title: loremIpsum()
            },
            {
                src: "https://picsum.photos/1400/800",
                desc: loremIpsum({count: 3}),
                title: loremIpsum()
            },
            {
                src: "https://picsum.photos/1400/800",
                desc: loremIpsum({count: 3}),
                title: loremIpsum()
            },
        ],


    },

    ContactUsPage: {},

    ChambalRiverPage: {},


};

export default contents;