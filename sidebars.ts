import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Machine Learning',
      items: [
        'machine-learning/linear-model',
        'machine-learning/clustering',
      ],
    },
    {
      type: 'category',
      label: 'A/B Testing',
      items: [
        'ab-test/ab-test-basics',
      ],
    },
  ],
};



export default sidebars;
