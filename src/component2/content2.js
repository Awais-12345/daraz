import React from "react";
import obj1 from "../mapping2/map3p1";
// import obj2 from '../mapping2/map3p2'
import obj2 from "../mapping2/map3p2";
const content2 = () => {
  return (
    <div>
      <div className="pad">
        <div className="content2">
          <div className="para">
            <h2>Product details of Panadol Extra / Sweet Candy 50Tb</h2>
          </div>
          {obj1.map((ele) => (
            <div className="list-container">
              <ul className="list">
                <div className="list1">
             <li>{ele.text1}</li>
          {/* <li>toothache</li>
              <li>backache</li>
              <li>migraine</li>
              <li>sore throat</li> */}
                </div>
                <div className="list1">
                  <li>{ele.text2}</li>
                  {/* <li>helps reduce temperature</li>
              <li>aches and pains of colds and flu</li>
              <li>rheumatic pain</li>
              <li>feverishness</li> */}
                </div>
              </ul>
            </div>
          ))}

          <div className="border2"></div>
          {obj2.map((ele) => (
            <p>
              {ele.para}
              {/* Panadol Tab Extra Strip provides fast and effective relief from
            pain including headache migraine toothache, muscle ache
            backache arthritis, and period pain. Each tablet contains a
            powerful combination of paracetamol and caffeine which work
            together to target pain quickly. Paracetamol is a trusted pain
            reliever that reduces fever and eases discomfort while caffeine
            helps to enhance its effectiveness. These easy-to-swallow tablets
            provide rapid relief within 15-30 minutes making them suitable for
            on-the-go use. These tablets are gentle on the stomach and suitable
            for most adults and children aged 12 years and over. Use them
            whenever pain attacks so you can get back to feeling your best. */}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default content2;
