sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
    "./scripts/helloPopup",
  ],
  function (UIComponent, JSONModel, ResourceModel, helloPopup) {
    "use strict";

    return UIComponent.extend("myapp.component", {
      metadata: {
        manifest: "json",
      },

      init: function () {
        // call the init functions
        UIComponent.prototype.init.apply(this, arguments);

        // Set the Json data model for this view
        // Set the models
        // Create the json here
        const oJson = {
          message: {
            name: "Write something...",
          },
        };

        // Create the Model here from json
        const oModel = new JSONModel(oJson);

        // Set the model and define it to the View
        this.setModel(oModel);

        // Set Popup hello Dialog
        this._helloPopup = new helloPopup(this.getRootControl());
      },

      exit: function () {
        this._helloPopup.destroy();
        delete this._helloPopup;
      },

      openPopup: function () {
        this._helloPopup.open();
      },
    });
  }
);
