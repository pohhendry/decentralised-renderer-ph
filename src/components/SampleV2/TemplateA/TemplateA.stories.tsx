import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TemplateA } from "./TemplateA";
import oaDocumentV2 from "../../../documents/samples/oa-v2-raw.json";

export default {
  title: "SAMPLE_V2/TemplateA",
  component: TemplateA,
} as ComponentMeta<typeof TemplateA>;

const Template: ComponentStory<typeof TemplateA> = (args: any) => (
  <TemplateA {...args} />
);

export const Default = Template.bind({});

Default.args = {
  document: oaDocumentV2 as any,
};
