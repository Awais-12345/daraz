import React from 'react'
import Decrease from '../map3'

const Allcards1 = () => {
  return (
    <div>
        <div className="text4">
         <p>Categories</p>
        </div>
        <div className="allcard2">
          {Decrease?.map((All) => 

          

          
        <div className="bgcolor" key={All.id}>
         <div className="cimg1">
          <img src={All.image} />
         </div>
         <div className="para2">
          <p> {All.paragraph} </p>
         </div>
        </div>
        // <div className="bgcolor">
        //     <div className="cimg1">
        //       <img src="https://img.drz.lazcdn.com/static/pk/p/99afd1fd32c82e5ffc7af8d12344a121.jpg_170x170q80.jpg"/>
        //     </div>
        //     <div className="para2">
        //        <p>Mobiles</p>
        //     </div>
        //    </div>
        //    <div className="bgcolor">
        //     <div className="cimg1">
        //       <img src="https://img.drz.lazcdn.com/static/pk/p/f5bcb88f65131a01351aeffe7a640ce8.jpg_170x170q80.jpg"/>
        //     </div>
        //     <div className="para2">
        //        <p>Trash Bags & Liners</p>
        //     </div>
        //    </div>
        //    <div className="bgcolor">
        //     <div className="cimg1">
        //       <img src="https://img.drz.lazcdn.com/static/pk/p/05c4b05f157dc1f2355f635eb1f64149.jpg_170x170q80.jpg"/>
        //     </div>
        //     <div className="para2">
        //        <p>Dog & Cat Beds</p>
        //     </div>
        //    </div>
        //    <div className="bgcolor">
        //     <div className="cimg1">
        //       <img src="https://img.drz.lazcdn.com/g/kf/Sb23e6bf9a2924eb58dc56e7290ca3032b.jpg_170x170q80.jpg"/>
        //     </div>
        //     <div className="para2">
        //        <p>Tablets</p>
        //     </div>
        //    </div>
        //    <div className="bgcolor">
        //     <div className="cimg1">
        //       <img src="https://img.drz.lazcdn.com/static/pk/p/9ba861796a1076378aeed1284d17f3f0.jpg_170x170q80.jpg"/>
        //     </div>
        //     <div className="para2">
        //        <p>Ventilation Parts & Accessories</p>
        //     </div>
        //    </div>
        //    <div className="bgcolor">
        //     <div className="cimg1">
        //       <img src="https://img.drz.lazcdn.com/static/pk/p/8eb816bc07390284aae9bee84e923975.jpg_170x170q80.jpg"/>
        //     </div>
        //     <div className="para2">
        //        <p> Kits</p>
        //     </div>
        //    </div>
        //    <div className="bgcolor">
        //     <div className="cimg2">
        //       <img src="https://img.drz.lazcdn.com/static/pk/p/257f0258db12d83bbcad9d26c2c0e693.jpg_170x170q80.jpg"/>
        //     </div>
        //     <div className="para1">
        //        <p>Blocks & Building Toys</p>
        //     </div>
        //    </div>
        //    <div className="bgcolor">
        //     <div className="cimg2">
        //       <img src="https://img.drz.lazcdn.com/static/pk/p/5a63b14068f27b07ebdb17c4460bfe79.jpg_170x170q80.jpg"/>
        //     </div>
        //     <div className="para2">
        //        <p>Knife Sharpeners & Blocks</p>
        //     </div>
        //    </div>
        //    <div className="bgcolor">
        //     <div className="cimg1">
        //       <img src="https://img.drz.lazcdn.com/static/pk/p/f6ff5c40b4b80b16b4d5d41faac047f6.jpg_170x170q80.jpg"/>
        //     </div>
        //     <div className="para2">
        //        <p>Comforters, Quilts & Duvets</p>
        //     </div>
        //    </div>
        //    <div className="bgcolor">
        //     <div className="cimg1">
        //       <img src="https://img.drz.lazcdn.com/static/pk/p/fec60dffea0ce6d3ff4a70aa8cb80572.jpg_170x170q80.jpg"/>
        //     </div>Starter
        //     <div className="para2">
        //        <p>Microphones</p>
        //     </div>
        //    </div>
        //    <div className="bgcolor">
        //     <div className="cimg1">
        //       <img src="https://img.drz.lazcdn.com/static/pk/p/16220325d9ecf84340b5976dbded3951.jpg_170x170q80.jpg"/>
        //     </div>
        //     <div className="para2">
        //        <p>Zakat</p>
        //     </div>
        //    </div>
        //    <div className="bgcolor">
        //     <div className="cimg1">
        //       <img src="https://img.drz.lazcdn.com/static/pk/p/5612215d78ac2c705bba103dcbab50f9.jpg_170x170q80.jpg"/>
        //     </div>
        //     <div className="para2">
        //        <p>Stud earrings</p>
        //     </div>
        //    </div>
        //    <div className="bgcolor">
        //     <div className="cimg1">
        //       <img src="https://img.drz.lazcdn.com/static/pk/p/8433a31eeebdd8ee528645b819eaa8b7.jpg_170x170q80.jpg"/>
        //     </div>
        //     <div className="para2">
        //        <p>Shower Caddies & Hangers</p>
        //     </div>
        //    </div>
        //    <div className="bgcolor">
        //     <div className="cimg1">
        //       <img src="https://img.drz.lazcdn.com/static/pk/p/f2ed7c0da43357309bbe1319baa87a5a.jpg_170x170q80.jpg"/>
        //     </div>
        //     <div className="para2">
        //        <p>Stickers & Labels</p>
        //     </div>
        //    </div>
        //    <div className="bgcolor">
        //     <div className="cimg1">
        //       <img src="https://img.drz.lazcdn.com/collect/sg/p/880c0a69bfeddaf35eb95380b8dcbffa.jpg_170x170q80.jpg"/>
        //     </div>
        //     <div className="para2">
        //       <p>Messenger Blogs</p>
        //    </div>
        //   </div>
      
          )}
      </div>
    </div>
  )
}

export default Allcards1
