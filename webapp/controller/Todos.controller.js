sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, JSONModel) {
		"use strict";

		return Controller.extend("fossati.todos.controller.Todos", {
			
			onInit: function () {
				const todos = [
					{ activity: "Buy oranges", 		isOnEditMode: false },					
					{ activity: "Build a new PC",  	isOnEditMode: false },					
					{ activity: "Do the dishes",   	isOnEditMode: false }
				]

				this.getView().setModel(new JSONModel(todos), "todos")
				this.getView().setModel(new JSONModel({}))
			},

			addActivity: function() {
				const newActivity = this.getView().getModel().getProperty("/newActivity")
				if(newActivity) {
					const todos = this.getView().getModel("todos").getData()
					todos.push({activity: newActivity, isOnEditMode: false})
					this.getView().getModel("todos").refresh()
					this.getView().getModel().setProperty("/newActivity", "")
				}
			},

			edit: function(event) {
				event.getSource().getBindingContext("todos").getObject().isOnEditMode = true
				this.getView().getModel("todos").refresh()
			},

			confirmChange: function(event) {
				event.getSource().getBindingContext("todos").getObject().isOnEditMode = false
				this.getView().getModel("todos").refresh()
			},

			delete: function(event) {
				const todos = this.getView().getModel("todos").getData()
				const path = event.getSource().getBindingContext("todos").getPath()
				const index = path.split("/")[1]
				todos.splice(index, 1)
				this.getView().setModel(new JSONModel(todos), "todos")
			}

		});
	});
