import { useState } from "react";
import advancedIcon from "./assets/icon-advanced.svg";
import arcadeIcon from "./assets/icon-arcade.svg";
import checkmarkIcon from "./assets/icon-checkmark.svg";
import proIcon from "./assets/icon-pro.svg";
import validationIcon from "./assets/icon-validation.svg";

function App() {
  const [arcadeCost, setArcadeCost] = useState("$9/mo");
  const [advancedCost, setAdvancedCost] = useState("$12/mo");
  const [proCost, setProCost] = useState("$15/mo");
  const [serviceCost, setServiceCost] = useState("+$1/mo");
  const [storageCost, setStorageCost] = useState("+$2/mo");
  const [profileCost, setProfileCost] = useState("+$2/mo");
  const [changeCost, setChangeCost] = useState(false);

  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [numberInput, setNumberInput] = useState("");

  const [summaryMainName, setSummaryMainName] = useState("");
  const [summaryMainCost, setSummaryMainCost] = useState("");
  const [summaryOption, setSummaryOption] = useState("Month");
  const [totalSum, setTotalSum] = useState(0);

  function ToggleSelectButton(e) {
    const selectOptions = document.querySelectorAll(".select");

    selectOptions.forEach((item) => item.classList.toggle("active"));
    e.target.classList.toggle("active");

    setChangeCost((changeCost) => (changeCost = !changeCost));

    if (changeCost) {
      setArcadeCost("$9/mo");
      setAdvancedCost("$12/mo");
      setProCost("$15/mo");
      setServiceCost("+$1/mo");
      setStorageCost("+$2/mo");
      setProfileCost("+$2/mo");
      setSummaryOption("Month");
    } else {
      setArcadeCost("$90/yr");
      setAdvancedCost("$120/yr");
      setProCost("$150/yr");
      setServiceCost("+$10/yr");
      setStorageCost("+$20/yr");
      setProfileCost("+$20/yr");
      setSummaryOption("Year");
    }
  }

  function TogglePlanOption(e) {
    const options = document.querySelectorAll(".option");

    options.forEach((item) => item.classList.remove("active"));
    e.target.classList.add("active");
  }

  function ToggleCheckmark(e) {
    e.target.classList.toggle("active");
    e.target.innerHTML =
      e.target.innerHTML == "" ? `<img src="${checkmarkIcon}" />` : "";
  }

  function FirstPage() {
    const stepNumbers = document.querySelectorAll(".step-number");
    const formSide = document.querySelector(".form-side");
    const pages = document.querySelectorAll(".page");

    stepNumbers.forEach((item) => item.classList.remove("active"));
    stepNumbers[0].classList.add("active");
    formSide.style.transform = "translateY(0)";
    pages.forEach((item) => (item.style.opacity = "0"));
    pages[0].style.opacity = "1";
  }

  function SecondPage(e) {
    e.preventDefault();

    if (nameInput == "" || !emailInput.includes("@") || numberInput == "") {
      return alert("You must fill out the input fields!");
    }

    const stepNumbers = document.querySelectorAll(".step-number");
    const formSide = document.querySelector(".form-side");
    const pages = document.querySelectorAll(".page");

    stepNumbers.forEach((item) => item.classList.remove("active"));
    stepNumbers[1].classList.add("active");
    formSide.style.transform = "translateY(-550px)";
    pages.forEach((item) => (item.style.opacity = "0"));
    pages[1].style.opacity = "1";
  }

  function ThirdPage() {
    const stepNumbers = document.querySelectorAll(".step-number");
    const formSide = document.querySelector(".form-side");
    const pages = document.querySelectorAll(".page");

    stepNumbers.forEach((item) => item.classList.remove("active"));
    stepNumbers[2].classList.add("active");
    formSide.style.transform = "translateY(-1100px)";
    pages.forEach((item) => (item.style.opacity = "0"));
    pages[2].style.opacity = "1";
  }

  function FourthPage() {
    const stepNumbers = document.querySelectorAll(".step-number");
    const formSide = document.querySelector(".form-side");
    const options = document.querySelectorAll(".option");
    const summaryItems = document.querySelectorAll(".summary-item");
    const checkmarkButtons = document.querySelectorAll(".checkmark-btn");
    const pages = document.querySelectorAll(".page");

    stepNumbers.forEach((item) => item.classList.remove("active"));
    stepNumbers[3].classList.add("active");
    formSide.style.transform = "translateY(-1650px)";

    checkmarkButtons.forEach((item, index) => {
      if (item.className.includes("active")) {
        summaryItems[index].classList.add("active");
      } else {
        summaryItems[index].classList.remove("active");
      }
    });

    let mainCost = 0;

    if (options[0].className.includes("active")) {
      setSummaryMainName("Arcade");
      setSummaryMainCost(arcadeCost);
      mainCost += parseInt(arcadeCost.slice(1, arcadeCost.length - 3));
    } else if (options[1].className.includes("active")) {
      setSummaryMainName("Advanced");
      setSummaryMainCost(advancedCost);
      mainCost += parseInt(advancedCost.slice(1, advancedCost.length - 3));
    } else if (options[2].className.includes("active")) {
      setSummaryMainName("Pro");
      setSummaryMainCost(proCost);
      mainCost += parseInt(proCost.slice(1, proCost.length - 3));
    }

    pages.forEach((item) => (item.style.opacity = "0"));
    pages[3].style.opacity = "1";

    if (summaryItems[0].className.includes("active")) {
      mainCost += parseInt(serviceCost.slice(2, serviceCost.length - 3));
    }
    if (summaryItems[1].className.includes("active")) {
      mainCost += parseInt(storageCost.slice(2, storageCost.length - 3));
    }
    if (summaryItems[2].className.includes("active")) {
      mainCost += parseInt(profileCost.slice(2, profileCost.length - 3));
    }

    setTotalSum((totalSum) => (totalSum = mainCost));
  }

  function FifthPage() {
    const stepNumbers = document.querySelectorAll(".step-number");
    const formSide = document.querySelector(".form-side");
    const pages = document.querySelectorAll(".page");

    stepNumbers.forEach((item) => item.classList.remove("active"));
    formSide.style.transform = "translateY(-2200px)";
    pages.forEach((item) => (item.style.opacity = "0"));
    pages[4].style.opacity = "1";
  }

  return (
    <div className="container">
      <div className="select-side">
        <div className="step">
          <h3 className="step-number active">1</h3>
          <div className="step-info">
            <h3 className="step-text">STEP 1</h3>
            <h3 className="step-name">Your info</h3>
          </div>
        </div>
        <div className="step">
          <h3 className="step-number">2</h3>
          <div className="step-info">
            <h3 className="step-text">STEP 2</h3>
            <h3 className="step-name">select plan</h3>
          </div>
        </div>
        <div className="step">
          <h3 className="step-number">3</h3>
          <div className="step-info">
            <h3 className="step-text">STEP 3</h3>
            <h3 className="step-name">Add-ons</h3>
          </div>
        </div>
        <div className="step">
          <h3 className="step-number">4</h3>
          <div className="step-info">
            <h3 className="step-text">STEP 4</h3>
            <h3 className="step-name">Summary</h3>
          </div>
        </div>
      </div>
      <div className="form-side">
        <div className="page">
          <h2 className="title">Personal Info</h2>
          <p className="sub-title">
            Please provide your name, email address, and phone number.
          </p>
          <form className="form">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="e.g. Stephen King"
              onChange={(e) => setNameInput(e.target.value)}
              required
            />
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="e.g. stephenking@lorem.com"
              onChange={(e) => setEmailInput(e.target.value)}
              required
            />
            <label htmlFor="number">Phone Number</label>
            <input
              type="text"
              name="number"
              id="number"
              placeholder="e.g. +1 234 567 890"
              onChange={(e) => setNumberInput(e.target.value)}
              required
            />
            <button className="next-btn" onClick={SecondPage}>
              Next Step
            </button>
          </form>
        </div>

        <div className="page">
          <h2 className="title">Select your plan</h2>
          <p className="sub-title">
            You have the option of monthly or yearly billing.
          </p>
          <div className="plan-option">
            <div className="option" onClick={TogglePlanOption}>
              <img src={arcadeIcon} />
              <div className="option-text-box">
                <h3 className="option-name">Arcade</h3>
                <p className="text">{arcadeCost}</p>
              </div>
            </div>
            <div className="option" onClick={TogglePlanOption}>
              <img src={advancedIcon} />
              <div className="option-text-box">
                <h3 className="option-name">Advanced</h3>
                <p className="text">{advancedCost}</p>
              </div>
            </div>
            <div className="option" onClick={TogglePlanOption}>
              <img src={proIcon} />
              <div className="option-text-box">
                <h3 className="option-name">Pro</h3>
                <p className="text">{proCost}</p>
              </div>
            </div>
          </div>
          <div className="select-option">
            <h3 className="select active">Monthly</h3>
            <div className="btn-box">
              <button
                className="select-btn"
                onClick={ToggleSelectButton}
              ></button>
            </div>
            <h3 className="select">Yearly</h3>
          </div>
          <div className="page-btns">
            <button className="back-btn" onClick={FirstPage}>
              Go Back
            </button>
            <button className="next-btn" onClick={ThirdPage}>
              Next Step
            </button>
          </div>
        </div>

        <div className="page">
          <h2 className="title">Pick add-ons</h2>
          <p className="sub-title">
            Add-ons help enhance your gaming experience.
          </p>

          <div className="add-ons-row">
            <div className="add-ons-option">
              <button
                className="checkmark-btn"
                onClick={ToggleCheckmark}
              ></button>
              <div className="add-ons-info">
                <h3 className="add-ons-name">Online service</h3>
                <p className="text">Access to multiplayer games</p>
              </div>
              <h3 className="add-ons-cost">{serviceCost}</h3>
            </div>
            <div className="add-ons-option">
              <button
                className="checkmark-btn"
                onClick={ToggleCheckmark}
              ></button>
              <div className="add-ons-info">
                <h3 className="add-ons-name">Larger storage</h3>
                <p className="text">Extra 1TB of cloud save</p>
              </div>
              <h3 className="add-ons-cost">{storageCost}</h3>
            </div>
            <div className="add-ons-option">
              <button
                className="checkmark-btn"
                onClick={ToggleCheckmark}
              ></button>
              <div className="add-ons-info">
                <h3 className="add-ons-name">Customizable profile</h3>
                <p className="text">Custom theme on your profile</p>
              </div>
              <h3 className="add-ons-cost">{profileCost}</h3>
            </div>
          </div>

          <div className="page-btns">
            <button className="back-btn" onClick={SecondPage}>
              Go Back
            </button>
            <button className="next-btn" onClick={FourthPage}>
              Next Step
            </button>
          </div>
        </div>

        <div className="page">
          <h2 className="title">Finishing up</h2>
          <p className="sub-title">
            Double-check everything looks OK before confirming.
          </p>

          <div className="summary">
            <div className="summary-main-item">
              <div className="summary-main-name">
                {summaryMainName}({summaryOption}ly)
              </div>
              <div className="summary-main-cost">{summaryMainCost}</div>
            </div>
            <div className="summary-item">
              <div className="summary-name">Online service</div>
              <div className="summary-cost">{serviceCost}</div>
            </div>
            <div className="summary-item">
              <div className="summary-name">Larger storage</div>
              <div className="summary-cost">{storageCost}</div>
            </div>
            <div className="summary-item">
              <div className="summary-name">Customizable profile</div>
              <div className="summary-cost">{profileCost}</div>
            </div>
          </div>
          <div className="total-summary">
            <div className="total-summary-name">
              Total (per {summaryOption})
            </div>
            <div className="total-summary-cost">
              +${totalSum}/{summaryOption == "Month" ? "mo" : "yr"}
            </div>
          </div>

          <div className="page-btns">
            <button className="back-btn" onClick={ThirdPage}>
              Go Back
            </button>
            <button className="next-btn" onClick={FifthPage}>
              Confirm
            </button>
          </div>
        </div>

        <div className="page">
          <img src={validationIcon} />
          <h2 className="title">Thank you!</h2>
          <p className="text">
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
