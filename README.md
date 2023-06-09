# React Demo (2023) - Yarn 3 (PnP) + ViteJS + TypeScript + TailwindCSS

This repo is an initial setup of a repo that uses that latest and greatest of the React client-side ecosystem to build out application using the following technologies/frameworks/libraries:

- [React 18+](https://react.dev/)
- [ViteJS](https://vitejs.dev/) (Leverages the following technologies under-the-hood)
  - [ESBuild](https://esbuild.github.io/)
  - [RollupJS](https://rollupjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Yarn 3 (PnP)](https://yarnpkg.com/features/pnp)

All these solutions offer beenfits to fast reliable and easy application building using new and modern design practices, technologies, and paradigms for new and seasoned developers.

<br />

**[Additional Considerations]**

Though it was not added to this basic demo to keep things less complex because this is not used as a demo for accessibility, I have left out a technology that I REALLY want to mention.

- [Radix UI](https://www.radix-ui.com/)
  - RedixUI are primative React components for building high quality and accessibility focused components for a React application. This library contains baked-in screen reader support as well as basic general keyboard controls.
  - I recommend checking out their explanation about accessibility [here](https://www.radix-ui.com/docs/primitives/overview/accessibility)

---

## System Requirements

1. [NVM (Node Version Manager)](https://github.com/nvm-sh/nvm)
   1. Install NodeJS: `nvm install --lts`
   2. Set LTS as default: `nvm use --lts --default`
2. Yarn: `npm i -g yarn`

---

## Get Started

This is the quick getting started for those who have NodeJS + Yarn installed and want to get up and running quickly.

1. Clone the repo: `git clone https://github.com/jgttech/react-demo-2023.git`
2. Use Yarn to install all the packages: `yarn`
3. Run the dev server: `yarn dev`

---

## Build & Preview

This builds the deployment bundle(s) and allows you to preview the build.

1. Build the production bundle: `yarn build`
2. Preview the production bundle: `yarn preview`

## Notice: Just So You Know

This repo is lacking some things that were not added because of the constraint of time for the demo.

- Jest unit testing
- Cypress integration testing.
