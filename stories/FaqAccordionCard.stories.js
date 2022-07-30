import FaqAccordionCard from "../src/frontendmentor/FaqAccordionCard"
import Mobile from "../src/frontendmentor/FaqAccordionCard/Mobile"
import Desktop from "../src/frontendmentor/FaqAccordionCard/Desktop"

export default {
  title: "frontendmentor/FaqAccordionCard",
}

export const Default = (args) => <FaqAccordionCard {...args} />
Default.args = {}

export const WithMobile = (args) => <Mobile {...args} />
WithMobile.args = {}

export const WithDesktop = (args) => <Desktop {...args} />
WithDesktop.args = {}
