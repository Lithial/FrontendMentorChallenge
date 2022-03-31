import Code from "../../images/qrcode/image-qr-code.png"
const QRCode = () => {
	return <div className={"qr-code__container"}>
				<div className={"qr-code__panel"}>
					<img src={Code} alt={"QR Code for the frontend mentor QR Code Challenge."}/>
					<h1>Improve your front-end skills by building projects</h1>
					<p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
				</div>
	</div>;
};

export default QRCode;

QRCode.propTypes = {};
QRCode.defaultProps = {};
