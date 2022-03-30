import OrderSummaryComponent from "./OrderSummaryComponent";

export default {
    title: "OrderSummaryComponent",
    component: OrderSummaryComponent,
};

const OrderSummaryComponentTemplate = (args) => (
    <div className={"order-summary"}>
        <OrderSummaryComponent {...args} />
    </div>
);

export const OrderSummaryComponentExample = OrderSummaryComponentTemplate.bind({});

OrderSummaryComponentExample.args = {};
