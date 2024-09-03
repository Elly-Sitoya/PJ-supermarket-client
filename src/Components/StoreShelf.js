import "../Styles/StoreShelf.css";
import { Link } from "react-router-dom";
import people from "../Assets/people.png";
import people_2 from "../Assets/mluhya-person.png";
import people_3 from "../Assets/security-men.png";
import people_4 from "../Assets/person-4.png";
import toy_icon from "../Assets/toys-icons-removebg-preview.png";
import clothing_icon from "../Assets/cloth-icon-removebg-preview.png";
import beverages_icon from "../Assets/beverage-icon-removebg-preview.png";
import electronics_icon from "../Assets/electronic-icon-removebg-preview.png";
import food_icon from "../Assets/food-icon-1-removebg-preview(1).png";
import household_icon from "../Assets/household-icon-3-removebg-preview.png";
import personalcare_icon from "../Assets/personal-care-2-removebg-preview.png";

const StoreShelf = () => {
  return (
    <section className="s-container">
      <div className="s-wrapper store-shelf" id="toys">
        <div className="people-with-cart">
          <img src={people} alt="people" className="people-with-cart-img" />
        </div>
        <div className="people-with-cart-2">
          <img src={people_2} alt="people" className="people-with-cart-img-2" />
        </div>
        <div className="people-with-cart-3">
          <img src={people_3} alt="people" className="people-with-cart-img-3" />
        </div>
        <div className="security_2">
          <img src={people_3} alt="people" className="people-with-cart-img-3" />
        </div>

        <div className="box-1  square">exit</div>
        <div className="box-2  square">entrance</div>

        <Link to={"toys"}>
          <div className="first-shelf">
            <center>toys</center>
            <div className="people-with-cart-6">
              <img
                src={toy_icon}
                alt="people"
                className="people-with-cart-img-6"
              />
            </div>
          </div>
        </Link>
        <Link to={"beverages"}>
          <div className="second-shelf">
            <center>beverages</center>{" "}
            <div className="people-with-cart-10">
              <img
                src={beverages_icon}
                alt="people"
                className="people-with-cart-img-10"
              />
            </div>
          </div>
        </Link>
        <Link to={"clothing"}>
          <div className="third-shelf">
            <center>clothing</center>
            <div className="people-with-cart-11">
              <img
                src={clothing_icon}
                alt="people"
                className="people-with-cart-img-11"
              />
            </div>
          </div>
        </Link>
        <Link to={"electronics"}>
          <div className="fourth-shelf">
            <center>electronics</center>
            <div className="people-with-cart-7">
              <img
                src={electronics_icon}
                alt="people"
                className="people-with-cart-img-7"
              />
            </div>
          </div>
        </Link>
        <Link to={"food"}>
          <div className="fifth-shelf">
            <center>food</center>
            <div className="people-with-cart-5">
              <img
                src={food_icon}
                alt="people"
                className="people-with-cart-img-5"
              />
            </div>
          </div>
        </Link>
        <Link to={"household"}>
          <div className="sixth-shelf">
            <center>household</center>
            <div className="people-with-cart-8">
              <img
                src={household_icon}
                alt="people"
                className="people-with-cart-img-8"
              />
            </div>
          </div>
        </Link>
        <Link to={"personalcare"}>
          <div className="seventh-shelf">
            <center>personal care</center>{" "}
            <div className="people-with-cart-9">
              <img
                src={personalcare_icon}
                alt="people"
                className="people-with-cart-img-9"
              />
            </div>
          </div>
        </Link>
        <Link to={"teller1"}>
          <div className="eighth-shelf">
            <center>teller1</center>
          </div>
        </Link>
        <Link to={"teller2"}>
          <div className="ninth-shelf">
            <center>teller2</center>
          </div>
        </Link>
        {/* <Link to={"teller3"}>
          <div className="tenth-shelf">
            <center>teller3</center>
          </div>
        </Link> */}
      </div>
    </section>
  );
};

export default StoreShelf;
