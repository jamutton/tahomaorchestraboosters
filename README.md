[![Netlify Status](https://api.netlify.com/api/v1/badges/624a348d-31b3-4f33-9a4b-bc45a51656a6/deploy-status)](https://app.netlify.com/projects/enchanting-tanuki-85b671/deploys)

# Tahoma Orchestra Boosters Website

## What is it?

A simple, initial build of a fast, pre-generated HTML website for the Tahoma Orchestra Boosters using the [Eleventy](https://www.11ty.dev/) static site generator. With [Decap CMS](https://www.decapcms.org/) (formerly Netlify CMS) baked-in.

Based on the [Eleventy Base Blog](https://github.com/11ty/eleventy-base-blog) repo (see there for additional info on Eleventy usage).

## Features

* Uses Eleventy 3
* Decap CMS with editor previews
* Scores 100/100/100/100 in Lighthouse performance tests 🔥
* Automatic navigation menus with [Eleventy Navigation](https://www.11ty.dev/docs/plugins/navigation/)
* CSS 2kb minified, inlined for fastest page render
* Pre-builds and minifies HTML too
* Uses Markdown files for content
* Uses Nunjucks templates for layout
* Continuous Deployment workflow via Netlify

### TODO: Set Up Identity Email Templates

In order for Netlify Identity service emails (Signup, Reset Password etc) to function correctly with Decap CMS, you will need to tell Netlify where your email templates are located.

Inside this repo under `/admin/email-templates/` are four Netlify Identity email templates. Inside your Netlify site settings, you will need to navigate to: "Site Settings > Identity" and look there for the four email template configuration boxes: Invitation template, Confirmation template, Recovery template, and Email change template. Inside each, edit the "Path to template" field to match the root-relative path to each template. For example:

`/admin/email-templates/invitation.html`

Now you're all set; you can invite new CMS users and begin editing content!

## Local development

### 1. Clone this repository:

```
git clone https://github.com/jamutton/tahomaorchestraboosters.git tahomaorchestraboosters
```


### 2. Navigate to the directory

```
cd tahomaorchestraboosters
```

Specifically have a look at `.eleventy.js` to see if you want to configure any Eleventy options differently.

### 3. Install dependencies locally

```
npm install @11ty/eleventy
```

### 4. Edit _data/metadata.json

This file contains your site title and author details, and can be used to store any other commonly used site data.

### 5. Run Eleventy (builds the site)

```
npx @11ty/eleventy
```

Or build automatically when a template changes:
```
npx @11ty/eleventy --watch
```

Or build and host locally for local development:
```
npx @11ty/eleventy --serve
```

Or in debug mode:
```
DEBUG=* npx @11ty/eleventy
```

## Bug reports, feature requests, etc

This is an ongoing and volunteer-led project with the Tahoma Music program.  We're happy to consider contributions and suggestions! Feel free to submit a PR.

If you need any help with setting up Decap CMS, you can reach out to the Netlify team in the [Decap CMS Gitter](https://gitter.im/netlify/netlifycms).
