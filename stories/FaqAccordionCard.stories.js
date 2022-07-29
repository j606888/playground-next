import FaqAccordionCard from "../src/frontendmentor/FaqAccordionCard"
import Desktop from "../src/frontendmentor/FaqAccordionCard/Desktop"

export default {
  title: "frontendmentor/FaqAccordionCard",
}

export const Default = (args) => <FaqAccordionCard {...args} />
Default.args = {}

export const WithDesktop = (args) => <Desktop {...args} />
WithDesktop.args = {}
