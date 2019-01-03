---
title:      "SharePoint & Knockout"
subtitle:   "Part 1. Here I'll try to describe how SharePoint & Knockout were integrated together"
date:       2015-02-26
layout:     post
category: 	"SharePoint"
tags:		sharepoint 2013 knockout
header-img: "img/post-bg-01.jpg"
---

Sharepoint 2013 provides new mechanism for field customization with JSLink. Here are some steps how you can integrate Knockout with Sharepoint for field customization.

{% highlight javascript lineos %}

function koBaseCustomTemplate(renderCtx, options) {
	options = options || {};

	var formCtx = SPClientTemplates.Utility.GetFormContextForCurrentField(renderCtx);

	var controlId = 'id' + formCtx.fieldName + 'Control';

	options.formContext = formCtx;
	options.value = parseValue(formCtx.fieldValue);

	var viewModel = new KnockoutViewModel(options);

	formCtx.registerInitCallback(fieldInternalName, function () {
		ko.applyBindings(viewModel, document.getElementById(controlId));
	});

	// Get value when submit pressed
	formCtx.registerGetValueCallback(fieldInternalName, function () {
		return stringifyValue(viewModel.serialize());
	});

	formCtx.registerValidationErrorCallback(fieldInternalName, function (errorResult) {
		SPFormControl_AppendValidationErrorMessage(controlId, errorResult);
	});

	formCtx.registerClientValidator(fieldInternalName, getFieldValidators);

	return '<div id="' + controlId + '" data-bind="async-template: \'' + getTemplateUrl(fieldInternalName) + '\' "></div>';
}

{% endhighlight %}