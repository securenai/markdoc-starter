---
title: Get started with Markdoc
description: How to get started with Markdoc
---

# Full Next.js example

(This is an example of the first hierarchy tier).

{% callout %}
This is a full-featured boilerplate for a creating a documentation website using Markdoc and Next.js.
{% /callout %}

## Setup

First, clone this repo and install the dependencies required: hello

{% highlightCode language="bash" %}

```
npm install
# or
yarn install
```

{% /highlightCode %}

Then, run the development server:

{% highlightCode language="bash" %}

```
npm run dev
# or
yarn dev
```

{% /highlightCode %}

{% highlightCode language="javascript" %}

```
function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

console.log(makeid(5));
```

{% /highlightCode %}

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `index.md`. The page auto-updates as you edit the file.

## Deploy

The quickest way to deploy your own version of this boilerplate is by deploying it with [Vercel](https://vercel.com) or [Netlify](https://www.netlify.com/) by clicking one of the buttons below.

### Deploy with Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/markdoc/next.js-starter)

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/markdoc/next.js-starter)
