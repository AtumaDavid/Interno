import React from "react";
import "./Home.scss";
//images
import picOne from "../../assets/images/homepage/Photo1.svg";
import picTwo from "../../assets/images/homepage/Photo2.svg";
import picThree from "../../assets/images/homepage/AbtPhoto3.svg";
import picFour from "../../assets/images/homepage/photo4.svg";
import picFive from "../../assets/images/homepage/Photo5.svg";
import picSix from "../../assets/images/homepage/photo6.svg";
import picSeven from "../../assets/images/homepage/photo7.svg";

//icons
import call from "../../assets/icons/Call.svg";
import Arrow from "../../assets/icons/Vector.svg";
import Arrow2 from "../../assets/icons/Arrow2.svg";

//logos
import logo1 from "../../assets/icons/01.svg";
import logo2 from "../../assets/icons/02.svg";
import logo3 from "../../assets/icons/03.svg";
import logo4 from "../../assets/icons/04.svg";
import logo5 from "../../assets/icons/05.svg";

export default function Home() {
  return (
    <div className="home mt-4">
      <section className="home-1">
        <div className="container">
          <img src={picOne} alt="" className="img-one" />
          <div className="home-1-h1">
            <h1 className="text-primary-two">Let Your Home Be Unique</h1>
          </div>
          <div className="home-1-p">
            <p className="text-secondary">
              There are many variations of the passages of lorem Ipsum
              fromavailable, majority.
            </p>
          </div>

          <button className="btn-primary-two">
            <span>Get Started</span>
            <img src={Arrow} alt="" />
          </button>
        </div>
      </section>

      <section className="home-2 ">
        <div className="row container display-f text-align-center ">
          {/* grid system 1*/}
          <div className="col-4-lg col-12-xs">
            <div className="grid">
              <h3 className="text-primary-two">Project Plan</h3>
              <p className="text-secondary">
                There are many variations of the passages of lorem Ipsum from
                available, majority.
              </p>
            </div>

            <div className="read-more">
              <span>Read More</span>
              <img src={Arrow} alt="" />
            </div>
          </div>
          {/* 2 */}
          <div className="col-4-lg col-12-xs">
            <div className="grid">
              <h3 className="text-primary-two">Interior Work</h3>
              <p className="text-secondary">
                There are many variations of the passages of lorem Ipsum from
                available, majority.
              </p>
            </div>

            <div className="read-more">
              <span>Read More</span>
              <img src={Arrow} alt="" />
            </div>
          </div>
          {/* 3 */}
          <div className="col-4-lg col-12-xs">
            <div className="grid">
              <h3 className="text-primary-two">Realization</h3>
              <p className="text-secondary">
                There are many variations of the passages of lorem Ipsum from
                available, majority.
              </p>
            </div>

            <div className="read-more">
              <span>Read More</span>
              <img src={Arrow} alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* section three */}
      <section className="home-3">
        <div className="row container">
          <div className="col-6-lg col-12-xs">
            <div className="home-3-1">
              <h1 className="text-primary-two">
                We Created The Art Of Stylish Living Stylishly
              </h1>
              <p className="mt-3 text-secondary">
                It is a long established fact that a reader will be distracted
                by the of readable content of a page when lookings at its
                layouts the points of using that it has a more-or-less normal.
              </p>
            </div>

            <div className="mt-3 call-icon">
              <div>
                <img src={call} alt="" />
              </div>

              <div className="text-secondary">
                <span className="number">012345678 </span>
                <br />
                <span className="call-us">Call Us Anytime</span>
              </div>
            </div>
            <button className="btn-primary-two mt-3">
              <span>Get Free Estimate</span>
              <img src={Arrow} alt="" />
            </button>
          </div>

          <div className="col-6-lg col-12-xs">
            <img src={picTwo} alt="" />
          </div>
        </div>
      </section>

      {/* section four */}
      {/* about Us */}
      <section className="home-4 ">
        <div className="container bg-primary-three">
          <div className="text-align-center text-primary-two">
            <h1>What The People Thinks About Us</h1>
          </div>

          <div className="row about-us justify-center">
            {/* 1 */}
            <div className="col-4-lg col-12-xs">
              <div className="cards">
                <div className="cards-1">
                  <div className="info">
                    <div>
                      <img src={picThree} alt="" />
                    </div>
                    <div>
                      <h3 className="name">Nattasha Mith</h3>
                      <br />
                      <div className="location">Sydney, USA</div>
                    </div>
                  </div>
                  <p className="text-secondary">
                    Lorem Ipsum is simply dummy text of the typesetting
                    industry. Ipsum has been scrambled it to make a type book.
                  </p>
                </div>
              </div>
            </div>
            {/* 2 */}
            <div className="col-4-lg col-12-xs">
              <div className="cards">
                <div className="cards-1">
                  <div className="info">
                    <div>
                      <img src={picThree} alt="" />
                    </div>
                    <div>
                      <h3 className="name">Nattasha Mith</h3>
                      <br />
                      <div className="location">Sydney, USA</div>
                    </div>
                  </div>
                  <p className="text-secondary">
                    Lorem Ipsum is simply dummy text of the typesetting
                    industry. Ipsum has been scrambled it to make a type book.
                  </p>
                </div>
              </div>
            </div>
            {/* 3 */}
            <div className="col-4-lg col-12-xs">
              <div className="cards">
                <div className="cards-1">
                  <div className="info">
                    <div>
                      <img src={picThree} alt="" />
                    </div>
                    <div>
                      <h3 className="name">Nattasha Mith</h3>
                      <br />
                      <div className="location">Sydney, USA</div>
                    </div>
                  </div>

                  <p className="text-secondary">
                    Lorem Ipsum is simply dummy text of the typesetting
                    industry. Ipsum has been scrambled it to make a type book.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* logo */}
      <section className="mt-5 ">
        <div className="container ">
          <div className="gap-5 logos">
            <img src={logo1} alt="" />
            <img src={logo2} alt="" />
            <img src={logo3} alt="" />
            <img src={logo4} alt="" />
            <img src={logo5} alt="" />
          </div>
        </div>
      </section>

      {/* follow our projects */}
      <section className="mt-5 home-5">
        <div className="container">
          <div>
            <h1 className="text-primary-two">Follow Our Projects</h1>
            <p className="text-secondary text-align-center">
              It is a long established fact that a reader will be distracted by
              the of readable content of page lookings at its layouts points.
            </p>
          </div>

          <div className="row">
            <div className="col-12-lg col-12-xs home-5-1">
              <div className="display-f mt-5 gap-4">
                {/* 1 */}
                <div>
                  <img src={picFour} alt="" className="img" />
                  <div className="display-f">
                    <div className="col-12-lg col-12-xs">
                      <h3 className="primary-two">Modern Kitchan</h3>
                      <span className="text-secondary">
                        Decor / Artchitecture
                      </span>
                    </div>
                    <div>
                      <img src={Arrow2} alt="" className="img-2" />
                    </div>
                  </div>
                </div>
                {/* 2 */}
                <div>
                  <img src={picFive} alt="" className="img" />
                  <div className="display-f">
                    <div className="col-12-lg col-12-xs">
                      <h3 className="primary-two">Modern Kitchan</h3>
                      <span className="text-secondary">
                        Decor / Artchitecture
                      </span>
                    </div>
                    <div>
                      <img src={Arrow2} alt="" className="img-2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12-lg col-12-xs home-5-1">
              <div className="display-f gap-4">
                {/* 3 */}
                <div>
                  <img src={picSix} alt="" className="img" />
                  <div className="display-f">
                    <div className="col-12-lg col-12-xs">
                      <h3 className="primary-two">Modern Kitchan</h3>
                      <span className="text-secondary">
                        Decor / Artchitecture
                      </span>
                    </div>
                    <div>
                      <img src={Arrow2} alt="" className="img-2" />
                    </div>
                  </div>
                </div>
                {/* 4 */}
                <div>
                  <img src={picSeven} alt="" className="img" />
                  <div className="display-f">
                    <div className="col-12-lg col-12-xs">
                      <h3 className="primary-two">Modern Kitchan</h3>
                      <span className="text-secondary">
                        Decor / Artchitecture
                      </span>
                    </div>
                    <div>
                      <img src={Arrow2} alt="" className="img-2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
