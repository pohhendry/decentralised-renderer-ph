import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TemplateC } from "./TemplateC";
import oaDocumentV3 from "../../../documents/samples/oa-v3-raw.json";

export default {
  title: "SAMPLE_V3/TemplateC",
  component: TemplateC,
} as ComponentMeta<typeof TemplateC>;

const Template: ComponentStory<typeof TemplateC> = (args: any) => (
  <TemplateC {...args} />
);

export const Default = Template.bind({});

Default.args = {
  document: oaDocumentV3 as any,
};
