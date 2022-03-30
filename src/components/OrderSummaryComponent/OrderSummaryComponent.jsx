import Hero from "../../images/osc/illustration-hero.svg";
import MusicSymbol from "../../images/osc/icon-music.svg";

const OrderSummaryComponent = () => {
    return (
        <div className={"order-summary__container"}>
            <img
                className={"order-summary__hero"}
                src={Hero}
                alt={"Hero banner of lady dancing to music on her phone."}
            />
            <div className={"order-summary__text-container"}>
                <h1>Order Summary</h1>
                <p>
                    You can now listen to millions of songs, audiobooks, and podcasts on any device
                    anywhere you like!
                </p>
            </div>
            <div className={"order-summary__panel"}>
                <img src={MusicSymbol} alt={"Music icon comprised of two joined quarter notes."} />
                <div className={"order-summary__panel--column"}>
                    <p>
                        <strong>Annual Plan</strong>
                    </p>
                    <p>$59.99/year</p>
                </div>
                <a className={"order-summary__panel--link"} href={"#"}>
                    Change
                </a>
            </div>
            <div className={"order-summary__buttons"}>
                <button className={"order-summary__button order-summary__proceed-button"}>
                    Proceed to Payment
                </button>
                <button className={"order-summary__button order-summary__cancel-button"}>
                    Cancel Order
                </button>
            </div>
        </div>
    );
};

export default OrderSummaryComponent;

OrderSummaryComponent.propTypes = {};
OrderSummaryComponent.defaultProps = {};
