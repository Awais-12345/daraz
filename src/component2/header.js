import React from 'react'
import header1 from '../mapping2/map1p1'
import header2 from '../mapping2/map1p2'
import header3 from '../mapping2/map1p3'
const header = () => {
  return (
    <div>
          <div className="container">
      <header>
        <nav className="navigation1">
          <ul>
          {header1.map((ele)=>
            <li><a href="">{ele.text1}</a></li>
            // {/* <li><a href="">Sell On Daraz</a></li>
            // <li><a href="">Help & Support</a></li>
            // <li><a href="">Login</a></li>
            // <li><a href="">Sign Up</a></li>
            // <li><a href="">زبان تبدیل کریں</a></li> */}
          )}
          </ul>
         
        </nav>
        <div className="main">
          <div className="logo">
            <a href="https://www.daraz.pk/"
              ><img
                src="https://lzd-img-global.slatic.net/us/domino/3b870cb043c7f8a9741cbf66329e294e.png"
                alt="Online Shopping Daraz.PK Logo"
            /></a>
          </div>
          <div className="search">
            <div className="direction">
              <form action="">
                <input type="text" placeholder="Search in Daraz" />
              </form>
              <nav className="navigation2">
                {header2.map((ele)=>
                <a href="">{ele.text2}</a>
                // {/* <a href="">water bottle</a>
                // <a href="">smart watch</a>
                // <a href="">makeup</a>
                // <a href="">laptop</a> */}
                )}
              </nav>
            </div>
            <svg
              width="30"
              height="30"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              data-spm-anchor-id="a2a0e.pdp_revamp.dcart.i0.15be16e5oSDMKp"
            >
              {/* <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.51345 5H1.33325V3H6.15306L7.21972 8.33333H30.5315L27.5012 25H8.51345L4.51345 5ZM7.61972 10.3333L10.1531 23H25.832L28.135 10.3333H7.61972Z"
                fill="white"
              ></path>
              <path
                d="M11.9999 28C11.9999 28.7364 11.403 29.3333 10.6666 29.3333C9.93021 29.3333 9.33325 28.7364 9.33325 28C9.33325 27.2636 9.93021 26.6667 10.6666 26.6667C11.403 26.6667 11.9999 27.2636 11.9999 28Z"
                fill="white"
              ></path>
              <path
                d="M25.3333 29.3333C26.0696 29.3333 26.6666 28.7364 26.6666 28C26.6666 27.2636 26.0696 26.6667 25.3333 26.6667C24.5969 26.6667 23.9999 27.2636 23.9999 28C23.9999 28.7364 24.5969 29.3333 25.3333 29.3333Z"
                fill="white"
              ></path> */}
            </svg>
          </div>
        </div>
      </header>
      <div className="dropdown-container">
        <div className="dropdown">
          <label className="heading">Categories îœ¶</label>
          <div className="dropdown-content">
            {header3.map((ele)=>
            <a href="#">{ele.text3}</a>
            // {/* <a href="#">TV & Home Application</a>
            // <a href="#">Healthy & Beauty</a>
            // <a href="#">Mother & Baby</a>
            // <a href="#">Electronic Devices</a>
            // <a href="#">Groceries & Pets</a>
            // <a href="#">Women & fashion</a>
            // <a href="#">Men's & fashion</a>
            // <a href="#">Bags & jewellery</a>
            // <a href="#">Sports & Outdoors</a>
            // <a href="#">Women & fashion</a> */}
            )}
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default header
