# TradeTrust Decentralized Renderer (React Template)

This template serves as a quick way to start building your own decentralized renderer using OpenAttestation stack.

## How and what?

This repository boilerplate code is spinned up from [Create Vite](https://github.com/vitejs/vite/tree/main/packages/create-vite). As of now, [Create React App](https://github.com/facebook/create-react-app) is no longer featured in React documentation. Can observe [future roadmap](https://github.com/reactjs/react.dev/pull/5487#issuecomment-1409720741) on CRA meanwhile.

The decentralized renderer code here is based off OpenAttestation's [decentralized-renderer-react-template](https://github.com/Open-Attestation/decentralized-renderer-react-template), but with **some changes** as mentioned below.

## Notable changes

To stay as simple and less opinionated as possible, these are omitted:

- Styling libraries. (Recommended to use [Tailwind](https://tailwindcss.com/docs/installation), otherwise can use module.css directly)
- Testing frameworks.
- [Core components](https://github.com/Open-Attestation/decentralized-renderer-react-template/tree/master/examples/core).
- CI pipelines.
- Avoid CRA ejected webpack config, leave it to Vite.

> You are expected to setup your own tests, styling according to your needs.

## Main dependancies

- `@govtechsg/decentralized-renderer-react-components`
- `@govtechsg/open-attestation` (If you need types, else can be omitted)
- `react`
- `react-dom`

---

### Prerequisite

- Node (optionally, use [nvm](https://github.com/nvm-sh/nvm) to manage node version)
  - Node version 14 onwards.

### Development

```sh
npm i
npm run start
```

Head off to `http://localhost:6006/` to see storybook, while `http://127.0.0.1:8080/` to see your actual document rendered in a dummy application.

### Creating new templates

1. Create your new sample documents json in `src/documents/<YOUR_SAMPLE>/<YOUR_DOCUMENT>.json`. Be sure they conform to either OpenAttestation [v2](https://schema.openattestation.com/2.0/schema.json) or [v3](https://schema.openattestation.com/3.0/schema.json) schema.

2. Create a new "[Layout](https://github.com/Open-Attestation/adr/blob/master/decentralised_rendering.md#definitions)" within `src/components/<YOUR_LAYOUT>`. Ensure your "Layout" name is the same as `template.name` defined in your sample documents json.

3. Create your "Views" (templates) within `src/components/<YOUR_LAYOUT>/<YOUR_TEMPLATES>`.

4. Develop whatever you need using storybook, passing in your sample documents json.

5. When done, remember to register the new template to `templateRegistry` in `src/components/DecentralizedRenderer`.

> You can follow the template samples provided in `src/components/SampleV2` and `src/components/SampleV3`.

### Build and host

```sh
npm run build
```

Host your `dist` folder in your favourite hosting provider. One example could be [netlify](https://www.netlify.com/).
