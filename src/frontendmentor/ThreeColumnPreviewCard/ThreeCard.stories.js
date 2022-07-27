import ThreeCard from "./ThreeCard"

export default {
  name: "ThreeCard",
  component: ThreeCard,
}

export const Default = (args) => <ThreeCard {...args} />
Default.args = {}
