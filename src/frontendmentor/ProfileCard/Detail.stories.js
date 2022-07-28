import Detail from "./Detail"

export default {
  name: "Detail",
  component: Detail,
}

export const Default = (args) => <Detail {...args} />
Default.args = {
  title: 'Followers',
  count: '80K'
}
