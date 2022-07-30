import SignupForm from "../../src/frontendmentor/SignupForm"

export default {
  name: "frontendmentor/SignupForm"
}

export const Default = (args) => <SignupForm {...args} />
Default.args = {}

export const WithDesktop = (args) => <SignupForm {...args} />
WithDesktop.args = {}

export const WithMobile = (args) => <SignupForm {...args} />
WithMobile.args = {}
WithMobile.parameters = {
  viewport: {
    defaultViewport: "mobile2",
  },
}
