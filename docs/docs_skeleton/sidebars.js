/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docs: [
    {
      type: "category",
      label: "Get started",
      collapsed: false,
      collapsible: false,
      items: [{ type: "autogenerated", dirName: "get_started" }],
      link: {
        type: 'generated-index',
        description: 'Get started with LangChain',
      slug: "get_started",
      },
    },
    {
      type: "category",
      label: "Modules",
      collapsed: false,
      collapsible: false,
      items: [{ type: "autogenerated", dirName: "modules" } ],
      link: {
        type: 'doc',
        id: "modules/index"
      },
    },
    {
      type: "category",
      label: "Guides",
      collapsed: true,
      items: [{ type: "autogenerated", dirName: "guides" }],
      link: {
        type: 'generated-index',
        description: 'Design guides for key parts of the development process',
      slug: "guides",
      },
    },
    {
      type: "category",
      label: "Ecosystem",
      collapsed: true,
      items: [{ type: "autogenerated", dirName: "ecosystem" }],
      link: {
        type: 'generated-index',
      slug: "ecosystem",
      },
    },
    {
      type: "category",
      label: "Additional resources",
      collapsed: true,
      items: [{ type: "autogenerated", dirName: "additional_resources" }, { type: "link", label: "Gallery", href: "https://github.com/kyrolabs/awesome-langchain" }],
      link: {
        type: 'generated-index',
      slug: "additional_resources",
      },
    },
    'community'
  ],
  integrations: [
    {
      type: "category",
      label: "Integrations",
      collapsible: false,
      items: [{ type: "autogenerated", dirName: "integrations" }],
      link: {
        type: 'generated-index',
      slug: "integrations",
      },
    },
  ],
  use_cases: [
    {
      type: "category",
      label: "Use cases",
      collapsible: false,
      items: [{ type: "autogenerated", dirName: "use_cases" }],
      link: {
        type: 'generated-index',
      slug: "use_cases",
      },
    },
  ],
};
