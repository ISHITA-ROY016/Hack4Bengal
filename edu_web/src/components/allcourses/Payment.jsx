import React from "react";
import './payment.css';
const Payment = () => {
  return (
    <>
      
      <div className="payment">
        <h2 className="payment-txt"> Payment Form</h2>
        <form>
          <div className="form-row">
            <div className="form-group col-md-6 pay1">
              <label for="inputEmail4" className="field-pay">Name</label>
              <input
                type="email"
                className="form-control pay-fie"
                id="inputEmail4"
                placeholder="  Name"
              />
            </div>
            <div className="form-group col-md-6 pay1">
              <label for="  inputPassword4" className="field-pay">Email</label>
              <input
                type="password"
                className="form-control pay-fie"
                id="inputPassword4"
                placeholder="  Email"
              />
            </div>
          </div>
          <div className="form-group pay1">
            <label for="inputAddress" className="field-pay">Payment</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="  Amount"
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6 pay1">
              <label for="inputCity" className="field-pay">CVV</label>
              <input type="password" className="form-control" id="inputCity" />
            </div>
            <div className="form-group col-md-4 pay1">
              <label for="inputState" className="field-pay">Course</label>
              <select id="inputState" className="form-control">
                <option selected>Choose...</option>
                <option>HTML, CSS, JS</option>
                <option>Java</option>
                <option>Reactjs</option>
              </select>
            </div>
            <div className="form-group col-md-4 pay1">
              <label for="inputState" className="field-pay" >Card</label>
              <select id="inputState" className="form-control">
                <option selected>Choose...</option>
                <option>Visa</option>
                <option>Mastercard</option>
              </select>
            </div>
          </div>
          <button type="submit" className="btn btn-primary pay-btn1">
            Pay{" "}
          </button>
        </form>
      </div>
    </>
  );
};

export default Payment;