sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("UI5MockServerExample.MockServer.controller.App", {
		onPressAction: function () {
			var oList = this.getView().byId("list");
			oList.bindItems({
				path: "/Meetups",
				parameters: {
					custom: {
						first: "3"
					}
				},
				template: new sap.m.ObjectListItem({
					title: "{Title}",
					number: {
						path: 'EventDate',
						type: 'sap.ui.model.type.DateTime',
						formatOptions: {
							style: 'medium'
						}
					},
					attributes: [
						new sap.m.ObjectAttribute({
							text: "{Description}"
						}) ]
				})
			});
		}
	});
});