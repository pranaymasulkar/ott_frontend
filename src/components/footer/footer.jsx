import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="mid">
      <div className="foot">
        <div className="foot-left">
          <div>
            <a href="#">About Disney + Hotstar</a>
          </div>
          <div>
            <a href="#">Terms of Use</a>
          </div>
          <div>
            <a href="#">Privacy Policy</a>
          </div>
          <div>
            <a href="#">FAQ</a>
          </div>
          <div>
            <a href="#">Feedback</a>
          </div>
          <div>
            <a href="#">Careers</a>
          </div>
        </div>
        <div className="foot-left1">
          <div>
            <a href="https://www.hotstar.com/in/about-us">
              About Disney + Hotstar
            </a>
          </div>
          <div>
            <a href="#">Terms of Use</a>
          </div>
          <div>
            <a href="#">Privacy Policy</a>
          </div>
          <br></br>
          <div>
            <a href="#">FAQ</a>
          </div>
          <div>
            <a href="#">Feedback</a>
          </div>
          <div>
            <a href="#">Careers</a>
          </div>
          {/* <br></br> */}
        </div>
        <div className="foot-mid">
          <div>Connect with us</div>
          <span>
            <a href="#">
              <img src="https://cdn-icons-png.flaticon.com/128/1384/1384021.png"></img>
            </a>
          </span>
          <span>
            <a href="#">
              <img src="https://cdn-icons-png.flaticon.com/128/1384/1384049.png"></img>
            </a>
          </span>
        </div>
        <div className="foot-right">
          <div>Disney+Hotstar App</div>
          <span>
            <a href="#">
              <img src="https://icon-library.com/images/download-on-the-app-store-icon/download-on-the-app-store-icon-5.jpg"></img>
            </a>
          </span>
          <span>
            <a href="#">
              <img src="https://icon-library.com/images/download-on-the-app-store-icon/download-on-the-app-store-icon-13.jpg"></img>
            </a>
          </span>
        </div>
        <div className="foot-mid1">
          <div>Connect with us</div>
          <span>
            <a href="#">
              <img src="https://cdn-icons-png.flaticon.com/128/1384/1384021.png"></img>
            </a>
          </span>
          <span>
            <a href="#">
              <img src="https://cdn-icons-png.flaticon.com/128/1384/1384049.png"></img>
            </a>
          </span>
        </div>
        <div className="foot-right1">
          <div>Disney+Hotstar App</div>
          <span>
            <a href="#">
              <img src="https://icon-library.com/images/download-on-the-app-store-icon/download-on-the-app-store-icon-5.jpg"></img>
            </a>
          </span>
          <span>
            <a href="#">
              <img src="https://icon-library.com/images/download-on-the-app-store-icon/download-on-the-app-store-icon-13.jpg"></img>
            </a>
          </span>
        </div>
      </div>
      <p>
        © 2022 STAR. All Rights Reserved. HBO, Home Box Office and all related
        channel and programming logos are service marks of, and all related
        programming{" "}
      </p>
      <p>
        visuals and elements are the property of, Home Box Office, Inc. All
        rights reserved.
      </p>
    </div>
  );
}

export default Footer;
