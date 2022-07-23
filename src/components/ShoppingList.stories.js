import ShoppingList from "./ShoppingList";

export default {
  title: 'ShoppingList',
  component: ShoppingList
}

export const Default = (args) => <ShoppingList {...args} />
Default.args = {}
