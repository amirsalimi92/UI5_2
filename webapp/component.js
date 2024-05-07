console.log("hey from component");

sap.ui.define(
  ["sap/ui/core/UIComponent", "sap/ui/model/json/JSONModel"],
  function (UIComponent, JSONModel) {
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

        console.log("hey from inside");

        // Create the Model here from json
        const oModel = new JSONModel(oJson);

        // Set the model and define it to the View
        this.setModel(oModel);
      },
    });
  }
);
