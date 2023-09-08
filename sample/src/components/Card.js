import React from 'react'
import CardButton from '../components/CardButton'
import style from './Card.module.css'

export default function Card(props) {
  let bgcolor= props.data.time>10? props.data.time>15? style.largetime:style.mediumtime:style.smalltime
  return (
    <div className="col-sm-12 col-lg-4 col-md-6 col-xl-3 col-xxl-2">
              <div className={`card mb-4 shadow-sm ${bgcolor} `}>
                <img
                  className="card-img-top"
                  src={props.data.img_url}
                  alt="Card image cap"
                />
                <div className={`card-body `} >
                  <p className="card-text">
                    {props.data.paragraph}
                  </p>
                  <div
                    className="d-flex justify-content-between align-items-center"
                  >
                    <div className="btn-group">
                      <CardButton text="View"/>
                      <CardButton text="Edit"/>
                    </div>
                    <small className="text-muted">{props.data.time} min</small>
                  </div>
                </div>
              </div>
            </div>
  )
}