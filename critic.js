var Critic  = {
    host: 'https://critic.inventiv.io',
    Report: {},
    successFunc: function(xhr){
        alert("Thank you! Your request has been processed.");
    },
    failureFunc: function(xhr){
        alert("Something went wrong. Please check your responses and try again.");
    }
};

/**
 * Creates a Report in Critic using the provided report information.
 * @param product_access_token a Critic Product's access token.
 * @param description text description of feedback from the submitting user.
 * @param metadata any valid JSON object containing data you wish to include with the Report.
 * @param attachments file attachments such as logs or screenshots.
 */
Critic.Report.create = function(product_access_token, description, metadata, attachments) {
    this.product_access_token = product_access_token;
    this.description = description;
    this.metadata = metadata;
    this.attachments = attachments;

    if(this.product_access_token == null || this.product_access_token === 'YOUR_PRODUCT_ACCESS_TOKEN'){
        alert("You need to specify your own Product access token! You're currently using 'YOUR_PRODUCT_ACCESS_TOKEN' which is invalid.");
        Critic.failureFunc();
        return false;
    }

    this.formData = new FormData();
    this.formData.append('report[product_access_token]', this.product_access_token);
    this.formData.append('report[description]', this.description);
    this.formData.append('report[metadata]', this.metadata);
    if(attachments != null){
        for(var i=0; i<attachments.length; i++){
            this.formData.append('report[attachments][]', this.attachments[i]);
        }
    }

    $.ajax({
        contentType: false,
        data: this.formData,
        dataType: 'json',
        processData: false,
        type: 'POST',
        url: Critic.host + '/api/v1/reports',
        complete: function (xhr) {
            if (xhr.readyState == 4) {
                if (xhr.status == 201) {
                    Critic.successFunc(xhr);
                }
                else {
                    console.log("Something went wrong. Please check your responses and try again. Status code: " + xhr.status);
                    Critic.failureFunc(xhr);
                }
            } else {
                console.log("Something went wrong. Please check your responses and try again.");
                Critic.failureFunc(xhr);
            }
        }
    });

    return this;
};

/**
 * Creates a Report in Critic using data from an HTML form. Field names must be named as follows:
 *     <ul>
 *         <li><b>report[product_access_token]</b> a Critic Product's access token.</li>
 *         <li><b>report[description]</b> a Critic Product's access token.</li>
 *         <li><b>report[metadata]</b> a Critic Product's access token.</li>
 *         <li><b>report[attachments][]</b> file attachments such as logs or screenshots.</li>
 *     </ul>
 * @param form_id the HTML form element's ID.
 */
Critic.Report.createFromForm = function(form_id) {
    this.formData = new FormData($('#' + form_id)[0]);
    $.ajax({
        contentType: false,
        data: this.formData,
        dataType: 'json',
        processData: false,
        type: 'POST',
        url: Critic.host + '/api/v1/reports',
        complete: function (xhr) {
            if (xhr.readyState == 4) {
                if (xhr.status == 201) {
                    Critic.successFunc(xhr);
                }
                else {
                    console.log("Something went wrong. Please check your responses and try again. Status code: " + xhr.status);
                    Critic.failureFunc(xhr);
                }
            } else {
                console.log("Something went wrong. Please check your responses and try again.");
                Critic.failureFunc(xhr);
            }
        }
    });
};
