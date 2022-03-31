import QRCode from "./QRCode";

export default {
	title: "QRCode",
	component: QRCode,
};

const QRCodeTemplate = (args) => <QRCode {...args}/>;

export const QRCodeExample = QRCodeTemplate.bind({});

QRCodeExample.args = {};
