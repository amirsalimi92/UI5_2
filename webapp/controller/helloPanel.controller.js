sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
  function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("myapp.controller.helloPanel", {
      onShowHelloButton: function () {
        // Read message from i18n
        // Get and define the i18n model
        const oBundle = this.getView().getModel("i18n").getResourceBundle();

        // Get the value of json model
        const oText = this.getView().getModel().getProperty("/message/name");

        // Put the json's value inside the i18n Hello{0}
        // 0 points here to the index of array's numeber
        const msg = oBundle.getText("ConAppMessageToast", [oText, "!"]);

        MessageToast.show(msg);
      },

      onShowHelloDialog: function () {
        this.getOwnerComponent().openPopup();
      },
    });
  }
);

// Inside the onShowHelloDialog:
//   // Get view
//   const oView = this.getView();

//   // We check is there the Dialog in the page now?
//   // If not then create it
//   // If there isFinite, then show it
//   if (!this.byId("helloDialogId")) {
//     Fragment.load({
//       id: oView.getId(),
//       name: "myapp.view.helloDialog",
//       controller: this,
//     }).then(function (oDialog) {
//       oView.addDependent(oDialog);
//       oDialog.open();
//     });
//   } else {
//     this.byId("helloDialogId").open();
//   }

// onCloseDialog: function () {
//   this.byId("helloDialogId").close();
// },
