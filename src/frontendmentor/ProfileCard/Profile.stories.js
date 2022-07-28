import Profile from "./Profile"

export default {
  name: "Profile",
  component: Profile,
}

export const Default = (args) => <Profile {...args} />
Default.args = {}
