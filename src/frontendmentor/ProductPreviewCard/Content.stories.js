import Content from "./Content";

export default {
  name: 'Content',
  component: Content
}

export const Default = (args) => <Content {...args} />
Default.args = {}
