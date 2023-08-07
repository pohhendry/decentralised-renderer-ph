import {
  FramedDocumentRenderer,
  TemplateRegistry,
} from "@govtechsg/decentralized-renderer-react-components";
import { TemplateA } from "../SampleV2/TemplateA";
import { TemplateB } from "../SampleV2/TemplateB";
import { TemplateC } from "../SampleV3/TemplateC";
import { TemplateD } from "../SampleV3/TemplateD";

export const templateRegistry: TemplateRegistry<any> = {
  SAMPLE_V2: [
    {
      id: "view_a",
      label: "View A",
      template: TemplateA,
    },
    {
      id: "view_b",
      label: "View B",
      template: TemplateB,
    },
  ],
  SAMPLE_V3: [
    {
      id: "view_c",
      label: "View C",
      template: TemplateC,
    },
    {
      id: "view_d",
      label: "View D",
      template: TemplateD,
    },
  ],
};

export const DecentralizedRenderer = () => (
  <FramedDocumentRenderer templateRegistry={templateRegistry} />
);
