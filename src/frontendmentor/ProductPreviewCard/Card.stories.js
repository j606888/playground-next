import Card from "./Card";

export default {
  name: 'Card',
  component: Card
}

export const Default = (args) => <Card {...args} />
Default.args = {}
