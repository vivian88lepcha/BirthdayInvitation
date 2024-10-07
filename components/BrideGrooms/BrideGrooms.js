import Image from "next/image";
import React from "react";
import SectionTitle from "../SectionTitle";
import timg1 from "/public/images/team/1month.jpeg";
import timg3 from "/public/images/team/2nd.jpg";
import timg4 from "/public/images/team/3rd.jpg";
import timg7 from "/public/images/team/6th.jpg";
import timg9 from "/public/images/team/8th.jpg";
import timg11 from "/public/images/team/10th.jpg";
import timg12 from "/public/images/team/11th.jpg";
import timg13 from "/public/images/team/13th.JPG";
import timg14 from "/public/images/team/14th.JPG";
import timg15 from "/public/images/team/15th.JPG";
import timg16 from "/public/images/team/16th.jpg";
import timg17 from "/public/images/team/17th.jpg";

import shape1 from "/public/images/team/shape1.jpg";
import shape2 from "/public/images/team/shape2.jpg";

const brideGrooms = [
  {
    id: "1",
    tImg: timg1,
    name: "Born Day",
    title: "October,2022",
  },
  {
    id: "2",
    tImg: timg3,
    name: "2nd Month",
    title: "December, 2022",
  },
  {
    id: "3",
    tImg: timg4,
    name: "4th Month",
    title: "February, 2023",
  },
  {
    id: "4",
    tImg: timg7,
    name: "6th Month",
    title: "April, 2023",
  },
  {
    id: "5",
    tImg: timg9,
    name: "8th Month",
    title: "June, 2023",
  },
  {
    id: "6",
    tImg: timg11,
    name: "10th Month",
    title: "August, 2023",
  },
  {
    id: "7",
    tImg: timg12,
    name: "12th Month",
    title: "October, 2023",
  },
  {
    id: "8",
    tImg: timg13,
    name: "14th Month",
    title: "December, 2023",
  },
  {
    id: "9",
    tImg: timg14,
    name: "16th Month",
    title: "February, 2024",
  },
  {
    id: "10",
    tImg: timg15,
    name: "18th Month",
    title: "April, 2024",
  },
  {
    id: "11",
    tImg: timg16,
    name: "20th Month",
    title: "June, 2024",
  },
  {
    id: "12",
    tImg: timg17,
    name: "22th Month",
    title: "August, 2024",
  },
];

const BrideGrooms = (props) => {
  return (
    <section className={`wpo-team-section ${props.tClass}`}>
      <div className="container">
        <SectionTitle MainTitle={"Journey to Two"} />
        <div className="wpo-team-wrap">
          <div className="row">
            {brideGrooms.map((brideGroom, tm) => (
              <div className="col col-lg-4 col-md-6 col-sm-12 col-12" key={tm}>
                <div className="wpo-team-item">
                  <div className="wpo-team-img">
                    <div className="wpo-team-img-inner">
                      <Image src={brideGroom.tImg} alt="" />
                    </div>
                    <div className="shape-1">
                      <Image src={shape1} alt="" />
                    </div>
                    <div className="shape-2">
                      <Image src={shape2} alt="" />
                    </div>
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
  );
};

export default BrideGrooms;
