import Option from "./Option";

export default {
  name: "Option",
  component: Option,
}

export const Default = (args) => <Option {...args} />
Default.args = {
  number: 1,
  isSelected: false
}
