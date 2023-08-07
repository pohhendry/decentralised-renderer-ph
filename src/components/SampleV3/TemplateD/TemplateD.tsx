import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";

export const TemplateD: React.FunctionComponent<TemplateProps<any>> = ({
  document,
}) => {
  const issuer = document.issuer.name;

  return (
    <div style={{ padding: "24px" }}>
      <h1>{issuer}</h1>
    </div>
  );
};
