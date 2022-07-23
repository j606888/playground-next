import Item from "./Item"

export default {
  title: "Item",
  component: Item,
}

export const Default = (args) => <Item {...args} />
Default.args = {
  item: {
    isChecked: false,
    name: 'Item 1',
    count: 3
  }
}
