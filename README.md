# Inventiv Critic JavaScript Library

Use this library to build web-based integrations with [Inventiv Critic](https://inventiv.io/critic/) .

## Requirements

Use of this library requires jQuery to make calls to the Critic REST API.

## Installation

Copy `critic.js` into your project and reference it using a `<script>` tag.

## Usage

Review `report.html` for a working example form that submits customer feedback reports to Critic.

0. Create a web page with a form that includes the Report fields you care about.
0. Include your Product's' `product_access_token` as the first argument in your `Critic.Report.create()` function 
call. This token can be found by viewing your Product in the Critic web portal.
0. Create a Report by adding the following to your web page:

```
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.js"></script>    
    <script type="text/javascript" src="critic.js"></script>
    <script type="text/javascript">
        function createReport() {
            product_access_token = 'YOUR_PRODUCT_ACCESS_TOKEN';
            description = $('#report_description').val();
            metadata = $('#report_metadata').val();
            attachments = document.getElementById('report_attachments').files;
    
            Critic.Report.create(product_access_token, description, metadata, attachments);
            return false;
        }
    </script>
```
