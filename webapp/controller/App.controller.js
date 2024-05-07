console.log("hey from conreoller");

sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
  function (Controller, MessageToast) {
    "use strict";
    return Controller.extend("myapp.controller.App", {
      onShowHelloButton: function () {
        // Read message from i18n
        // Get and define the i18n model
        const oBundle = this.getView().getModel("i18n").getResourceBundle();

        // Get the value of json model
        const oModel = this.getView().getModel().getProperty("/message/name");

        // Put the json's value inside the i18n Hello{0}
        // 0 points here to the index of array's numeber
        const msg = oBundle.getText("ConAppMessageToast", [oModel, "!"]);

        MessageToast.show(msg);
      },
    });
  }
);
