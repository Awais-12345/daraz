import React from 'react'
import flexibel from '../mapping2/map5'
const content4 = () => {
  return (
    <div>
       <div className="content4">
      <div className="hello">
        <div className="gap1">
          <div>
            <h3>Customer Care</h3>
          </div>
          <ul className="part0">
            {flexibel.map((ele)=>
            <li>
              <a href="//buyer-helpcenter.daraz.pk/s/page">{ele.list1}</a>
            </li>
            //  <li>
            //   <a
            //     href="//helpcenter.daraz.pk/page/knowledge?language=en&pageId=12&category=1000001086&scm=1003.4.icms-zebra-5029545-6851844.OTHER_6502335285_7708089&knowledge=1000006565"
            //     >How to Buy</a
            //   >
            // </li>
            // <li>
            //   <a
            //     href="//www.daraz.pk/daraz-corporate/?scm=1003.4.icms-zebra-5029545-6851844.OTHER_6502335286_7708089"
            //     >Corporate & Bulk Purchasing</a
            //   >
            // </li>
            // <li>
            //   <a
            //     href="//www.daraz.pk/how-to-return/?scm=1003.4.icms-zebra-5029545-6851844.OTHER_6502335287_7708089"
            //     >Returns & Refunds</a
            //   >
            // </li>
            // <li>
            //   <a
            //     href="//www.daraz.pk/contact-us/?spm=a2a0e.helpcenter.more-options.1.4a5f3722ZJL6PD&hybrid=1&scm=1003.4.icms-zebra-5029545-6851844.OTHER_6502335289_7708089"
            //     >Daraz Shop</a
            //   >
            // </li>
            // <li>
            //   <a
            //     href="//www.daraz.pk/purchase-protection/?scm=1003.4.icms-zebra-5029545-6851844.OTHER_6502335290_7708089"
            //     >Contact Us</a
            //   >
            // </li>
            // <li>
            //   <a
            //     href="//www.daraz.pk/wow/i/pk/localisation/pick-up-points?hybrid=1&scm=1003.4.icms-zebra-5029545-6851844.OTHER_6502335291_7708089"
            //     >Purchase Protection</a
            //   >
            // </li>
            // <li>
            //   <a
            //     href="//www.daraz.pk/wow/i/pk/localisation/pick-up-points?hybrid=1&scm=1003.4.icms-zebra-5029545-6851844.OTHER_6502335291_7708089"
            //     >Daraz Pick up Points</a
            //   >
            // </li>
            )}
          </ul>
        </div>
        <div className="part2">
          <div className="gap2">
            <h3>Daraz</h3>
            <ul className="part1">
              {flexibel.map((ele)=> 
              <li>
                <a
                  href="//www.daraz.pk/about-us/?scm=1003.4.icms-zebra-5029545-6852930.OTHER_6502476577_7722624"
                  >{ele.list2}</a
                >
               </li>
            )} 
            </ul>
          </div>
        </div>
        <div className="pk5">
          <div className="pk3">
            <div className="dicto">
              <img
                loading="lazy"
                src="https://img.lazcdn.com/us/domino/e07f9602-da7e-4d31-9c4f-df69a2e95325_PK-60-60.png"
                alt="Download App"
              />
            </div>
            <div className="pk4">
              <div className="color1">Happy Shopping</div>
              <div className="color2">Download App</div>
            </div>
          </div>

          <div className="img-container">
            <div className="two-img">
              <img
                loading="lazy"
                src="https://img.lazcdn.com/us/domino/2db6633b-c83c-48b7-9f7d-1262ee87cc80_PK-126-42.png"
                alt="Apple App Download"
              />
              <img
                loading="lazy"
                src="https://img.lazcdn.com/us/domino/7d216fe8-1bac-4ac9-81d3-072a9fbf32fc_PK-126-42.png"
                alt="Huawei App Download"
              />
            </div>
            <div className="img-align">
              <img
                loading="lazy"
                src="https://img.lazcdn.com/us/domino/4812f06f-072d-45be-a930-640edf4caeee_PK-126-42.png"
                alt="Android App Download"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default content4
