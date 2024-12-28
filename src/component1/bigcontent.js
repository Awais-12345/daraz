import React  from 'react'
import ContentData from '../map1'

const Bigcontent = () => {
 
  return (
    <div>
       <div className="heading3">
          <span>Just For You</span>
      
        </div>
        <div className="allbigcontent7">
          {ContentData?.map((el)=>
        
        <div className="background" key={el.id}>
          <div className="allimg">
            <img src={el.image} />
          </div>
          <div className="dist">
          <div className="allpara">
          {el.heading}
          </div>
          <div className="allspan">
          <span className="c1">Rs.</span>
          <span className="c1">
          {el.rupes}

          </span>
          <span>{el.perPrice
            }</span>
          </div>
        
        </div>
        </div>
          )}
        </div>
    </div>
  )
}

export default Bigcontent
