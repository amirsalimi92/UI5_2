sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/formatter",
  ],
  function (Controller, JSONModel, formatter) {
    "use strict";

    return Controller.extend("myapp.controller.invoiceList", {
      formatter: formatter,
      onInit: function () {
        const oViewModel = new JSONModel({
          currency: "EUR",
        });
        this.getView().setModel(oViewModel, "view");

        console.log("invoices");
      },
    });
  }
);
