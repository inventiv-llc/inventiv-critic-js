# Inventiv Critic JavaScript Library

Use this library to build web-based integrations with [Inventiv Critic](https://inventiv.io/critic/) .

## Requirements

Use of this library requires jQuery to make calls to the Critic REST API.

## Installation

Copy `critic.js` into your project and reference it using a `<script>` tag.

**OR**

Install using Bower:
    
    bower install git+https://github.com/inventiv-llc/inventiv-critic-js.git

**OR**

Install using NPM:

    npm install git+https://github.com/inventiv-llc/inventiv-critic-js.git

## Usage

Review `report.html` for a working example form that submits customer feedback reports to Critic.

0. Create an HTML form that includes the Report fields you care about.
0. Include your Product's `product_access_token` as the first argument in your `Critic.Report.create()` function 
call. This token can be found by viewing your Product's details in the Critic web portal.
0. Create a Report by adding the following to your web page:

```
    Critic.Report.create(product_access_token, description, metadata, attachments);
```
