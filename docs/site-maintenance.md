# Site Maintenance Guide

This page is a personal guide for maintaining and updating this Docusaurus website over time.

---

## 1. Overall workflow

Whenever I want to update the site, I usually follow this process:

1. edit or add content in `docs/`
2. update the sidebar if needed
3. test locally
4. commit changes to GitHub
5. deploy to GitHub Pages

---

## 2. Project structure

The most important folders are:

```bash
docs/                 # markdown notes and articles
src/pages/            # custom pages such as homepage
src/components/       # reusable React components
static/               # images and static files
sidebars.ts           # sidebar organization
docusaurus.config.ts  # site configuration
```
--- 

## 3. How to add a new note

To add a new note:
	1.	create a new markdown file under docs/
	2.	give it a clear file name
	3.	add a title with #
	4.	register it in sidebars.ts if I want it to appear in the sidebar

Example:

```bash
docs/machine-learning/logistic_regression.md
```
Example content:

```markdown
# Logistic Regression

## Intuition
A linear model for binary classification.

## When to use
- binary outcome
- interpretable baseline
- probabilistic output
```

---

## 4. How to update the sidebar

The sidebar is controlled by `sidebars.ts`.

Example:

```ts
{
  type: 'category',
  label: 'Machine Learning',
  items: [
    'machine-learning/linear_regression',
    'machine-learning/logistic_regression',
    'machine-learning/svm',
  ],
}
```
If I add a new file, I should make sure the path matches the markdown file path under docs/.

---

## 5. How to run the website locally


Start the local server:

```bash
npm start
```
Then open:

```bash
http://localhost:3000
```

This lets me preview changes before deployment.

---

## 6. How to build the site

Before deploying, I should check whether the site builds correctly:


```bash
npm run build
```

If the build succeeds, it means the site is ready for deployment.

## 7. How to deploy

Deploy with:
```bash
GIT_USER=Jessiezhouuuu npm run deploy
```
If GitHub asks for credentials, use a Personal Access Token instead of the GitHub password.


After deployment, the website should be available at:

```text
https://Jessiezhouuuu.github.io/ds-knowlege-base/
```


