import Plan from "./Plan"

export default {
  name: "Plan",
  component: Plan,
}

export const Default = (args) => <Plan {...args} />
Default.args = {}
