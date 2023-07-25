import React from 'react'

const Add = () => {
  return (
    <div className="payment">
        <h2 className="payment-txt"> Query Add</h2>
        <form>
          <div className="form-row">
            <div className="form-group col-md-6 pay1">
              <label for="inputEmail4" className="field-pay">Author</label>
              <input
                type="email"
                className="form-control pay-fie"
                id="inputEmail4"
                placeholder="  Name"
              />
            </div>
            <div className="form-group col-md-6 pay1">
              <label for="inputPassword4" className="field-pay">Date</label>
              <input
                type="date"
                className="form-control pay-fie"
                id="date"
                placeholder=" date"
              />
            </div>
          </div>
          <div className="form-group pay1">
            <label for="inputAddress" className="field-pay">Query</label>
            <textarea className="pay-file" name="postContent" rows={4} cols={50} />
          </div>
          {/* <div className="form-row">
            <div className="form-group col-md-6 pay1">
              <label for="inputCity" className="field-pay">CVV</label>
              <input type="password" className="form-control" id="inputCity" />
            </div>
          </div> */}
          <button type="submit" className="btn btn-primary pay-btn1">
            Add{" "}
          </button>
        </form>
      </div>
  )
}


export default Add

