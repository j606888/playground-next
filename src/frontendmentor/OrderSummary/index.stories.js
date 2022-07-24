import OrderSummary from "./index"

export default {
  name: "OrderSummary",
  component: OrderSummary,
}

export const Default = (args) => <OrderSummary {...args} />
Default.args = {}
