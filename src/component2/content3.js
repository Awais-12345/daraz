import React from 'react'
import pic1 from '../mapping2/map4p1'
import pic2 from '../mapping2/map4p2'
import pic3 from '../mapping2/map4p3'
import pic4 from '../mapping2/map4p4'
import pic5 from '../mapping2/map4p5'
import pic6 from '../mapping2/map4p6'
const content3 = () => {
  return (
    <div>
        <div className="content3">
      <div className="edit2">
        <h2>Ratings & Reviews of Panadol Extra / Sweet Candy 50Tb</h2>
      </div>
      <div className="main-container">
        <div className="summary">
          <div className="score">
            <span className="kalo">0</span>
            <span className="kaliya">/5</span>
          </div>
          <div className="star-img">
            {pic1.map((ele)=>
            <img
              className="star"
              src={ele.img}
              // style="width: 33.25px; height: 33.25px"
            />
            // {/* <img
            //   className="star"
            //   src="//img.lazcdn.com/g/tps/tfs/TB18ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png"
            //   // style="width: 33.25px; height: 33.25px"
            // />
            // <img
            //   className="star"
            //   src="//img.lazcdn.com/g/tps/tfs/TB18ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png"
            //   // style="width: 33.25px; height: 33.25px"
            // />
            // <img
            //   className="star"
            //   src="//img.lazcdn.com/g/tps/tfs/TB18ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png"
            //   // style="width: 33.25px; height: 33.25px"
            // />
            // <img
            //   className="star"
            //   src="//img.lazcdn.com/g/tps/tfs/TB18ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png"
            //   // style="width: 33.25px; height: 33.25px"
            // /> */}
            )}
          </div>
          <div className="count">0 Ratings</div>
        </div>
        <div className="main-div">
          <div className="similar-portion">
            <div className="star1">
              <div>
                <div className="img-container">
                {pic2.map((ele)=>
                  <img
                    className="star"
                    src={ele.img}
                    // style="width: 15.96px; height: 15.96px"
                    data-spm-anchor-id="a2a0e.pdp_revamp.ratings_reviews.i1.15be16e5sYhn5r"
                  />
                  // {/* <img
                  //   className="star"
                  //   src="//img.lazcdn.com/g/tps/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png"
                  //   // style="width: 15.96px; height: 15.96px"
                  //   data-spm-anchor-id="a2a0e.pdp_revamp.ratings_reviews.i1.15be16e5sYhn5r"
                  // />
                  // <img
                  //   className="star"
                  //   src="//img.lazcdn.com/g/tps/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png"
                  //   // style="width: 15.96px; height: 15.96px"
                  //   data-spm-anchor-id="a2a0e.pdp_revamp.ratings_reviews.i1.15be16e5sYhn5r"
                  // />
                  // <img
                  //   className="star"
                  //   src="//img.lazcdn.com/g/tps/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png"
                  //   // style="width: 15.96px; height: 15.96px"
                  //   data-spm-anchor-id="a2a0e.pdp_revamp.ratings_reviews.i1.15be16e5sYhn5r"
                  // />
                  // <img
                  //   className="star"
                  //   src="//img.lazcdn.com/g/tps/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png"
                  //   // style="width: 15.96px; height: 15.96px"
                  //   data-spm-anchor-id="a2a0e.pdp_revamp.ratings_reviews.i1.15be16e5sYhn5r"
                  // /> */}
                )}
                </div>
              </div>
              <div className="together">
                <div className="bar1"></div>
                <span className="zero1">0</span>
              </div>
            </div>
          </div>
          <div className="similar-portion">
            <div className="star1">
              <div>
                <div className="img-container">
                  {pic3.map((ele)=>
                  <img
                    className="star"
                    src={ele.img}
                    // style="width: 15.96px; height: 15.96px"
                    data-spm-anchor-id="a2a0e.pdp_revamp.ratings_reviews.i1.15be16e5sYhn5r"
                  />
                  // {/* <img
                  //   className="star"
                  //   src="//img.lazcdn.com/g/tps/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png"
                  //   // style="width: 15.96px; height: 15.96px"
                  //   data-spm-anchor-id="a2a0e.pdp_revamp.ratings_reviews.i1.15be16e5sYhn5r"
                  // />
                  // <img
                  //   className="star"
                  //   src="//img.lazcdn.com/g/tps/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png"
                  //   // style="width: 15.96px; height: 15.96px"
                  //   data-spm-anchor-id="a2a0e.pdp_revamp.ratings_reviews.i1.15be16e5sYhn5r"
                  // />
                  // <img
                  //   className="star"
                  //   src="//img.lazcdn.com/g/tps/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png"
                  //   // style="width: 15.96px; height: 15.96px"
                  //   data-spm-anchor-id="a2a0e.pdp_revamp.ratings_reviews.i1.15be16e5sYhn5r"
                  // />
                  // <img
                  //   className="star"
                  //   src="//img.lazcdn.com/g/tps/tfs/TB18ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png"
                  //   // style="width: 15.96px; height: 15.96px"
                  // /> */}
                  )}
                </div>
              </div>
              <div className="together">
                <div className="bar2"></div>
                <span className="zero1">0</span>
              </div>
            </div>
          </div>
          <div className="similar-portion">
            <div className="star1">
              <div>
                <div className="img-container">
                  {pic4.map((ele)=>
                  <img
                    className="star"
                    src={ele.img}
                    // style="width: 15.96px; height: 15.96px"
                    data-spm-anchor-id="a2a0e.pdp_revamp.ratings_reviews.i1.15be16e5sYhn5r"
                  />
                  // {/* <img
                  //   className="star"
                  //   src="//img.lazcdn.com/g/tps/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png"
                  //   // style="width: 15.96px; height: 15.96px"
                  //   data-spm-anchor-id="a2a0e.pdp_revamp.ratings_reviews.i1.15be16e5sYhn5r"
                  // />
                  // <img
                  //   className="star"
                  //   src="//img.lazcdn.com/g/tps/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png"
                  //   // style="width: 15.96px; height: 15.96px"
                  //   data-spm-anchor-id="a2a0e.pdp_revamp.ratings_reviews.i1.15be16e5sYhn5r"
                  // />
                  // <img
                  //   className="star"
                  //   src="//img.lazcdn.com/g/tps/tfs/TB18ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png"
                  //   // style="width: 15.96px; height: 15.96px"
                  // />
                  // <img
                  //   className="star"
                  //   src="//img.lazcdn.com/g/tps/tfs/TB18ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png"
                  //   // style="width: 15.96px; height: 15.96px"
                  // /> */}
                  )}
                </div>
              </div>
              <div className="together">
                <div className="bar3"></div>
                <span className="zero1">0</span>
              </div>
            </div>
          </div>
          <div className="similar-portion">
            <div className="star1">
              <div>
                <div className="img-container">
                  {pic5.map((ele)=>
                  <img
                    className="star"
                    src={ele.img}
                    // style="width: 15.96px; height: 15.96px"
                    data-spm-anchor-id="a2a0e.pdp_revamp.ratings_reviews.i1.15be16e5sYhn5r"
                   />
                  // <img
                  //   className="star"
                  //   src="//img.lazcdn.com/g/tps/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png"
                  //   // style="width: 15.96px; height: 15.96px"
                  //   data-spm-anchor-id="a2a0e.pdp_revamp.ratings_reviews.i1.15be16e5sYhn5r"
                  // />
                  // <img
                  //   className="star"
                  //   src="//img.lazcdn.com/g/tps/tfs/TB18ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png"
                  //   // style="width: 15.96px; height: 15.96px"
                  // />
                  // <img
                  //   className="star"
                  //   src="//img.lazcdn.com/g/tps/tfs/TB18ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png"
                  //   // style="width: 15.96px; height: 15.96px"
                  // />
                  // <img
                  //   className="star"
                  //   src="//img.lazcdn.com/g/tps/tfs/TB18ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png"
                  //   // style="width: 15.96px; height: 15.96px"
                  // />
                  )}
                </div>
              </div>
              <div className="together">
                <div className="bar4"></div>
                <span className="zero1">0</span>
              </div>
            </div>
          </div>
          <div className="similar-portion">
            <div className="star1">
              <div>
                <div className="img-container">
                  {pic6.map((ele)=>
                  <img
                    className="star"
                    src={ele.img}
                  />
                  // {/* <img
                  //   className="star"
                  //   src="//img.lazcdn.com/g/tps/tfs/TB18ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png"

                  // />
                  // <img
                  //   className="star"
                  //   src="//img.lazcdn.com/g/tps/tfs/TB18ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png"
    
                  // />
                  // <img
                  //   className="star"
                  //   src="//img.lazcdn.com/g/tps/tfs/TB18ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png"
                  // />
                  // <img
                  //   className="star"
                  //   src="//img.lazcdn.com/g/tps/tfs/TB18ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png"

                  // /> */}
                  )}
                </div>
              </div>
              <div className="together">
                <div className="bar5"></div>
                <span className="zero1">0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border3"></div>
      <div className="main-div2">
        <div className="imgedit">
          <img
            src="//img.lazcdn.com/g/tps/tfs/TB1cXF1llTH8KJjy0FiXXcRsXXa-112-98.png"
            width="64"
          />
        </div>
        <div className="twopara">
          <p>This product has no reviews.</p>
          <p>
            Let others know what do you think and be the first to write a
            review.
          </p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default content3
