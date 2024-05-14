sap.ui.define(
  ["sap/ui/base/ManagedObject", "sap/ui/core/Fragment"],
  function (ManagedObject, Fragment) {
    "use strict";

    return ManagedObject.extend("myapp.scripts.helloPopup", {
      constructor: function (oView) {
        this._oView = oView;
      },

      exit: function () {
        delete this._oView;
      },

      open: function () {
        const oView = this._oView;

        if (!oView.byId("helloDialogId")) {
          console.log(oView);
          // Think to Change it later VAR!
          // This variable uses in the next function

          var oFragmentController = {
            onClosePopup: function () {
              oView.byId("helloDialogId").close();
            },
          };

          // Load asynchrous XML fragment
          Fragment.load({
            id: oView.getId(),
            name: "myapp.view.helloDialog",
            controller: oFragmentController,
          }).then(function (oDialog) {
            // Connect Dialog to the root view of the component (models, lifecycle)
            oView.addDependent(oDialog);
            oDialog.open();
          });
        } else {
          oView.byId("helloDialogId").open();
        }
      },
    });
  }
);
