import "./style.css"

const Wallet = () => {
    return (
        <div className="wallet__settings">
            <h1 className="wallet__title">
                Wallet
            </h1>
            <form action="" className="wallet">
                <div className="wallet__inputs">
                    <div className="wallet__input-top">
                        <input placeholder="Card number" name="Card number" type="tel" id="cardNumber" className="wallet__input wallet__input-card" required />
                    </div>
                    <div className="wallet__input-bottom">
                        <div className="wallet__input-expired">
                            <input placeholder="MM" type="tel" name="Expiry month" id="expMonth" className="wallet__input wallet__input-expMonth" required />
                            <span className="wallet__inner">/</span>
                            <input placeholder="YY" type="tel" name="Expiry year" id="expYear" className="wallet__input wallet__input-expYear" required />
                        </div>
                        <input placeholder="CVV" type="tel" name="CVV" id="cvc" className="wallet__input wallet__input-cvv" required />
                    </div>
                    <button className="wallet__button-submit">
                        SAVE CARD
                    </button>
                </div>
            </form>
            <p className="wallet__additional-information">
            By clicking the "SAVE CARD" button, you confirm that you give your consent (acceptance) to the provision of financial services for the transfer of funds for the purpose of paying for the order/services on La Pigeon by one of the following financial partners:- JSC "TASKOMBANK", JSC "ALFA-BANK", JSC "PUMB", JSC KB "PRIVATBANK", JSC "OSCHADBANK"- LLC "FC" "EVO" (more details →)
            </p>
        </div>
    );
}

export default Wallet;
