import React from 'react';
import '../StyleSheet/Footer.css'

function Footer(){
    return(
        <div>
            <div className="footercontent">
          <img src="https://statics.olx.com.pk/external/base/img/phone-app.webp" alt="" style={{marginLeft: '70px', height: '150px'}} />
          <div className="footercontent2">
            <h2>TRY THE OLX APP</h2>
            <span>Buy, sell and find just about anything using the app on your mobile.</span>
          </div>
          <div className="footercontent1">
            <span style={{fontSize: '10px', paddingLeft: '20px'}}>GET YOUR APP TODAY</span><br />
            <div id={2908}>
              <img src="https://statics.olx.com.pk/external/base/img/appstore_2x.webp" alt="" width="100px" style={{marginLeft: '20px', marginTop: '20px'}} />
              <img src="https://statics.olx.com.pk/external/base/img/playstore_2x.webp" alt="" width="100px" style={{marginLeft: '20px', marginTop: '20px'}} />
            </div>
          </div>
        </div>
        <div className="footerend">
          <div>
            <span>POPULAR CATEGORIES</span>
            <li>Cars</li>
            <li>Flats for rent</li>
            <li>Jobs</li>
            <li>Mobile Phones</li>
          </div>
          <div>
            <span>TRENDING SEARCHES</span><br />
            <li>Bikes</li>
            <li>Watches</li>
            <li>Books</li>
            <li>Dogs</li>
          </div>
          <div>
            <span>ABOUT Us</span><br />
            <li>About OLX Group</li>
            <li>OLX Blog</li>
            <li>Contact Us</li>
            <li>OLX for Businesses</li>
          </div>
          <div>
            <span>OLX</span><br />
            <li>Help</li>
            <li>Sitemap</li>
            <li>Legal &amp; Privacy information</li>
          </div>
          <div>
            <span>FOLLOW US</span><br />
            <div className="fontAwsomeIcons">
            <i className="fab fa-facebook-f" id="facebook" />
            <i className="fab fa-twitter" id="twitter" />
            <i className="fas fa-play" id="play" />
            <i className="fab fa-instagram" id="instagram" />
            </div>
            <div className="div2903">
              <img src="https://statics.olx.com.pk/external/base/img/appstore_2x.webp" alt="" width="60px" style={{marginLeft: '2px', marginTop: '20px'}} />
              <img src="https://statics.olx.com.pk/external/base/img/playstore_2x.webp" alt="" width="60px" height="20px" style={{marginLeft: '10px',marginTop: '20px'}} /></div>:
          </div>
        </div>
        <div className="footerend2">
          <div>
            <span id>Other Countries </span><span>India-South Africa-Indonesia</span>
            <span id="spanend">Free Classifieds in Pakistan. © 2006-2020 OLX</span>
          </div>
        </div>
        </div>
    )
}

export default Footer;