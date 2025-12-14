import React, { useState } from "react";

function Step({ step, setStep }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [model, setModel] = useState("");
  const [carPrice, setCarPrice] = useState("");
  const [credNum, setCredNum] = useState("");
  const [expDate, setExpDate] = useState("");
  const [cardErr, setCardErr] = useState(false);
  const [expDateErr, setExpDateErr] = useState(false);

  return (
    <div>
      {step === 0 && (
        <div id="step1">
          <h1>Customer Details</h1>
          <label htmlFor="first_name">First Name:</label>
          <input
            type="text"
            id="first_name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label htmlFor="last_name">Last Name:</label>
          <input
            type="text"
            id="last_name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <button type="button" onClick={() => setStep((cur) => cur + 1)}>
            Next
          </button>
        </div>
      )}
      {step === 1 && (
        <div id="step2">
          <h1>Car Details</h1>
          <label htmlFor="model">Model:</label>
          <input
            type="text"
            id="model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
          />
          <label htmlFor="car_price">Car Price:</label>
          <input
            type="text"
            id="car_price"
            value={carPrice}
            onChange={(e) => setCarPrice(e.target.value)}
          />
          <button type="button" onClick={() => setStep((cur) => cur - 1)}>
            Previous
          </button>
          <button type="button" onClick={() => setStep((cur) => cur + 1)}>
            Next
          </button>
        </div>
      )}
      {step === 2 && (
        <div id="step3">
          <h1>Payment Details</h1>
          <label htmlFor="card_info">Credit cart Number:</label>
          <input
            type="text"
            id="card_info"
            value={credNum}
            onChange={(e) => {
              setCredNum(e.target.value);
              const showError = e.target.value.length === 12;
              setCardErr(!showError);
            }}
          />
          <p
            id="cardError"
            style={
              cardErr ? { color: "red", display: "block" } : { display: "none" }
            }
          >
            Credit card must be exactly 12 digit long.
          </p>
          <label htmlFor="expiry_date">Expiration Date:</label>
          <input
            type="text"
            id="expiry_date"
            value={expDate}
            onChange={(e) => {
              setExpDate(e.target.value);
              const regex = /^(0[1-9]|1[0-2])\/\d{2}$/;
              setExpDateErr(!regex.test(e.target.value));
            }}
          />
          <p
            id="expError"
            style={
              expDateErr
                ? { color: "red", display: "block" }
                : { display: "none" }
            }
          >
            Expiration Date must be in the format of MM/YY
          </p>
          <button type="button" onClick={() => setStep((cur) => cur - 1)}>
            Previous
          </button>
          <button
            // type="submit"
            onClick={() => {
              setStep(0);
              setCarPrice("");
              setCredNum("");
              setExpDate("");
              setFirstName("");
              setLastName("");
              setModel("");
              setCardErr(false);
              setExpDateErr(false);
            }}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
}

export default Step;
