import "!style-loader!css-loader!sass-loader!../src/styles/index.scss";
import { Attribution } from "../src/components";

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

export const decorators = [
	(Story) => (
		<div>
			{Story()}
			<Attribution />
		</div>
	),
];
