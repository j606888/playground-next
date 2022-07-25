import Summary from "./Summary"

export default {
  name: "Summary",
  component: Summary,
}

export const Default = (args) => <Summary {...args} />
Default.args = {
  count: "10k+",
  name: "Companies"
}
