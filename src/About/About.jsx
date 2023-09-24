
import img from '../images/foot.svg'
import img1 from '../images/foot2.svg'
import img2 from '../images/foot3.svg'
import icon from '../images/icon.svg'
import icon2 from '../images/icon2.svg'
import icon3 from '../images/icon3.svg'
import icon4 from '../images/icon4.svg'
const About = () => {
    return (
      <>
         {/* <Navbar />  */}
        <h1>About Page</h1>

        <div className="BACK">
            <div className="back">
                <h6>POPULAR CATEGORIES</h6>
                <li>Cars</li>
                <li>Flats for rent</li>
                <li>Mobile Phones</li>
                <li>Jobs</li>
            </div>
            <div className="back">
                <h6>TRENDING SEARCHES</h6>
                <li>Bikes</li>
                <li>Watches</li>
                <li>Books</li>
                <li>Dogs</li>
            </div>
            <div className="back">
                <h6>ABOUT US</h6>
                <li>About EMPG</li>
                <li>OLX Blog</li>
                <li>Contact Us</li>
                <li>OLX for Businesses</li>
            </div>
            <div className="back">
                <h6>OLX</h6>
                <li>Help</li>
                <li>Sitemap</li>
                <li>Terms of use</li>
                <li>Privacy Policy</li>
            </div>
            <div className="back">
                <h5>FOLLOW US</h5>
                <li> <img src={icon}  width="25px"  className="icon" ></img>
                <img src={icon2}  width="25px"className="icon" ></img>
                <img src={icon3}  width="25px"className="icon" ></img>
                <img src={icon4}  width="25px"className="icon"  ></img></li> 
                <img src={img}  width="50px" ></img>

                <img src={img1}  width="50px" ></img>
                <img src={img2}  width="50px" ></img>
            </div>

        </div>
      </>
    );
  };
  
  export default About;