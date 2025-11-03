import React, { useState } from "react";
import "../make/Placeorder.css";
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaUniversity,
  FaMoneyBillWave,
  FaWallet,
} from "react-icons/fa";
import {
  SiPhonepe,
  SiPaytm,
  SiGooglepay,
  SiAmazonpay,
} from "react-icons/si";
const PlaceOrder = () => {
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [cardNumber, setCardNumber] = useState("");
  const [holderName, setHolderName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  // 🪪 Format card number (digits only + spacing)
  const handleCardNumberChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    value = value.substring(0, 16);
    value = value.replace(/(\d{4})(?=\d)/g, "$1 ");
    setCardNumber(value);
  };

  // 📅 Format expiry date as MM/YY
  const handleExpiryChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 4) value = value.slice(0, 4);
    if (value.length > 2) value = value.slice(0, 2) + "/" + value.slice(2);
    setExpiry(value);
  };

  // 🔒 CVV max 3 digits
  const handleCvvChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    setCvv(value.slice(0, 3));
  };

  return (
    <div className="checkout-wrapper">
      <h1 className="checkout-title">Checkout</h1>

      <div className="checkout-grid">
        <img
          src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
          alt="teddy"
          className="decor-icon"
        />

        {/* 🏠 Shipping Address */}
        <section className="checkout-section address-section">
          <div className="section-header">
            <h2>Shipping Address</h2>
          </div>

          <form className="address-form">
            <input type="text" placeholder="Full Name" />
            <input type="text" placeholder="Street Address" />
            <div className="half-row">
              <input type="text" placeholder="City" />
              <input type="text" placeholder="Pin Code" />
            </div>
          </form>
        </section>

        {/* 💳 Payment Details */}
        <section className="checkout-section payment-section">
          <div className="section-header">
            <h2>Payment Details</h2>
          </div>

          <div className="payment-options">
            <div className="methods-list">
              <button
                className={paymentMethod === "upi" ? "active" : ""}
                onClick={() => setPaymentMethod("upi")}
              >
                <SiGooglepay /> <SiPhonepe /> <SiPaytm /> <span>UPI</span>
              </button>

              <button
                className={paymentMethod === "card" ? "active" : ""}
                onClick={() => setPaymentMethod("card")}
              >
                <FaCcVisa color="blue" /> <FaCcMastercard color="red" />{" "}
                <FaCcAmex /> <span>Card</span>
              </button>

              <button
                className={paymentMethod === "netbanking" ? "active" : ""}
                onClick={() => setPaymentMethod("netbanking")}
              >
                <FaUniversity /> <span>Net Banking</span>
              </button>

              <button
                className={paymentMethod === "wallet" ? "active" : ""}
                onClick={() => setPaymentMethod("wallet")}
              >
                <FaWallet /> <span>Wallet</span>
              </button>

              <button
                className={paymentMethod === "cod" ? "active" : ""}
                onClick={() => setPaymentMethod("cod")}
              >
                <FaMoneyBillWave /> <span>Cash on Delivery</span>
              </button>
            </div>

            {/* 🧾 Selected Payment Method Display */}
            <div className="payment-display">
              {/* 🪙 UPI */}
              {paymentMethod === "upi" && (
                <div className="payment-box">
                  <h4>Select UPI App</h4>
                  <div className="upi-icons">
                    <SiGooglepay size={40} color="#4285F4" title="Google Pay" style={{ cursor: "pointer", }} />
                    <SiPhonepe size={40} color="#5f259f" title="PhonePe" style={{ cursor: "pointer", }} />
                    <SiPaytm size={40} color="#00baf2" title="Paytm" style={{ cursor: "pointer", }} />
                    <SiAmazonpay size={40} color="#ff9900" title="Amazon Pay" style={{ cursor: "pointer", }} />
                  </div>
                  <div className="upi-input">
                    <input type="text" placeholder="ENTER UPI ID" className="upi-id" />
                    <btn className="apply-coupon">Verify UPI ID</btn>
                  </div>
                </div>
              )}

              {/* 💳 CARD */}
              {paymentMethod === "card" && (
                <div className="payment-box">
                  <h4>Enter Card Details</h4>

                  <div className="visa-card">
                    <div className="logoContainer">
                      {/* <FaCcVisa size={36} color="#1a1f71" /> */}
                    </div>

                    <div className="number-container">
                      <label htmlFor="cardNumber" className="input-label">
                        CARD NUMBER
                      </label>
                      <input
                        className="inputstyle card-number"
                        id="cardNumber"
                        placeholder="XXXX XXXX XXXX XXXX"
                        value={cardNumber}
                        onChange={handleCardNumberChange}
                        inputMode="numeric"
                      />
                    </div>

                    <div className="name-date-cvv-container">
                      <div className="name-wrapper">
                        <label htmlFor="holderName" className="input-label">
                          CARD HOLDER
                        </label>
                        <input
                          className="inputstyle"
                          id="holderName"
                          placeholder="NAME"
                          type="text"
                          value={holderName}
                          onChange={(e) => setHolderName(e.target.value)}
                        />
                      </div>

                      <div className="expiry-wrapper">
                        <label htmlFor="expiry" className="input-label">
                          VALID THRU
                        </label>
                        <input
                          className="inputstyle"
                          id="expiry"
                          placeholder="MM/YY"
                          type="text"
                          value={expiry}
                          onChange={handleExpiryChange}
                        />
                      </div>

                      <div className="cvv-wrapper">
                        <label htmlFor="cvv" className="input-label">
                          CVV
                        </label>
                        <input
                          className="inputstyle"
                          id="cvv"
                          placeholder="***"
                          type="password"
                          value={cvv}
                          onChange={handleCvvChange}
                        />
                      </div>
                    </div>
                  </div>

                  <label className="save-card">
                    <input type="checkbox" /> Save card as per RBI guidelines
                  </label>
                </div>
              )}

              {/* 🏦 Netbanking */}
              {paymentMethod === "netbanking" && (
                <div className="payment-box">
                  <h4>Select Bank</h4>
                  <ul className="bank-list">
                    <li>
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABI1BMVEX///+XKR7+/v7neBeVJx7qexfmcgDmcACWJxyTJB7ndxXmcwCVJBj++/eUIBOWJx7jdBeREgD9+fmTGwvebxfq1NLJWxn++PPLmJTQop6TGQf99OucLh377N67TRr16efWZxjyuIzphzbAUhqpOxzRYxixQxv05+WfMh2/hYDwrXfxs4L42cDPjXKeJACWGgCyYlvbuLWdNCrkx8TVq6fslE/oz8zogCb0xJv2zq354tCjRTz20bS5c23rj0SiQTjuoGHhp4rHelrBbky9YDu4VSvpspLt0cTnuZ+4YUitTC+qQSLBcFetNQDLfFXgr5jcmnjRkX6nUUroyLvZkmvlu6rObTPfhUbJUwDbiVKxZF66RwC0bWfCWiHHjonfjlztoWlGrKwbAAATrklEQVR4nN2deUPiyLbAE5KQkITEEHABcaERcVdsW6XdepmeXu68nvHNnTvX29fn9/8ULwmgWepUnaoEZeb8jVR+nlNnq1NBkl5ISjnlpZ4bLXkBZ5uxALqZhiyObyYZi8WbOcYp4M0U47T4ZgVxinwzgDhduhlgzPXEfwFEQbLqWPBfM/t4o79o735+99ve+w8ff+oF8tPHD+/3fvt03kZ92ywDhh9uDX/+/Ov7L1+7+wcHvmPblUBs2/EPDva/ffnH3uef26xvnFnA4JPV9u73X1f2vYDMcF1VToiqGiHoL//zfXeB/q2ziBd+cvh576d+88AxUmRJcV3Ha3b3Lqq0r541wOBjC+3Pex/3vYpBg4thNvf/8c9V+Ntnja86/PXLvufYLg5vxOh43U8teIGZAQw+1P784Zvv8NCNGW3/y2dwjZnhWxi++7DvGPx8Iz3u/zaE1pkFwIDv08eDJpdxphn9/e8vhYjgG37/0neofhMhdn8P2I0vDBhsv3c/HeRR30QM7/0LILL5dt/ve3Z+vEj8/v8+MyKb7+e9r80C1DcRZ7BKXPSFCIPE812viYzsSPEPiYgvxDfc67L5ggS06QXi27h/hf/152dDZPC1v389YNmn4XiD27utxaWl+8tb2Ucx+l+I7uaZ+UpS9dNXpn8xfO/wqFEbf2GtcY/zSP6XKmH15wUMHajP5Gval29q8e+sLckYRKP528L0Eel8rXffWA7U8OUfx5mvXUIZqrFPihnPxhes9HnfYz2o7W1tkr743kMQys4XghKfCzDwoL93mbbmDBZrxK/ePMB5m39OVYlUwOrFHwcVxvMZzUHWQMfffetgCI1fCP70OQCDEPGvfWYGajv3ZAWGcowyU9l7Nz0l0gBb5//aZykw0OASDCg1mFt49CXfCHF/2oDBDjz502aWSLZ3RPv+TQeZ2uxNh5BqoWen/6kwk2xbfk1dYROX2MjG12HmaaYM2FrXeyoT0LCX6A+CtFLZbWaVOE3AwEI79WXmFgxq2NeM50B6mgCxl4mJ0wSsnmtrXUSXwqN40dEaW6hoERIeFG6mNMAda63P1qDs3DIApdoA3Q5oZgPG1ADbJ9Z8BaFB4wAK9I/yBmukgc/60C7UTGE+6eLKeiUjOhWGD6RqMVnEE7q/XBSpRArg+Wl5DQMo29errGU2cUnbSLzvBRLCgK0bXXvFDoNyqMI3zHWW8CoMzTRTCU8BsP2gmygTDbKQO+Y6qzwqDIJ+YRsRBhyeWloPpUHZBuuJJ9niUaFs9M8KIoQBzzVLWUFEiVCcS+ZCq8icdCxu8/diCEG+wMdYwR5EPg894Q6lxuFII/HfpzdisYClM93UXrnIhrZtkLoWCTlCpqRP3/kxXQcXClhdt0xtHguISGcab3ncTChuL+1qigRc2DFNbUNGn5gxt+HqIS+grO6nU9MCAdsneqhBNKBh08tCqXbr8wIGhLt5CUHA4UlZ0erL+DNPQ6aH+xqujZgUt5kOF0URSu2OzgcoGwOqoyld8nqZSJztaj5CGNBStLkuNk6wCWtbyN5FSux/p8JFQYDDE11RlB7XsTzVSle3BA8Z7T9yEYKAgYkqZo9Hg6GnWQQXarwVMtHwW/+7kIMQAmydlgMNolOZiTh30PJHDneYmIg7n4MQ3IMPgQa1eVw5ERMb2IibiwNhQNn4jzghqMFwD2pzPG50LB7JTGtLgzxzGm7hhNLCiRUAKpi2WlrsQTb1Pj5knqNOixDS4E24B03uTRiJc32cSE1Xj7eQJ/egiFsptAejMIEvmFJie4fH42eo1Y5+DLycfAHhK0FCALD6EGpQ2xDYhGPxB4f3S69fL93fvR3ks88xoWC0gAB3Qg0qCr6eIDyS44ezM00HOTzDEPuPAgklKSh4Q0Bs1+I5RDBrA1R4roWAApFwiuL8LkIIAJ5ZEeCa+CacgvifRKonMuBupEHFxJy/PJ8ciFTAZMCwXooi4SxpUHYP0of5woDVKBAGgQLX/IXEMIqdxHT3G9yEZMDSdqRBpd4XVOF4wtI2HI4xS8TXfuPvtREJSxdmtAk1wUBh+M7bw62lo6Pj4+Ojo8XLt0ZBU7UOf7+UrMLzUSDU6iKBwrA97z41gthYPMidsMlhI+r/uLv6RMDdTjmy0TmhisK7XWxkesGlxmUBpqruP3ASkjVYHQOKJNx2c3AEtLpfC3QPU1J5xXv2RAZcH3kZbY37Po/tyfCxdu2SvwOcEmMjHQ4ZhGQVXijRJlQUztZTkGTLWw3KkqvcxxQpUXudzICigArHuUxgo5yb0PZ+MA6blnJ61MqfJyUuQrKNXo0qJpOzM2N7g9ess6bN23wVYkXf4ZpUIAPujDYhZ81kOIOtBoMvWPEul5mqff08P+E4EgZuhiddCyIE8zQ0lHy+prKiZRwNjZC6CRWNw80Y/jVtQjZOmEeHbr9+w+NoiIDSSXkMuIZf2W7eMeeCxpLLSisr1npuFZ5NNqGJzmYMn+1hJpLP01Q2yjxDX0TA4SQSahvocYTmIdvDTOQoT+Km9ub0zLwQH6HUvpqoEB0pfGMJzRdswzx5W2XDOuWYoCWqcF0fA2rzODdje3d4BXJNkmbFNRQ9k3ZzqnD31JyoELcLbXkR62IiOcpTQFXmNR5HQwKsnk5sFFdTGP4ye/IwsSjXkF5K3L5pdji2IYnwYmKjioJpXdjeJSrIP0kDdREPkCDaWzf4+xYkwPbVxEZRsdAZ8FmoFI54iQO66oamZ2pDHkJJenhSIXsiwfAGPC5mJHlStsqKYmrZSX2IkKTCM+1JhcxdaDvEq4R0aVyLG6kr1zV9O3tTFlqLANh69KOIjNRhXPMhC9+sbFLUnqbo+ISGoMLSdvkRcG2Zkc40r/ktNJxiE/ekqjynmHr2/iEeUBpaTypk1IWG94PXxUTSaAoDho5UsbYJz40llFon1qObMekqtJtb2Dw7uWqOskLtBiq0ssEQICSp8PzJj2rzVEfq2OhCIimbOYJhkM4o1hXhRj6WUKrGVUhN2Jy3R4Kj40fiTahQhUo526HhUGEsm9HWaDbq2/xBYiSrP8SNtLKmKYqe7V/gVdh+DIVh/wlWoeH/EHGikbwRV2GlGwBaD1hPSlLh+pMKlTpc+Yo60Uh4bx08ibu8oSkmobonE5IAh0/BnlYYGt6hmI+JRNxIw0ihmNnaF09Y2o6pEM5nDOcyB+DmQNRI1W49ICwTkm4sYazuDQn7kJH6eQDFj51cdS1SIfZ9CiQjfYirsA6p0HZEvWgoNeGku9IL///6dg4VJhypBnlSw2FeYaIJ9j56Rtz+XBijO4S6CU14FlOhokAtNm8rrZXVxpujozfZs16iCHvSMJsJVEiI9ngVXsVVCF19tZOnErXjrcPr6F1Wzu09wno3+W//jCTKZsilr5gKwVjRvI/hNRZvB/54kNJw/Fv2LcpjwXCvGqGbCRI29Euisp9a6MRUqMxB7QvvkaJ2fNv04rciDcdjdty2BAsnNbJRs0yoKtAqXI8DKmvQSy4mVyVXj26bmUufPuuK2uZbMU9a6YWAik5osaFV2OqUMUYqO2G+Vlo9vvMIl1rtW0YytyQGONqEwS7MnoriCXcTjpRS3dvXl1t31z7x0q5BmMhPLPtDqMfmRiVFsAtvMkf3ortQod04sB0HGmM2HPrhjGDt684rIxUSyiZsWRGoME6orYEpG128e/KCYxHL2KKaKdyF6/i37WU/tpM0Unr/gkKYTgeSywqdiqrLIxs1TZIjRRImyib6NsxDiH0LVELcUTIT7MJ1Ah9ahesJFXLNJnAQCp1WTADNDscbIbMfi/WfIkLRYVk64b1AuK/0xs+kZ08MOQjbSSNVTMH3btMJRVrd40gY1oU5dmGiSRrJnOjIOpXwmL+6n0RCxSQ12PAqbKVUiDhyAqRJixb8R2qusTECVKwH0i4UDIbRVL4YIDXiCwxcuq80ARslBcOykiREzl9kCQ3KWRt/dR/11vjdDMHPXJkpQtE7hgblPTulLV4jraxMHqicHWLjIkz7GcUUDfj2W7gTvspb+6rdyT/etEiVPX74QtpOE3K+TyBGSKmejjmNtNKfmzyOfkbgwxNmygpKgc8S5xBelrMFpfYnbjTIZjhf4Z3+4OO0+qPURe5WRIQ/wFW53sUWALprE0CFMA1M3YUZwgdLKYrQhwM+30uS1H4MkNh9otho+q7QwlWWUDgthcMhl5Gqy48mSm7jcxG2rbSR5iCEmxg8fVJXjgGWiekabRemCXcznlSY0PDAcLjKcVyhyk8mqpjrpN4MVYVpwvVyllBwHxo2GA7f4KctXXn+CdA6IW5CnssjBEcjTGgPoHBYWkKXho81faRBwvQTQ4VpHUrtTDQUvIkn097KhjfSwMk8PYhp8dpoaKQpwvOsoxGO+PB7dtBZt2vE9mBgo6QfeqDfO8gQrmcdjXBe6oDvSsK+mTRhoopFrpk4LxreEAgFawvDhxxNCVn8BiYasyigic+4OpIilKqEbShaHxoGtA2R86SV5XpMgyZpEJilwVJah1JLIxGK1fgOOIOC63VXenFAxSJna7yEFwRA0T4N3IZCTcymAckVBesOXoZwJxsNFdFeG5iVotqIla4WB4SyNaabSRPeEAk11mwwSexrKGdrsNuIrrEyF38CUz8n8zGymTShVM0WFhEh11sRxwJvw0XmLS638iqxXUxrmxzqWbeZM4QtkisVPJmBj7jvWLFCVTe0xAPoQDrKT5g6c3oknBewUg/qJDJTtljHYgIIhHrul+xIQ1KwUMTqJw+K9w16l82tdOeSgBZx8AkBWMoSEopDUTN1DoHCglFXqMuvUo0iUxPVIIHwAiLkz2rgWEEt7zMWqpgmkMsgbTRJeAYQKnXueOFDsWKV8kNcbqVfTwGGo2v5VBj/6yqhwB8Lb/INV79v4MpJlV+lAYNsVMyNEgmlhW1iOFSiQX0+JTq30BPASam6PJ9WoFJ+AAIhJpchEJJTmgiRs85vgo1EqI+Y9aGKeCBMkj79UQsmVOpcOjR8aPSyBEyuBz40C2idQHGCQ4UJwhOYkE+JNtiiqRGH9QIFpn1oCHiaAxAgJAf8iJArYMD9/FVSUqpWVpQsYBkMhLjX6ZEI02ejceHqR4EpG+nlCa7aXcvyKeU8JhoDxOowfH8ZHhFM2aTMz3C5FZmwA2m5GpebSRPC+zBsZqBf0QambNmb94GHyQT5UHSopseqkKhDSrSIENHDX7CR1pITGGo2SxubaAeq6bEFBVGHcMQfCfb3AQwDNNJG/AUYamV5RSMCWqc5AQFCStY2UiLyBIPyIyvHT0cyQRI6XyeXaxQng063SYSl0hmdEPszFg48CvX4i4aummqmxQEJr7ngBEzAxv4aqg+fEDcQv7ViwPdJS+N+vlupdOtkAw1MVMnvReMfTBDS96ESDUQz96IPnshIteiFV26w/9bAJSywZ1EAIdTFiCOy9yLxZwFGsnprB/Zp9NYg/YXJdr4wQSdMD5YSERXGb6vZ1/BVmc2BUXFXQPsM68Eb8gma6CZMERIGMUgy36f9TiztpszmQXce8i8RoLleCGDio4nvoCY1T2qs91x4N9J+U23zT1h9kQa3oZaFqAJThNI6ilDRzLUViNGWKbfyhlRnXdbOoYKXkxDUobRrsjfiiFGb78pEW4W7+YFQw5HVuShIg8lPJ75mITPURmHc6MoVNe1YDZt2EwhqV4aiXxUQJViEpSrplBtkVOobvX5AGVel/ZZ2Xw0mNIGxWCHCFG/ii0iTCjRIrT6/EqlSVd1QVPoVC5DQtB4KjxJkwgt2zM9AamZ9vtftLy8vG7IBdoKphJZ1Bm9BbsDUHyS/i1EiUjCVuXooD9Q73ICnsU6GUFu0aELiXBuP6BfUtYc6wURMWqImYqJ0wiFhKAov5lWLujZhtlOxtAtKFMwPmCYEjoGRUj6nL07o5llXu5QtKFQPUglLEqOTQZXwLgtVqulhjyDTpkRBMS/KIsyjRGuHtfpu0kz1U/BoSRiQRZi+IcsjTBVKyVvwpnVCtdCccRAkBMYVEFJ+YC8X89WWtUPzocLlIIuQchLMUqG+y14/yAvN8advqEFQWIMIQkylTyTsVBEPMLyyRrJNV2BBJkoiDGoosaiPUWEg1Yubq6ubszZ1B4oDZv+Q8N1cFcajhDPK2KeotqguNI8CMYRB/i2Q2JgKI9rHpFolrFoMIIGQjEjKH+kStlhwUmPg5QMk/TFhheo2rxbN0yH6GaYIiF4y9X4ajArXZxcQQOTzNqZGLypelI+8rNTG9U7Hws5IcXx5AdE31iNEE49YPsEE++kD8i09/tl0lI12EG7mWfh4dBgZKi5omDo7FCL4pggIjzeeYXrg4W2WAviKsFD8je7HNc87bEu1bhib8JnwRAjDzXilMxyOdUWte1Hqm5qHQTyHJO3eUHejRS3scXzPAEjtdrXOOnAOVz6l1EwzxEdHlNo7Hb1MhNQ7ICASr0g+vruWyYdYGAaQetqzWvo6kKxh8Z4VkNUzGZ7fdBSr/Ehplq0OMd3G0xVsoIjhdsbDlFoXDyenlq6XrXJZtzo7GQXywBXNl59w9ETVVnt4frazc3YxbEeluiDcFAARhFypY3VhYaHKLtefERA31c/1gLNEh5ccT/3XAHwWxpflmzriS9NF8nfnC+XvzidNBfGlkbLyd+eTCkV8aRRQ/tZwj5IP7y8AKAkzvvRj88rfme1R/qJ8/w9GYgx+YdNHNgAAAABJRU5ErkJggg==" alt="" className="bank-img" /> ICICI Bank
                    </li>
                    <li>
                      <img src="data:image/png;base64,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" alt="" className="bank-img" /> State Bank of India
                    </li>
                    <li>
                      <img src="data:image/png;base64,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" alt="" className="bank-img" /> Kotak Mahindra Bank
                    </li>
                    <li>
                      <img src="data:image/png;base64,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" alt="" className="bank-img" /> HDFC Bank
                    </li>
                  </ul>
                  <input type="text" className="upi-id" placeholder="OTHER BANKS" />
                  <button className="Net-bank"> VERIFY</button>
                </div>
              )}

              {/* 💰 Wallet */}
              {paymentMethod === "wallet" && (
                <div className="payment-box">
                  <h4>Select Wallet</h4>
                  <ul className="wallet-list">
                    <li>
                      <SiAmazonpay size={26} /> Amazon Pay
                    </li>
                    <li>

                      <img src="data:image/png;base64,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" alt="" className="bank-img" />                      Ola Money
                    </li>
                  </ul>
                </div>
              )}

              {/* 💵 COD */}
              {paymentMethod === "cod" && (
                <div className="payment-box">
                  <h4>Cash on Delivery (Cash/UPI)</h4>
                  <p>Pay in cash or using UPI at the time of delivery.</p>
                  <button className="Order-bttn">PLACE ORDER</button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* 🧾 Order Summary */}
        <section className="checkout-section-order-summary">
          <div className="section-header">
            <h2>Order Summary</h2>
          </div>

          <div className="coupon-box">
            <button className="apply-coupon1">Apply Coupons</button>
            <p>view all coupnes</p>
          </div>

          <div className="price-summary">
            <p>
              <span>Total MRP:</span> <span>₹2299</span>
            </p>
            <p>
              <span>Discount:</span> <span>- ₹105</span>
            </p>
            <p>
              <span>Delivery:</span> <span>₹0</span>
            </p>
            <hr />
            <p className="total">
              <strong>Total:</strong> <strong>₹2194</strong>
            </p>
            <small className="save-text">🎉 You saved ₹105!</small>
          </div>

          <button className="place-order">Place Order</button>
        </section>
      </div>
    </div>
  );
};

export default PlaceOrder;
