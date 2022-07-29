import ProfileCard from '../src/frontendmentor/ProfileCard'
import Desktop from '../src/frontendmentor/ProfileCard/Desktop'


export default {
  title: "frontendmentor/ProfileCard"
}

export const Default = (args) => <ProfileCard {...args} />
Default.args = {}

export const WithDesktop = (args) => <Desktop {...args} />
WithDesktop.args = {}
