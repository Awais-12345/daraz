import React from 'react'
import content from '../mapping2/map2'
const content1 = () => {
  return (
    <div>
        <div className="content1">
      <div className="container-all">
        <div className="pk">
          <img
            src="https://img.drz.lazcdn.com/static/pk/p/cd0825861651a3fb6d9823615aa66724.jpg_720x720q80.jpg_.webp"
          />
        </div>
        <div className="first">
          <h1>Panadol Extra / Sweet Candy 50Tb</h1>
          <div className="star-link">
            <div className="star">
            {content.map((ele)=>
              <img src={ele.img} />
              // {/* <img
              //   src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA/UExURf/XAPakAPalAPenAPakAPalAPenAEdwTP+vAP69APalAPivAPemAPmrAP+1APelAPakAPalAPmvAPioAPajAHElIkoAAAAUdFJOUxr0zm3rwngADSm3TZRFBqfggTda/y+eEwAAAPRJREFUKM+N09mShCAMBdCwNjuC9/+/dQDLaaCnrcmDVeSQCIL0egxah0Y8smbmgY1EeWANLs1XNlJF6K8s4Mkt5TMnqYjWctqKaS2f2BytmMjP5Z2TjSK4A6OYSIHxXM5qBpeWR88EMZSqDmrkJLf0MgrOW9qjCoazN28uPpQsbzre/Zdfeq08OehdmX9vbPdb732nPHvTuH6WxPLEv8d6s0GZmsuwccU5sVIbC9Sr73hmtnFgPX1yFvoEDVpZ8XZWCkdGn+CxrVzm6CBFetkMWex9qHcTHJD6ugfVtUFeOIKV9yWJCnxhEdYb7VdO//vH9vgB7woXsbjqY50AAAAASUVORK5CYII="
              // />
              // <img
              //   src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA/UExURf/XAPakAPalAPenAPakAPalAPenAEdwTP+vAP69APalAPivAPemAPmrAP+1APelAPakAPalAPmvAPioAPajAHElIkoAAAAUdFJOUxr0zm3rwngADSm3TZRFBqfggTda/y+eEwAAAPRJREFUKM+N09mShCAMBdCwNjuC9/+/dQDLaaCnrcmDVeSQCIL0egxah0Y8smbmgY1EeWANLs1XNlJF6K8s4Mkt5TMnqYjWctqKaS2f2BytmMjP5Z2TjSK4A6OYSIHxXM5qBpeWR88EMZSqDmrkJLf0MgrOW9qjCoazN28uPpQsbzre/Zdfeq08OehdmX9vbPdb732nPHvTuH6WxPLEv8d6s0GZmsuwccU5sVIbC9Sr73hmtnFgPX1yFvoEDVpZ8XZWCkdGn+CxrVzm6CBFetkMWex9qHcTHJD6ugfVtUFeOIKV9yWJCnxhEdYb7VdO//vH9vgB7woXsbjqY50AAAAASUVORK5CYII="
              // />
              // <img
              //   src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA/UExURf/XAPakAPalAPenAPakAPalAPenAEdwTP+vAP69APalAPivAPemAPmrAP+1APelAPakAPalAPmvAPioAPajAHElIkoAAAAUdFJOUxr0zm3rwngADSm3TZRFBqfggTda/y+eEwAAAPRJREFUKM+N09mShCAMBdCwNjuC9/+/dQDLaaCnrcmDVeSQCIL0egxah0Y8smbmgY1EeWANLs1XNlJF6K8s4Mkt5TMnqYjWctqKaS2f2BytmMjP5Z2TjSK4A6OYSIHxXM5qBpeWR88EMZSqDmrkJLf0MgrOW9qjCoazN28uPpQsbzre/Zdfeq08OehdmX9vbPdb732nPHvTuH6WxPLEv8d6s0GZmsuwccU5sVIbC9Sr73hmtnFgPX1yFvoEDVpZ8XZWCkdGn+CxrVzm6CBFetkMWex9qHcTHJD6ugfVtUFeOIKV9yWJCnxhEdYb7VdO//vH9vgB7woXsbjqY50AAAAASUVORK5CYII="
              // />
              // <img
              //   src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA/UExURf/XAPakAPalAPenAPakAPalAPenAEdwTP+vAP69APalAPivAPemAPmrAP+1APelAPakAPalAPmvAPioAPajAHElIkoAAAAUdFJOUxr0zm3rwngADSm3TZRFBqfggTda/y+eEwAAAPRJREFUKM+N09mShCAMBdCwNjuC9/+/dQDLaaCnrcmDVeSQCIL0egxah0Y8smbmgY1EeWANLs1XNlJF6K8s4Mkt5TMnqYjWctqKaS2f2BytmMjP5Z2TjSK4A6OYSIHxXM5qBpeWR88EMZSqDmrkJLf0MgrOW9qjCoazN28uPpQsbzre/Zdfeq08OehdmX9vbPdb732nPHvTuH6WxPLEv8d6s0GZmsuwccU5sVIbC9Sr73hmtnFgPX1yFvoEDVpZ8XZWCkdGn+CxrVzm6CBFetkMWex9qHcTHJD6ugfVtUFeOIKV9yWJCnxhEdYb7VdO//vH9vgB7woXsbjqY50AAAAASUVORK5CYII="
              // /> */}
            )}
            </div>
            <a href="#">No Ratings</a>
          </div>
          <div className="spag">
            <span>Brand</span>
            <a href="#" className="border">No Brand</a>
            <a href="#">More Candy & Chocolate from No Brand</a>
          </div>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="Quantity">
            <h6>Quantity</h6>
            <div className="flex">
              <div className="bg">
                <a className="minus">-</a>
                <span className="zero">0</span>
                <a className="plus">+</a>
              </div>
              <span className="text">Out of stock</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default content1
 