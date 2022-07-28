import Order from "./Order"

export default {
  name: "Order",
  component: Order,
}

export const Default = (args) => <Order {...args} />
Default.args = {}
