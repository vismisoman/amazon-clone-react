import React from "react";
import { useHistory } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";
import { useStateValue } from "../../context/StateProvider";
import { getBasketTotal } from "../../reducer/reducer";

function Subtotal({ subtotal }) {
  const history = useHistory();
  const [{ basket }] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            {/* <p>
              // Part of the homework 
              Subtotal ({basket?.length} items): <strong>0</strong>
            </p> */}
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains gift
            </small>
          </>
        )}
        decimalScale={2}
        //value={subtotal} // part of the homework
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={(e) => history.push("/payment")}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
