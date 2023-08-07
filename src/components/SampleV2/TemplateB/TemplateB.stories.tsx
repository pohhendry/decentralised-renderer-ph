import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TemplateB } from "./TemplateB";
import oaDocumentV2 from "../../../documents/samples/oa-v2-raw.json";

export default {
  title: "SAMPLE_V2/TemplateB",
  component: TemplateB,
} as ComponentMeta<typeof TemplateB>;

const Template: ComponentStory<typeof TemplateB> = (args: any) => (
  <TemplateB {...args} />
);

export const Default = Template.bind({});

Default.args = {
  document: oaDocumentV2,
};
