sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "../model/formatter",
  ],
  function (Controller, JSONModel, Filter, FilterOperator, formatter) {
    "use strict";

    return Controller.extend("myapp.controller.invoiceList", {
      formatter: formatter,
      onInit: function () {
        const oViewModel = new JSONModel({
          currency: "EUR",
        });
        this.getView().setModel(oViewModel, "view");
      },

      onFilterInvoice: function (oEvent) {
        // Build Filter array
        let aFilter = [];
        let sQuery = oEvent.getParameter("query");
        if (sQuery) {
          aFilter.push(
            new Filter("ProductName", FilterOperator.Contains, sQuery)
          );
        }

        let oList = this.byId("invoiceListId");
        let oBinding = oList.getBinding("items");
        oBinding.filter(aFilter);
      },
    });
  }
);
