import React from 'react'
import Card from '../components/Card'


export default function Album() {
    let card_data = [{
        paragraph: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer",
        time: 4,
        img_url: "./Thumbnail.png"
    }, {
        paragraph: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer",
        time: 3,
        img_url: "./Thumbnail.png"
    }, {
        paragraph: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer",
        time: 2,
        img_url: "./Thumbnail.png"
    }, {
        paragraph: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer",
        time: 9,
        img_url: "./Thumbnail.png"
    }, {
        paragraph: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer",
        time: 12,
        img_url: "./Thumbnail.png"
    }, {
        paragraph: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer",
        time: 8,
        img_url: "./Thumbnail.png"
    }, {
        paragraph: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer",
        time: 13,
        img_url: "./Thumbnail.png"
    }, {
        paragraph: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer",
        time: 19,
        img_url: "./Thumbnail.png"
    }, {
        paragraph: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer",
        time: 17,
        img_url: "./Thumbnail.png"
    }, {
        paragraph: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer",
        time: 9,
        img_url: "./Thumbnail.png"
    }, {
        paragraph: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer",
        time: 9,
        img_url: "./Thumbnail.png"
    }
    ]
    return (
        <div className="album py-5 bg-light">
            <div className="container">
                <div className="row">

                    {
                        card_data.map((element) => {
                            return (<Card data={element} 
                            let background1={element.time<=5?"blue":"red"}/>)
                        })
                    }

                </div>
            </div>
        </div>
    )
}
