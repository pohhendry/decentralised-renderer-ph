import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";

export const TemplateB: React.FunctionComponent<TemplateProps<any>> = ({
  document,
}) => {
  const issuer = document.issuers[0].name;

  return (
    <div style={{ padding: "24px" }}>
      <h1>{issuer}</h1>
    </div>
  );
};
