// Expose the native API to javascript
forge.damn_you_form_assist = {
    showAlert: function (text, success, error) {
        forge.internal.call('damn_you_form_assist.showAlert', {text: text}, success, error);
    }
};

// Register for our native event
forge.internal.addEventListener("damn_you_form_assist.resume", function () {
	alert("Weclome back!");
});
