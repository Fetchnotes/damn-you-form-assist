module("damn_you_form_assist");

function cleanUp () {
	$('.clean-me-up').remove();
}

asyncTest("Attempt to hide form assist bar", 1, function () {
	askQuestion("Tap on the input", {
		"Nothing happened": function () {
			ok(false, "User claims failure: nothing happened");
			start();
			cleanUp();
		}
	});
	var form = $('<form class="clean-me-up"><input type="text" placeholder="tap me"/></form>').insertBefore('#qunit');

	$('input', form).on('focus', function () {
		forge.internal.call("damn_you_form_assist.killBar", { }, function () {
			askQuestion("Is the form assist bar visible?", {
				Yes: function () {
					ok(false, "User claims failure: form assist visible");
					start();
					cleanUp();
				},
				No: function () {
					ok(true, "User claims success");
					start();
					cleanUp();
				}
			});
		}, function (e) {
			ok(false, "User claims failure: "+JSON.stringify(e));
			start();
			cleanUp();
		});
	});
});