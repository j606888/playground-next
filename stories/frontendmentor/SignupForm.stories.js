import SignupForm from "../../src/frontendmentor/SignupForm"
import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport"


export default {
  name: "frontendmentor/SignupForm",
  parameters: {
    viewport: {
      viewports: MINIMAL_VIEWPORTS,
    },
  },
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
