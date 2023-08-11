import shoppingcart from "../assets/images/shoppingcart.jpeg";
import learnmore from "../assets/images/learnmore.jpeg";
import gitImg from "../assets/images/git.png";
// import { Link } from "react-router-dom";

export const Projects = () => {
  return (
    <>
      <div className="cart">
        <h1 className="subtitle">Projects</h1>
        <div className="totalProject">
          <div className="projectCart">
            <img src={shoppingcart} className="projectImg" />
            <div className="gitProject">
              <h3 className="projectName">Shopping Cart</h3>
              <a href="https://github.com/SurakshaMore/https---github.com-SurakshaMore-ShoppingCart">
                <img src={gitImg} className="icon" />
              </a>
            </div>
            <p className="projectDesc">
              Experience an immersive online shopping journey through my
              Interactive Shopping Cart project. Seamlessly manage selections,
              adjust quantities, and explore dynamic cart functionality.
            </p>
            <h5>
              <span className="html">#HTML </span>
              <span className="css">#CSS </span>
              <span className="js">#JavaScript </span>
            </h5>
          </div>
          <div className="projectCart">
            <img src={learnmore} className="projectImg" />
            <div className="gitProject">
              <h3 className="projectName">Learn More</h3>
              <a href="https://github.com/SurakshaMore/course-Selling-Application">
                <img src={gitImg} className="icon" />
              </a>
            </div>
            <p className="projectDesc">
              Created a user-friendly "Learn More" course sales platform.
              Discover diverse courses with transparent pricing and durations.
              Effortlessly navigate categories, access pricing, and explore
              course details.
            </p>
            <h5>
              <span className="html">#HTML </span>
              <span className="css">#CSS </span>
              <span className="js">#JavaScript </span>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};


