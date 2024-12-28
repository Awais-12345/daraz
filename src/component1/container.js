import React from "react";
import ContentHeader from "../map4";
const Container = () => {
  return (
    <div>
      <div className="container">
        <header>
          <nav className="navigation1">
            <ul>
              {ContentHeader?.map(
                (All) => (
                  <li>
                    <a href=""> {All.linkingtext} </a>
                  </li>
                )
                //   {/* <li>
                //   <a href="">Sell On Daraz</a>
                // </li>
                // <li>
                //   <a href="">Help & Support</a>
                // </li>
                // <li>
                //   <a href="">Login</a>
                // </li>
                // <li>
                //   <a href="">Sign Up</a>
                // </li>
                // <li>
                //   <a href="">زبان تبدیل کریں</a>
                // </li> */}
              )}
            </ul>
          </nav>
          <div className="main">
            <div className="logo">
              
                <a href="https://www.daraz.pk/">
                  <img src="https://lzd-img-global.slatic.net/us/domino/3b870cb043c7f8a9741cbf66329e294e.png"/>
                </a>
              
            </div>
            <div className="search">
              <div className="direction">
                <form action="">
                  <input type="text" placeholder="Search in Daraz" />
                </form>
                <nav className="navigation2">
                  {ContentHeader?.map(
                    (All) => (
                      <a href="">{All.linking2text}</a>
                    )
                    //   {/* <a href="">water bottle</a>
                    // <a href="">smart watch</a>
                    // <a href="">makeup</a>
                    // <a href="">laptop</a> */}
                  )}
                </nav>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};
export default Container;
