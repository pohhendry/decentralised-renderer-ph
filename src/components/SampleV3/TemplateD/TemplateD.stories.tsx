import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TemplateD } from "./TemplateD";
import oaDocumentV3 from "../../../documents/samples/oa-v3-raw.json";

export default {
  title: "SAMPLE_V3/TemplateD",
  component: TemplateD,
} as ComponentMeta<typeof TemplateD>;

const Template: ComponentStory<typeof TemplateD> = (args: any) => (
  <TemplateD {...args} />
);

export const Default = Template.bind({});

Default.args = {
  document: oaDocumentV3 as any,
};
