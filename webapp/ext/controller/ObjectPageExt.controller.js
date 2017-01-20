sap.ui.define(['jquery.sap.global', 'sap/m/Button', 'sap/m/TextArea', 'sap/m/Dialog', 'sap/m/List', 'sap/m/StandardListItem',
		'sap/ui/core/mvc/Controller',
		'sap/ui/model/json/JSONModel'
	],
	function(jQuery, Button, Dialog, List, TextArea, StandardListItem, Controller, JSONModel) {
		"use strict";
		sap.ui.controller("CSOSprintII.ext.controller.ObjectPageExt", {

			sendMessage: function(oEvent) {
					alert("Sending Message");
					var oTextArea = new TextArea({
						editable: false,
						value: "",
						wrapping: sap.ui.core.Wrapping.Soft
					}).addStyleClass("text_area");
					alert("1");
					var dialog = new Dialog({
						title: 'Write Text here',
						beginButton: new Button({
							text: 'Close',
							press: function() {
								dialog.close();
							}
						}),
						afterClose: function() {
							dialog.destroy();
						}
					});

					//	dialog.addContent(oTextArea);
					dialog.open();

				} //,
				// onClickActionDemandsSections1: function(oEvent) {

			// 	//        var oTextArea = new sap.ui.commons.TextArea({
			// 	//  editable: false,
			// 	// 	value: "",
			// 	//  wrapping: sap.ui.core.Wrapping.Soft
			// 	// }).addStyleClass("text_area");

			// 	var oModel = this.getView().getModel();
			// 	// List list = new List({
			// 	// 			items: {
			// 	// 				path: 'test>/results',
			// 	// 				template: new StandardListItem({
			// 	// 					title: "{DemandId}",
			// 	// 					info: "{FiscalQuarter}"+",{OrgId}"
			// 	// 				})
			// 	// 			}
			// 	// 		});
			// 	var w = new sap.ui.model.json.JSONModel();
			// 	var that = this;

			// 	oModel.read("/Demands", {
			// 		context: null,
			// 		urlParameters: null,
			// 		async: true,
			// 		filters: [],
			// 		sorters: [],
			// 		success: function(oData) {
			// 			w.setData(oData);
			// 			that.getView().setModel(w, "test");
			// 			var dialog = new Dialog({
			// 				title: 'Supplier Details',
			// 				contentWidth: "550px",
			// 				contentHeight: "300px",
			// 				draggable: true,
			// 				content: new List({
			// 					items: {
			// 						path: 'test>/results',
			// 						template: new StandardListItem({
			// 							title: "{DemandId}",
			// 							info: "{FiscalQuarter}" + ",{OrgId}"
			// 						})
			// 					}
			// 				}),
			// 				beginButton: new Button({
			// 					text: 'Close',
			// 					press: function() {

			// 						dialog.close();
			// 					}
			// 				}),
			// 				afterClose: function() {
			// 					dialog.destroy();
			// 				}
			// 			});
			// 			//to get access to the global model
			// 			// dialog.addContent(oTextArea);
			// 			that.getView().addDependent(dialog);
			// 			dialog.open();
			// 		},
			// 		error: function() {
			// 			// controller.getView().setBusy(false);
			// 		}
			// 	});
			// }
			,
			onClickActionDemandsHeader1: function(oEvent) {
				alert("came");
				var oModel = this.getView().getModel();
			}

		});
	});