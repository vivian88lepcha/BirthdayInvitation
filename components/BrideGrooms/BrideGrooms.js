import Image from "next/image";
import React from "react";
import SectionTitle from "../SectionTitle";
import timg1 from '/public/images/team/1month.jpeg'
import timg2 from '/public/images/team/1st.jpeg'
import timg3 from '/public/images/team/2nd.jpg'
import timg4 from '/public/images/team/3rd.jpg'
import timg5 from '/public/images/team/4th.jpg'
import timg6 from '/public/images/team/5th.jpeg'
import timg7 from '/public/images/team/6th.jpg'
import timg8 from '/public/images/team/7th.jpg'
import timg9 from '/public/images/team/8th.jpg'
import timg10 from '/public/images/team/9th.jpg'
import timg11 from '/public/images/team/10th.jpg'
import timg12 from '/public/images/team/11th.jpg'


import shape1 from '/public/images/team/shape1.jpg'
import shape2 from '/public/images/team/shape2.jpg'


const brideGrooms = [
  {
    id:'1',
    tImg:timg1,
    name:'Born Day',
    title:'October',     
 },
 {
    id:'2',
    tImg:timg2,
    name:'1st Month',
    title:'November',     
 },
 {
    id:'3',
    tImg:timg3,
    name:'2nd Month',
    title:'December',     
 },
 {
    id:'4',
    tImg:timg4,
    name:'3rd Month',
    title:'January',     
 },
 {
    id:'5',
    tImg:timg5,
    name:'4th Month',
    title:'February',     
 },
 {
    id:'6',
    tImg:timg6,
    name:'5th Month',
    title:'March',     
 },
 {
  id:'7',
  tImg:timg7,
  name:'6th Month',
  title:'April',     
},
{
  id:'8',
  tImg:timg8,
  name:'7th Month',
  title:'May',     
},
{
  id:'9',
  tImg:timg9,
  name:'8th Month',
  title:'June',     
},
{
  id:'10',
  tImg:timg10,
  name:'9th Month',
  title:'July',     
},
{
  id:'11',
  tImg:timg11,
  name:'10th Month',
  title:'August',     
},
{
  id:'12',
  tImg:timg12,
  name:'11th Month',
  title:'September',     
},
 
]


const BrideGrooms = (props) => {

  return (
      <section className={`wpo-team-section ${props.tClass}`}>
        <div className="container">
          <SectionTitle MainTitle={'Journey to One'} />
          <div className="wpo-team-wrap">
            <div className="row">
              {brideGrooms.map((brideGroom, tm) => (
                <div className="col col-lg-4 col-md-6 col-sm-12 col-12" key={tm}>
                    <div className="wpo-team-item">
                        <div className="wpo-team-img">
                            <div className="wpo-team-img-inner">
                                <Image src={brideGroom.tImg} alt="" />
                            </div>
                            <div className="shape-1"><Image src={shape1} alt=""/></div>
                            <div className="shape-2"><Image src={shape2} alt=""/></div>
                        </div>
                        <div className="wpo-team-text">
                            <h3>{brideGroom.name}</h3>
                            <span>{brideGroom.title}</span>
                        </div>
                    </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    </section>
  )
}

export default BrideGrooms;