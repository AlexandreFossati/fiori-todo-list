/*global QUnit*/

sap.ui.define([
	"fossati/todos/controller/Todos.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Todos Controller");

	QUnit.test("I should test the Todos controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
