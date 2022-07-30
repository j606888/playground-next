import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport"
import FaqAccordionCard from "../src/frontendmentor/FaqAccordionCard"
import Desktop from "../src/frontendmentor/FaqAccordionCard/Desktop"
import Mobile from "../src/frontendmentor/FaqAccordionCard/Mobile"

export default {
  title: "frontendmentor/FaqAccordionCard",
  parameters: {
    viewport: {
      viewports: MINIMAL_VIEWPORTS,
    },
  },
}

export const Default = (args) => <FaqAccordionCard {...args} />
Default.args = {}

export const WithMobile = (args) => <Mobile {...args} />
WithMobile.args = {}
WithMobile.parameters = {
  viewport: {
    defaultViewport: "mobile2",
  },
}

export const WithDesktop = (args) => <Desktop {...args} />
WithDesktop.args = {}
