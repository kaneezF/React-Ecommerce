import "./Blazers.css";

export default function Blazers() {
  return (
    <>
      <div className="blazers">
        <div className="text">
          <p className="blazer-pre">Work & Office Attire</p>
          <p className="blazer-main">
            Professional pinstripe <br />
            blazers collection
          </p>
          <p className="blazer-post">
            Elevate your workwear with our Professional Pinstripe Blazers
            Collection, <br />
            where tailored sophistication meets modern confidence for a
            powerfully polished office look.
          </p>
          <button className="shopNow">Shop Now</button>
        </div>
        <div className="blazers-img">
          <img src="/images/blazers.jpg" alt="" />
        </div>
      </div>

      <div className="fashion-container">
        <div className="left-side-content">
          <div className="left-side-img">
            <img src="images/third-thumbnail_black.jpg" alt="" />
          </div>
          <div className="left-side-text">
            <p className="sec-title">Discover the allure of fashion reinvented!</p>
            <p className="post-fashion">
              Dive into a world of style with our latest collection! Shop now
              and redefine your wardrobe narrative!
            </p>
            <button className="viewCollectionBtn side-btn">View Collection</button>
          </div>
        </div>
      </div>
    </>
  );
}
