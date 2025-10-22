
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/odata/v2/ODataModel",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/m/MessageToast"
], (Controller, ODataModel, JSONModel, Filter, FilterOperator, MessageToast) => {
    "use strict";
    var that;
    return Controller.extend("sacforecastorder.sacforecastorder.controller.View1", {
        _bCharValProgrammatic: false,
        _bLoadingCharacteristics: false,
        _bCharSelectionInProgress: false,
        _bCharValInitialLoad: true,
        _bUniqueIDSelectionInProgress: false,
        _bInitialLoadInProgress: false,
        async onInit() {

            that = this;
            that.SelectedAll = false;
            that.oModel = that.getOwnerComponent().getModel("oModel");
            that.data =[
  // 2.0 kWh Hybrid Battery
  {
    "LOCATION_ID": "1600",
    "PRODUCT_ID": "VCP_1600",
    "MODEL_VERSION": "",
    "SCENARIO": "_PLAN",
    "TYPE": "PI",
    "UNIQUE_ID": 3101,
    "VERSION": "__BASELINE",
    "WEEK_DATE": "2025-10-16",
    "TELESCOPIC_WEEK": "CW42 2025",
    "Year Quarter": "2025-Q4",
    "COMPONENT": "BAT-HYB-1.5",
    "CALENDAR_WEEK": "CW42 2025",
    "ASSEMBLY_DESC": "2.0 kWh Hybrid Battery",
    "CIR_QTY": 120,
    "ACTUAL_QTY": 8000000000,
    "CONFIG_PROD": "VCP_1600",
    "START_DATE": "2025-10-16",
    "END_DATE": "2025-12-31"
  },
  {
    "LOCATION_ID": "1600",
    "PRODUCT_ID": "VCP_1600",
    "MODEL_VERSION": "",
    "SCENARIO": "_PLAN",
    "TYPE": "PI",
    "UNIQUE_ID": 3102,
    "VERSION": "__BASELINE",
    "WEEK_DATE": "2025-10-23",
    "TELESCOPIC_WEEK": "CW43 2025",
    "Year Quarter": "2025-Q4",
    "COMPONENT": "BAT-HYB-1.5",
    "CALENDAR_WEEK": "CW43 2025",
    "ASSEMBLY_DESC": "2.0 kWh Hybrid Battery",
    "CIR_QTY": 140,
    "ACTUAL_QTY": 3000000000,
    "CONFIG_PROD": "VCP_1600",
    "START_DATE": "2025-10-16",
    "END_DATE": "2025-12-31"
  },
  {
    "LOCATION_ID": "1600",
    "PRODUCT_ID": "VCP_1600",
    "MODEL_VERSION": "",
    "SCENARIO": "_PLAN",
    "TYPE": "PI",
    "UNIQUE_ID": 3103,
    "VERSION": "__BASELINE",
    "WEEK_DATE": "2025-10-30",
    "TELESCOPIC_WEEK": "CW44 2025",
    "Year Quarter": "2025-Q4",
    "COMPONENT": "BAT-HYB-1.5",
    "CALENDAR_WEEK": "CW44 2025",
    "ASSEMBLY_DESC": "2.0 kWh Hybrid Battery",
    "CIR_QTY": 160,
    "ACTUAL_QTY": 4000000000,
    "CONFIG_PROD": "VCP_1600",
    "START_DATE": "2025-10-16",
    "END_DATE": "2025-12-31"
  },
  {
    "LOCATION_ID": "1600",
    "PRODUCT_ID": "VCP_1600",
    "MODEL_VERSION": "",
    "SCENARIO": "_PLAN",
    "TYPE": "PI",
    "UNIQUE_ID": 3104,
    "VERSION": "__BASELINE",
    "WEEK_DATE": "2025-11-06",
    "TELESCOPIC_WEEK": "CW45 2025",
    "Year Quarter": "2025-Q4",
    "COMPONENT": "BAT-HYB-1.5",
    "CALENDAR_WEEK": "CW45 2025",
    "ASSEMBLY_DESC": "2.0 kWh Hybrid Battery",
    "CIR_QTY": 180,
    "ACTUAL_QTY": 5000000000,
    "CONFIG_PROD": "VCP_1600",
    "START_DATE": "2025-10-16",
    "END_DATE": "2025-12-31"
  },

  // 1.8 kWh Lithium Battery
  {
    "LOCATION_ID": "1600",
    "PRODUCT_ID": "VCP_1600",
    "MODEL_VERSION": "",
    "SCENARIO": "_PLAN",
    "TYPE": "PI",
    "UNIQUE_ID": 3201,
    "VERSION": "__BASELINE",
    "WEEK_DATE": "2025-10-16",
    "TELESCOPIC_WEEK": "CW42 2025",
    "Year Quarter": "2025-Q4",
    "COMPONENT": "BAT-HYB-1.5",
    "CALENDAR_WEEK": "CW42 2025",
    "ASSEMBLY_DESC": "1.8 kWh Lithium Battery",
    "CIR_QTY": 180,
    "ACTUAL_QTY": 6000000000,
    "CONFIG_PROD": "VCP_1600",
    "START_DATE": "2025-10-16",
    "END_DATE": "2025-12-31"
  },
  {
    "LOCATION_ID": "1600",
    "PRODUCT_ID": "VCP_1600",
    "MODEL_VERSION": "",
    "SCENARIO": "_PLAN",
    "TYPE": "PI",
    "UNIQUE_ID": 3202,
    "VERSION": "__BASELINE",
    "WEEK_DATE": "2025-10-23",
    "TELESCOPIC_WEEK": "CW43 2025",
    "Year Quarter": "2025-Q4",
    "COMPONENT": "BAT-HYB-1.5",
    "CALENDAR_WEEK": "CW43 2025",
    "ASSEMBLY_DESC": "1.8 kWh Lithium Battery",
    "CIR_QTY": 150,
    "ACTUAL_QTY": 7000000000,
    "CONFIG_PROD": "VCP_1600",
    "START_DATE": "2025-10-16",
    "END_DATE": "2025-12-31"
  },
  {
    "LOCATION_ID": "1600",
    "PRODUCT_ID": "VCP_1600",
    "MODEL_VERSION": "",
    "SCENARIO": "_PLAN",
    "TYPE": "PI",
    "UNIQUE_ID": 3203,
    "VERSION": "__BASELINE",
    "WEEK_DATE": "2025-10-30",
    "TELESCOPIC_WEEK": "CW44 2025",
    "Year Quarter": "2025-Q4",
    "COMPONENT": "BAT-HYB-1.5",
    "CALENDAR_WEEK": "CW44 2025",
    "ASSEMBLY_DESC": "1.8 kWh Lithium Battery",
    "CIR_QTY": 130,
    "ACTUAL_QTY": 8000000000,
    "CONFIG_PROD": "VCP_1600",
    "START_DATE": "2025-10-16",
    "END_DATE": "2025-12-31"
  },
  {
    "LOCATION_ID": "1600",
    "PRODUCT_ID": "VCP_1600",
    "MODEL_VERSION": "",
    "SCENARIO": "_PLAN",
    "TYPE": "PI",
    "UNIQUE_ID": 3204,
    "VERSION": "__BASELINE",
    "WEEK_DATE": "2025-11-06",
    "TELESCOPIC_WEEK": "CW45 2025",
    "Year Quarter": "2025-Q4",
    "COMPONENT": "BAT-HYB-1.5",
    "CALENDAR_WEEK": "CW45 2025",
    "ASSEMBLY_DESC": "1.8 kWh Lithium Battery",
    "CIR_QTY": 100,
    "ACTUAL_QTY": 9000000000,
    "CONFIG_PROD": "VCP_1600",
    "START_DATE": "2025-10-16",
    "END_DATE": "2025-12-31"
  }

  // Similarly, you can replicate 4 combinations for:
  // "1.2 kWh Lead-Acid Battery"
  // "1.5 kWh Solid-State Battery"
]


            try {
                console.log("=== onInit started ===");
                this.showBusyIndicator(true);

                // Fetch locations data
                const loc = await that.readModel("getPlannedOrdAnalysis", {
                    $apply: 'groupby((LOCATION_ID),aggregate($count as Count))'
                });

                  that.oModel.read("/getAsmbReqAnalysis", {
                // filters: aFilters,
                urlParameters: {
                    $apply: `filter(LOCATION_ID eq '1000' and PRODUCT_ID eq 'VCP_VEHICLE'  and (WEEK_DATE ge 2025-10-01 and WEEK_DATE le 2026-01-31))`,
                    // "$select": "WEEK_DATE,ASSEMBLY_DESC,CIR_QTY,COUNT",
                    "$top": 100000
                },
                success: function (oData) {
                    console.log(oData);
                },
            error:function(error){
                console.log(error);
                }
            });
            

                var locationModel = new JSONModel(loc);
            this.byId("idLocation").setModel(locationModel);
                console.log("Locations loaded:", loc);

                 this.byId("idLocation").setSelectedKey("");
            // this.byId("idLocation").setForceSelection(false);

                // Bind initial data to view - NO DEFAULT SELECTION
                // this.bindDataToView(loc);
                this.showBusyIndicator(false);

                console.log("onInit completed without default selections");

            } catch (error) {
                console.error("Error in onInit:", error);
                this.showErrorMessage("Failed to load dropdown data: " + error.message);
            } finally {
                this.showBusyIndicator(false);
                console.log("=== onInit finished ===");
            }
        },
        onAfterRendering() {
            // const oDateL = new Date();
            // const oDateH = new Date(oDateL);
            // oDateH.setMonth(oDateH.getMonth() + 3, 0);
            // that.byId("DRS1").setDateValue(oDateL);
            // that.byId("DRS1").setSecondDateValue(oDateH);
            const oToday = new Date();

            // 1️⃣ Get the 1st day of the current month
            const oDateL = new Date(oToday.getFullYear(), oToday.getMonth(), 1);

            // 2️⃣ Get the last day of the 3rd month ahead
            const oDateH = new Date(oDateL.getFullYear(), oDateL.getMonth() + 3, 0);

            // 3️⃣ Set these as range in DateRangeSelection (DRS1)
            that.byId("DRS1").setDateValue(oDateL);
            that.byId("DRS1").setSecondDateValue(oDateH);
        },

        bindDataToView: function (locationData) {
            console.log("=== bindDataToView started ===");

            // 1. Create and bind Location model
            var locationModel = new JSONModel(locationData);
            this.byId("idLocation").setModel(locationModel);
            // this.byId("idLocation").setSelectedKey("1600");
            //    this.loadConfigProductsForLocation("1600");


            // Force clear location selection and use forceSelection=false
            this.byId("idLocation").setSelectedKey("");
            this.byId("idLocation").setForceSelection(false);

            // Additional timeout to ensure no auto-selection
            setTimeout(() => {
                this.byId("idLocation").setSelectedKey("");
                console.log("Location selection forcefully cleared");
            }, 50);

            console.log("Location model set with", locationData.length, "items - no default selection");

            // 2. Initialize empty model for Configuration Product
            var configModel = new JSONModel({
                ConfigProducts: []
            });
            this.getView().setModel(configModel, "configModel");
            console.log("Empty config model created");

            // 3. Initialize empty models for other dependent dropdowns
            var emptyDependentModel = new JSONModel({
                Products: [],
                ModelVersions: [],
                UniqueIDs: []
            });
            this.getView().setModel(emptyDependentModel, "dependentModel");
            console.log("Empty dependent model created");

            console.log("=== bindDataToView finished ===");
        },



        // Event handlers with detailed logging
        onLocationChange: function (oEvent) {
            var selectedItem = oEvent.getParameter("selectedItem");
            if (!selectedItem) {
                this.clearAllDependentDropdowns();
                this.clearAllCharts();
                return;
            }

            var selectedLocation = selectedItem.getKey();
            console.log("Location changed to:", selectedLocation);

            // Clear ALL dependent dropdowns and charts
            this.clearDependentDropdowns();
            this.clearAllCharts();
            this.clearCharacteristicDropdowns();

            // Load Configuration Products for this location
            this.loadConfigProductsForLocation(selectedLocation);
        },

        clearAllCharts: function () {
            console.log("=== Clearing all charts ===");

            // Clear main VizFrame chart
            var oVizFrame = this.byId("idVizFrame");
            if (oVizFrame) {
                oVizFrame.setModel(new sap.ui.model.json.JSONModel({ chartData: [] }));
            }

            // Clear Characteristics chart
            var oCharChart = this.byId("idCharChart");
            if (oCharChart) {
                oCharChart.setModel(new sap.ui.model.json.JSONModel({ CharData: [] }));
            }

            // Clear Forecast chart
            var oForecastChart = this.byId("idForecastChart");
            if (oForecastChart) {
                oForecastChart.setModel(new sap.ui.model.json.JSONModel({ ForecastChartData: [] }));
            }

            // Clear Actual chart
            var oActualChart = this.byId("idActualChart");
            if (oActualChart) {
                oActualChart.setModel(new sap.ui.model.json.JSONModel({ ActualChartData: [] }));
            }

            var oCharVal = this.byId("idCharValNum");
            if (oCharVal) {
                oCharVal.setModel(new sap.ui.model.json.JSONModel({ CharValNum: [] }), "charValModel");
            }

            var oCharecteristic = this.byId("idCharacteristics");
            if (oCharecteristic) {
                oCharecteristic.setModel(new sap.ui.model.json.JSONModel({ Characteristics: [] }), "charModel");
            }

            console.log("All charts cleared successfully");
        },

        // NEW: Function to clear characteristic-related dropdowns
        clearCharacteristicDropdowns: function () {
            console.log("=== Clearing characteristic dropdowns ===");

            // Clear CHAR_DESC dropdown
            var oCharCtrl = this.byId("idCharacteristics");
            if (oCharCtrl) {
                oCharCtrl.setModel(new sap.ui.model.json.JSONModel({ Characteristics: [] }), "charModel");
                if (oCharCtrl.removeAllSelectedItems) {
                    oCharCtrl.removeAllSelectedItems();
                }
            }

            // Clear CHAR_CHARVALUE dropdown
            var oCharValCtrl = this.byId("idCharValNum");
            if (oCharValCtrl) {
                oCharValCtrl.setModel(new sap.ui.model.json.JSONModel({ CharValNum: [] }));
                if (oCharValCtrl.removeAllSelectedItems) {
                    oCharValCtrl.removeAllSelectedItems();
                }
            }

            console.log("Characteristic dropdowns cleared");
        },


        // MODIFIED: processFilteredData to include "Select All" option for Unique IDs
        processFilteredData: function (data, allUniqueIDs = []) {
            console.log("=== processFilteredData started with", data.length, "records ===");

            const uniqueProducts = [...new Set(data.map(item => item.PRODUCT_ID).filter(p => p))];
            const uniqueModelVersions = [...new Set(data.map(item => item.MODEL_VERSION).filter(m => m))];

            // Add "Select All" option at the beginning of Unique IDs
            const uniqueIDsFormatted = allUniqueIDs.map(uid => ({ key: uid, text: uid }));
            uniqueIDsFormatted.unshift({ key: "ALL", text: "Select All" });

            const products = uniqueProducts.map(product => ({ key: product, text: product }));

            // Add "Select All" for Model Versions too
            const modelVersions = uniqueModelVersions.map(version => ({ key: version, text: version }));
            modelVersions.unshift({ key: "ALL", text: "Select All" });

            const dependentModel = this.getView().getModel("dependentModel") || new JSONModel({
                Products: [], ModelVersions: [], UniqueIDs: []
            });

            dependentModel.setData({
                Products: products,
                ModelVersions: modelVersions,
                UniqueIDs: uniqueIDsFormatted
            });

            // Clear previous selections
            ["idProduct", "idModelVersion", "idUniqueID"].forEach(id => {
                const ctrl = this.byId(id);
                if (ctrl && ctrl.setSelectedKeys) ctrl.setSelectedKeys([]);
            });

            this.getView().setModel(dependentModel, "dependentModel");

            console.log("Dependent dropdowns updated:", {
                products: products.length,
                modelVersions: modelVersions.length - 1, // -1 for "Select All"
                uniqueIDs: uniqueIDsFormatted.length - 1
            });
            console.log("=== processFilteredData finished ===");
        },

        // NEW: Handle Model Version selection with "Select All"
        onModelVersionChange: function (oEvent) {
            var oMultiComboBox = oEvent.getSource();
            var aSelectedKeys = oMultiComboBox.getSelectedKeys();

            console.log("Model Version selection changed:", aSelectedKeys);

            // Check if "Select All" was selected
            if (aSelectedKeys.includes("ALL")) {
                var oModel = this.getView().getModel("dependentModel");
                var aAllModelVersions = oModel.getProperty("/ModelVersions") || [];

                // Get all keys except "ALL"
                var aAllKeys = aAllModelVersions
                    .filter(item => item.key !== "ALL")
                    .map(item => item.key);

                // Select all items
                oMultiComboBox.setSelectedKeys(aAllKeys);
                console.log("Selected all Model Versions:", aAllKeys.length);
            }
        },

        // NEW: Handle Unique ID selection with "Select All"
        onUniqueIDChange: function (oEvent) {
            var oMultiComboBox = oEvent.getSource();
            var aSelectedKeys = oMultiComboBox.getSelectedKeys();

            console.log("Unique ID selection changed:", aSelectedKeys);

            // Check if "Select All" was selected
            if (aSelectedKeys.includes("ALL")) {
                var oModel = this.getView().getModel("dependentModel");
                var aAllUniqueIDs = oModel.getProperty("/UniqueIDs") || [];

                // Get all keys except "ALL"
                var aAllKeys = aAllUniqueIDs
                    .filter(item => item.key !== "ALL")
                    .map(item => item.key);

                // Select all items
                oMultiComboBox.setSelectedKeys(aAllKeys);
                console.log("Selected all Unique IDs:", aAllKeys.length);
            }

            // Load characteristics after unique ID change
            var aUniqueIds = this.byId("idUniqueID").getSelectedKeys().filter(uid => uid && uid.trim() !== "");

            // this.loadCharacteristics("", aUniqueIds);
        },

        // MODIFIED: onProductChange to trigger auto-selection
        onProductChange:async function (oEvent) {
            var selectedLocation = that.byId("idLocation").getSelectedKey();
            var sSelectedConfigProduct = that.byId("idConfigProduct").getSelectedKey();
            var sSelectedProduct = oEvent.getSource().getSelectedKey();
            console.log("Selected Product:", sSelectedProduct);

            if (!sSelectedProduct) {
                console.log("No product selected → clearing downstream selections");
                // this.byId("idModelVersion").removeAllSelectedItems();
                // this.byId("idUniqueID").removeAllSelectedItems();
                return;
            }

            const modelVData = await this.readModel("getPlannedOrdAnalysis", {
                    $apply: `filter(LOCATION_ID eq '${selectedLocation}' and CONFIGURATION_PRODUCT eq '${sSelectedConfigProduct}' and PRODUCT_ID eq '${sSelectedProduct}')/groupby((MODEL_VERSION,UNIQUE_ID),aggregate($count as Count))`
                });


            const modelVersions = Array.from(
                new Set(modelVData.map(item => item.MODEL_VERSION))
            ).map(version => ({ MODEL_VERSION: version }));

            const uniqueIDs = Array.from(
                new Set(modelVData.map(item => item.UNIQUE_ID))
            ).map(id => ({ UNIQUE_ID: id }));


                const modelVModel = new JSONModel(modelVersions);
                that.byId("idModelVersion").setModel(modelVModel);
                
                 const uidModel = new JSONModel(uniqueIDs);
                that.byId("idUniqueID").setModel(uidModel);

            // Check if all mandatory fields are now filled
            // this.checkAndAutoSelect();


        },

        // NEW: Method to check mandatory fields and auto-select Model Version & Unique IDs
        checkAndAutoSelect: function () {
            var sLocation = this.byId("idLocation").getSelectedKey();
            var sConfigProduct = this.byId("idConfigProduct").getSelectedKey();
            var sProduct = this.byId("idProduct").getSelectedKey();
            var oStartDate = this.byId("DRS1").getDateValue();
            var oEndDate = this.byId("DRS1").getSecondDateValue();

            // Check if all mandatory fields are filled
            if (!sLocation || !sConfigProduct || !sProduct || !oStartDate || !oEndDate) {
                console.log("Mandatory fields not complete, skipping auto-selection");
                return;
            }

            console.log("All mandatory fields filled, auto-selecting Model Version and Unique IDs");

            // Auto-select all Model Versions
            var oModelVersionControl = this.byId("idModelVersion");
            var oDepModel = this.getView().getModel("dependentModel");

            if (oDepModel) {
                var aModelVersions = oDepModel.getProperty("/ModelVersions") || [];
                var aModelKeys = aModelVersions
                    .filter(item => item.key !== "ALL")
                    .map(item => item.key);

                if (aModelKeys.length > 0) {
                    oModelVersionControl.setSelectedKeys(aModelKeys);
                    console.log("Auto-selected all Model Versions:", aModelKeys.length);
                }

                // Auto-select all Unique IDs
                var oUniqueIDControl = this.byId("idUniqueID");
                var aUniqueIDs = oDepModel.getProperty("/UniqueIDs") || [];
                var aUniqueKeys = aUniqueIDs
                    .filter(item => item.key !== "ALL")
                    .map(item => item.key);

                if (aUniqueKeys.length > 0) {
                    oUniqueIDControl.setModel(new JSONModel({
                        UniqueIDs: aUniqueIDs
                    }), "dependentModel")
                    oUniqueIDControl.setSelectedKeys(aUniqueKeys);
                    console.log("Auto-selected all Unique IDs:", aUniqueKeys.length);
                }
            }
        },

        // MODIFIED: Also trigger auto-selection when date range changes
        onDateRangeChange: function (oEvent) {
            console.log("Date range changed");
            this.checkAndAutoSelect();
        },

        // MODIFIED: Trigger auto-selection when config product changes
        onConfigProductChange: function (oEvent) {
            // this.byId("idProduct").setBusy(true);
            var sSelectedConfigProduct = oEvent.getSource().getSelectedKey();
            console.log("Selected Config Product:", sSelectedConfigProduct);

            this.clearDependentDropdowns();

            if (!sSelectedConfigProduct) return;

            var aConfigProducts = [sSelectedConfigProduct];
            this.updateProductDropdowns(aConfigProducts);

            var oProductSelect = this.byId("idProduct");
            if (oProductSelect) {
                oProductSelect.detachChange(this.onProductChange, this);
                oProductSelect.setSelectedKey(null);
                oProductSelect.attachChange(this.onProductChange, this);
            }

            // this.loadCharacteristics(aConfigProducts);
            this.clearAllCharts();

            // Check for auto-selection after config product is loaded
            // setTimeout(() => {
            //     this.checkAndAutoSelect();
            // }, 500);
        },

        // MODIFIED: Update clearDependentDropdowns to maintain "Select All" structure
        clearDependentDropdowns: function () {
            console.log("=== clearDependentDropdowns ===");

            var dependentModel = this.getView().getModel("dependentModel");
            if (dependentModel) {
                dependentModel.setData({
                    Products: [],
                    ModelVersions: [{ key: "ALL", text: "Select All" }],
                    UniqueIDs: [{ key: "ALL", text: "Select All" }]
                });
            }

            // Clear selections explicitly
            var oProduct = this.byId("idProduct");
            var oModelVersion = this.byId("idModelVersion");
            var oUniqueID = this.byId("idUniqueID");

            if (oProduct) {
                oProduct.setSelectedKey(null);
                if (oProduct.removeAllItems) oProduct.removeAllItems();
            }

            if (oModelVersion && oModelVersion.removeAllSelectedItems) {
                oModelVersion.removeAllSelectedItems();
            }

            if (oUniqueID && oUniqueID.removeAllSelectedItems) {
                oUniqueID.removeAllSelectedItems();
            }
        },




        // Load configuration products for selected location
        loadConfigProductsForLocation: async function (locationId) {
            console.log("Loading Config Products for location:", locationId);

            try {
                this.showBusyIndicator(true);

                const configData = await this.readModel("getPlannedOrdAnalysis", {
                    $apply: `filter(LOCATION_ID eq '${locationId}')/groupby((CONFIGURATION_PRODUCT),aggregate($count as Count))`
                });

                console.log("Config products loaded:", configData.length);

                const formattedConfigData = configData.map(item => ({
                    key: item.CONFIGURATION_PRODUCT,
                    text: item.CONFIGURATION_PRODUCT
                }));

                let configModel = this.getView().getModel("configModel");
                if (!configModel) {
                    configModel = new JSONModel({ ConfigProducts: [] });
                    this.getView().setModel(configModel, "configModel");
                }

                configModel.setData({ ConfigProducts: formattedConfigData });

                // Make sure no selection is set
                this.byId("idConfigProduct").setSelectedKey("");

                console.log("Config model updated. Data:", formattedConfigData);

            } catch (error) {
                console.error("Failed to load configuration products:", error);
            } finally {
                this.showBusyIndicator(false);
            }
        },


        processConfigData: function (configData) {
            console.log("=== processConfigData started with", configData.length, "items ===");

            // Format data for dropdown
            var formattedConfigData = configData.map(function (item) {
                return {
                    key: item.CONFIGURATION_PRODUCT,
                    text: item.CONFIGURATION_PRODUCT
                };
            });

            console.log("Formatted config data:", formattedConfigData);

            // Update the configuration product model
            var configModel = this.getView().getModel("configModel");
            if (!configModel) {
                console.error("configModel not found!");
                return;
            }

            configModel.setData({
                ConfigProducts: formattedConfigData
            });

            // ENSURE NO DEFAULT SELECTION
            this.byId("idConfigProduct").setSelectedKey("");

            console.log("Config model updated with no default selection. New data:", configModel.getData());
            console.log("=== processConfigData finished ===");
        },

        updateProductDropdowns: async function () {
            var oModel = this.getView().getModel();
            var selectedLocation = this.byId("idLocation").getSelectedKey();
            var sSelectedConfigProduct = this.byId("idConfigProduct").getSelectedKey();
            var aSelectedConfigProducts = sSelectedConfigProduct ? [sSelectedConfigProduct] : [];

            if (!selectedLocation || !aSelectedConfigProducts.length) {
                console.log("Missing selections, skipping product load");
                this.clearDependentDropdowns();
                return;
            }

            // this.showBusyIndicator(true);
            this.clearDependentDropdowns();
            //  const prodData = await this.readModel("getPlannedOrdAnalysis", {
            //         $apply: `filter(LOCATION_ID eq '${selectedLocation}' and CONFIGURATION_PRODUCT eq '${sSelectedConfigProduct}')/groupby((PRODUCT_ID),aggregate($count as Count))`
            //     });
               that.oModel.read("/getPlannedOrdAnalysis",{
                    urlParameters:{
                    $apply: `filter(LOCATION_ID eq '${selectedLocation}' and CONFIGURATION_PRODUCT eq '${sSelectedConfigProduct}')/groupby((PRODUCT_ID),aggregate($count as Count))`
   
                    },
                    success:function(oData){
                //         console.log(oData)
                        const prodModel = new JSONModel(oData.results)
                that.byId("idProduct").setModel(prodModel);
                    },
                    error:function(error){
                        console.log(error)
                    }

                })

                // const prodModel = new JSONModel(prodData)
                // that.byId("idProduct").setModel(prodModel);
            //     const dependentModel = this.getView().getModel("dependentModel") || new JSONModel({
            //     Products: []
            // });
            //   dependentModel.setData({
            //     Products: prodData
            // });
            //  this.getView().setModel(dependentModel, "dependentModel");

            // try {
            //     // Fetch all PlannedOrdAnalysis records for selected config products
            //     const allResultsArrays = await Promise.all(aSelectedConfigProducts.map(cp => {
            //         return new Promise((resolve, reject) => {
            //             var oConfigFilter = new sap.ui.model.Filter(
            //                 "CONFIGURATION_PRODUCT", sap.ui.model.FilterOperator.EQ, cp
            //             );
            //             var oLocationFilter = new sap.ui.model.Filter(
            //                 "LOCATION_ID", sap.ui.model.FilterOperator.EQ, selectedLocation
            //             );
            //             var oFinalFilter = new sap.ui.model.Filter({
            //                 filters: [oLocationFilter, oConfigFilter],
            //                 and: true
            //             });

            //             oModel.read("/getPlannedOrdAnalysis", {
            //                 filters: [oFinalFilter],
            //                 urlParameters: {
            //                     "$top": 1000,
            //                     "$select": "PRODUCT_ID"
            //                 },
            //                 success: function (oData) {
            //                     resolve(oData.results || []);
            //                 },
            //                 error: function (oError) {
            //                     console.error("Error loading products for", cp, oError);
            //                     resolve([]);
            //                 }
            //             });
            //         });
            //     }));

            //     // Flatten all results
            //     const flatResults = allResultsArrays.flat();

            //     // Deduplicate Products, Model Versions
            //     const uniqueResultsMap = {};
            //     flatResults.forEach(item => {
            //         if (item.PRODUCT_ID) {
            //             uniqueResultsMap[item.PRODUCT_ID] = item; // last occurrence wins
            //         }
            //     });
            //     const uniqueResults = Object.values(uniqueResultsMap);

            //     // --- Now fetch all Unique IDs for all selected Products ---
            //     const allProductIDs = uniqueResults.map(r => r.PRODUCT_ID);
            //     let allUniqueIDs = [];

            //     if (allProductIDs.length > 0) {
            //         const batchResults = await Promise.all(allProductIDs.map(pid => {
            //             return new Promise((resolve, reject) => {
            //                 var oFilters = [
            //                     new sap.ui.model.Filter("PRODUCT_ID", sap.ui.model.FilterOperator.EQ, pid),
            //                     new sap.ui.model.Filter("LOCATION_ID", sap.ui.model.FilterOperator.EQ, selectedLocation)
            //                 ];
            //                 oModel.read("/getPlannedOrdAnalysis", {
            //                     filters: oFilters,
            //                     urlParameters: {
            //                         "$top": 100000, // fetch up to 5000 records in one call
            //                         "$select": "UNIQUE_ID"
            //                     },
            //                     success: function (oData) {
            //                         const uids = oData.results
            //                             .map(item => item.UNIQUE_ID)
            //                             .filter(uid => uid && String(uid).trim() !== "");
            //                         resolve(uids);
            //                     },
            //                     error: function (oError) {
            //                         console.error("Error loading Unique IDs for product", pid, oError);
            //                         resolve([]);
            //                     }
            //                 });
            //             });
            //         }));

            //         allUniqueIDs = [...new Set(batchResults.flat())]; // deduplicate Unique IDs
            //     }

            //     // Add the Unique IDs to dependent data
            //     this.processFilteredData(uniqueResults, allUniqueIDs);

            // } catch (error) {
            //     console.error("Error in updateProductDropdowns:", error);
            // } finally {
            //     this.showBusyIndicator(false);
            // }
        },


    onFilter:function(oEvent){
console.log("")
    },

        onApplyFilters: function (oEvent) {
            var oView = this.getView();

            // Collect mandatory values
            var sLocation = oView.byId("idLocation").getSelectedKey();
            var sUniqueIds = oView.byId("idUniqueID").getSelectedKeys();
            var sProduct = oView.byId("idProduct").getSelectedKey();
            var oStartDate = oView.byId("DRS1").getDateValue();
            var oEndDate = oView.byId("DRS1").getSecondDateValue();

            // Validate
            if (!sLocation || !sProduct || !oStartDate || !oEndDate) {
                sap.m.MessageToast.show("Please fill all mandatory fields before proceeding.");
                return;
            }

            this._bInitialLoadInProgress = true;


            var that = this;
            var oModel = this.getView().getModel();
            var oUniqueIDBox = this.byId("idUniqueID");

            // 🔹 STEP 1: Refresh Unique IDs for selected product before fetching charts
            oModel.read("/getCirGen", {
                filters: [
                    new sap.ui.model.Filter("PRODUCT_ID", sap.ui.model.FilterOperator.EQ, sProduct),
                    new sap.ui.model.Filter("WEEK_DATE", sap.ui.model.FilterOperator.BT, oStartDate, oEndDate)
                ],
                urlParameters:{
                    $top:100000
                },
                success: function (oData) {
                    if (oData.results && oData.results.length) {

                        // Remove duplicates + convert all keys to strings
                        var aUniqueIDs = [];
                        // oData.results.forEach(function (item) {
                        //     if (item.UNIQUE_ID != null) {
                        //         var sKey = String(item.UNIQUE_ID); // ✅ ensure string
                        //         if (!aUniqueIDs.find(u => u.key === sKey)) {
                        //             aUniqueIDs.push({ key: sKey, text: sKey });
                        //         }
                        //     }
                        // });

                        // // 🔹 Bind model to dropdown
                        // var oUIDModel = new sap.ui.model.json.JSONModel({ UniqueIDs: aUniqueIDs });
                        // oUniqueIDBox.setModel(oUIDModel, "dependentModel");

                        // 🔹 Clear previous selections safely
                        // if (oUniqueIDBox.removeAllSelectedItems) {
                        //     oUniqueIDBox.removeAllSelectedItems();
                        // }

                        // 🔹 Select all unique IDs automatically
                        var selUID = that.byId("idUniqueID").getSelectedKeys()
                        var aKeys = [];
                        if(selUID.length == 0 || oView.byId("idUniqueID").getSelectAllCheckbox().getSelected() === true){
                            oView.byId("idUniqueID").getItems().forEach(y=>{
                               aKeys.push( y.getText())
                            })
                        }
                        else{
                            aKeys = selUID;
                        }

                        // selUID.forEach(x=>{
                        //     aUniqueIDs.push({UNIQUE_ID:x})
                        // })
                        // var aKeys = aUniqueIDs.map(uid => uid.UNIQUE_ID);
                        // if (oUniqueIDBox.setSelectedKeys) {
                        //     oUniqueIDBox.setSelectedKeys(aKeys); // ✅ correct API
                        // } else if (oUniqueIDBox.addSelectedKeys) {
                        //     oUniqueIDBox.addSelectedKeys(aKeys);
                        // } else {
                        //     aKeys.forEach(k => oUniqueIDBox.addSelectedKey(k));
                        // }

                        // console.log("✅ Bound and auto-selected", aKeys.length, "unique IDs for product:", sProduct);

                        // ✅ Continue to CirGen + charts
                        that._loadCirGenChartAndCharacteristics(
                            sLocation,
                            sProduct,
                            oStartDate,
                            oEndDate,
                            aKeys // pass selected unique IDs
                        );

                        that.loadCharValChart(
                            sLocation,
                            sProduct,
                            oStartDate,
                            oEndDate,
                            aKeys
                        );
                        that.loadForecastChart();
                        that.loadActualChart()
                        //////// reseting data/////
                        if(that.chartfinData){
                            that.chartfinData = undefined;
                        }

                    } else {
                        sap.m.MessageToast.show("No Unique IDs found for selected product and date range.");
                        that._bInitialLoadInProgress = false;
                        that._loadCirGenChartAndCharacteristics(sLocation, sProduct, oStartDate, oEndDate, []);
                    }
                },
                error: function (oError) {
                    console.error("Error fetching Unique IDs", oError);
                    sap.m.MessageToast.show("Error loading Unique IDs");
                    that._bInitialLoadInProgress = false;
                    that._loadCirGenChartAndCharacteristics(sLocation, sProduct, oStartDate, oEndDate, []);
                }
            });
        },

         loadCharValChart: function (sLocation, sProduct, oStartDate, oEndDate, aUniqueIds) {
            var oModel = this.getView().getModel();
            // var oModel = this.getView().getModel();

            // Build filters
            var aFilters = [
                new sap.ui.model.Filter("LOCATION_ID", sap.ui.model.FilterOperator.EQ, sLocation),
                new sap.ui.model.Filter("PRODUCT_ID", sap.ui.model.FilterOperator.EQ, sProduct),
                new sap.ui.model.Filter("WEEK_DATE", sap.ui.model.FilterOperator.BT, oStartDate, oEndDate)
            ];

            if (aUniqueIds && aUniqueIds.length) {
                var oUidFilter = new sap.ui.model.Filter({
                    filters: aUniqueIds.map(function (uid) {
                        return new sap.ui.model.Filter("UNIQUE_ID", sap.ui.model.FilterOperator.EQ, uid);
                    }),
                    and: false
                });
                aFilters.push(oUidFilter);
            }
            // const unique = aUniqueIds.map(id => `UNIQUE_ID eq ${JSON.parse(id)}`).join(' or ');

            // --- Read data from backend ---
            oModel.read("/getPlannedOrdAnalysis", {
                urlParameters: {
                    //  $apply: `filter(LOCATION_ID eq '${sLocation}'  and PRODUCT_ID eq '${sProduct}' and (WEEK_DATE ge ${oStartDate.toLocaleDateString('en-CA')} and WEEK_DATE le ${oEndDate.toLocaleDateString('en-CA')}) and (${unique}))`,
                    "$select": "CHAR_DESC,CHAR_CHARVALUE,ACTUAL_QTY,UNCONSUMED_FORECAST,CIR_QTY,YEAR_QUAETER,WEEK_DATE",
                    "$top": 100000
                },
                filters: aFilters,
                success: function (oData) {
                    var groupedData = {};
                    var aAllCharValues = new Set();

                    oData.results.forEach(function (item) {
                        if (!item.CHAR_DESC || !item.CHAR_CHARVALUE || !item.YEAR_QUAETER) return;

                        aAllCharValues.add(item.CHAR_CHARVALUE);

                        var yearQuarter = item.YEAR_QUAETER;
                        var category = item.CHAR_DESC + " " + item.CHAR_CHARVALUE;
                        var key = yearQuarter + "|" + category;

                        if (!groupedData[key]) {
                            groupedData[key] = {
                                YearQuarter: yearQuarter,
                                Category: category,
                                Sales: 0,
                                Unconsumed: 0,
                                Forecast: 0
                            };
                        }

                        groupedData[key].Sales += item.ACTUAL_QTY || 0;
                        groupedData[key].Unconsumed += item.UNCONSUMED_FORECAST || 0;
                        groupedData[key].Forecast += item.CIR_QTY || 0;
                    });

                    // --- Prepare chart data with combined label ---
                    var chartData = Object.values(groupedData).map(function (d) {
                        var total = d.Sales + d.Unconsumed;
                        return {
                            QuarterCharacteristic: d.YearQuarter + " | " + d.Category, // Combined label
                            Sales: d.Sales > 0 ? d.Sales : null,
                            Unconsumed: d.Unconsumed,
                            Forecast: d.Forecast,
                            Total: total
                        };
                    });

                    console.log("Chart data prepared:", chartData);

                    // --- Set up model and dataset ---
                    var oChartModel = new sap.ui.model.json.JSONModel({ CharData: chartData });
                    var oVizFrame = this.byId("idCharChart");

                    var oDataset = new sap.viz.ui5.data.FlattenedDataset({
                        dimensions: [
                            { name: "Quarter / Characteristic", value: "{QuarterCharacteristic}" }
                        ],
                        measures: [
                            { name: "Unconsumed", value: "{Unconsumed}" },
                            { name: "Sales", value: "{Sales}" },
                            { name: "Forecast", value: "{Forecast}" }
                        ],
                        data: { path: "/CharData" }
                    });

                    oVizFrame.setDataset(oDataset);
                    oVizFrame.setModel(oChartModel);
                    oVizFrame.removeAllFeeds();

                    // --- Feed items ---
                    oVizFrame.addFeed(new sap.viz.ui5.controls.common.feeds.FeedItem({
                        uid: "categoryAxis",
                        type: "Dimension",
                        values: ["Quarter / Characteristic"]
                    }));

                    oVizFrame.addFeed(new sap.viz.ui5.controls.common.feeds.FeedItem({
                        uid: "valueAxis",
                        type: "Measure",
                        values: ["Unconsumed", "Sales"]
                    }));

                    oVizFrame.addFeed(new sap.viz.ui5.controls.common.feeds.FeedItem({
                        uid: "valueAxis2",
                        type: "Measure",
                        values: ["Forecast"]
                    }));

                    oVizFrame.setVizType("dual_stacked_combination");

                    // --- Chart styling and properties ---
                    oVizFrame.setVizProperties({
                        plotArea: {
                            primaryScale: { fixedRange: false, minValue: 0 },
                            secondaryScale: { fixedRange: false, minValue: 0 },
                            dataLabel: { visible: true, showTotal: true, formatString: "#,##0" },
                            dataPointStyle: {
                                rules: [
                                    {
                                        dataContext: { Unconsumed: "*" },
                                        properties: { color: "#809e57" },
                                        displayName: "Unconsumed"
                                    },
                                    {
                                        dataContext: { Sales: "*" },
                                        properties: { color: "#FFC107" },
                                        displayName: "Sales"
                                    },
                                    {
                                        dataContext: { Forecast: "*" },
                                        properties: { color: "#2196F3", lineColor: "#2196F3", lineWidth: 3 },
                                        displayName: "Forecast"
                                    }
                                ]
                            },
                            dataShape: {
                                primaryAxis: ["bar", "bar"],
                                secondaryAxis: ["line"]
                            },
                            marker: { visible: true, size: 8 }
                        },
                        valueAxis: {
                            visible: true,
                            title: { visible: true, text: "Actual Quantities" },
                            label: { formatString: "#,##0" }
                        },
                        valueAxis2: {
                            visible: true,
                            title: { visible: true, text: "Forecast (CIR)" },
                            label: { formatString: "#,##0" }
                        },
                        categoryAxis: {
                            title: { visible: true, text: "Quarter | Characteristic" }
                        },
                        legend: {
                            visible: true,
                            title: { visible: false }
                        },
                        title: {
                            visible: false,
                            text: "Characteristics Value Analysis by Quarter"
                        },
                        interaction: {
                            selectability: { mode: "exclusive" }
                        }
                    });

                    // --- Initialize Characteristic value dropdown ---
                    if (!that.changeCharVAl) {
                        var oCharValCtrl = this.byId("idCharValNum");
                        if (oCharValCtrl) {
                            var aFormattedCharValues = Array.from(aAllCharValues).map(function (val) {
                                return { key: val, text: val };
                            });
                            aFormattedCharValues.unshift({ key: "Select All", text: "Select All" });

                            oCharValCtrl.setModel(new sap.ui.model.json.JSONModel({ CharValNum: aFormattedCharValues }));
                            oCharValCtrl.getItems().forEach(function (item) {
                                oCharValCtrl.setSelectedItem(item, true);
                            });
                        }
                    }

                    this.showBusyIndicator(false);
                    console.log("Chart rendered with Quarter + Characteristic on X-axis");
                }.bind(this),
                error: function (oError) {
                    console.error("Error fetching chart data:", oError);
                    this.showErrorMessage("Failed to load chart data");
                    this.showBusyIndicator(false);
                }.bind(this)
            });
        },


        _loadCirGenChartAndCharacteristics: function (sLocation, sProduct, oStartDate, oEndDate, aUniqueIds) {
            var that = this;
            var oModel = this.getView().getModel();

            // Build filters
            var aFilters = [
                new sap.ui.model.Filter("LOCATION_ID", sap.ui.model.FilterOperator.EQ, sLocation),
                new sap.ui.model.Filter("PRODUCT_ID", sap.ui.model.FilterOperator.EQ, sProduct),
                new sap.ui.model.Filter("WEEK_DATE", sap.ui.model.FilterOperator.BT, oStartDate, oEndDate)
            ];

            if (aUniqueIds && aUniqueIds.length) {
                var oUidFilter = new sap.ui.model.Filter({
                    filters: aUniqueIds.map(function (uid) {
                        return new sap.ui.model.Filter("UNIQUE_ID", sap.ui.model.FilterOperator.EQ, uid);
                    }),
                    and: false
                });
                aFilters.push(oUidFilter);
            }

            // 🔹 Read CirGen and build chart
            oModel.read("/getCirGen", {
                filters: aFilters,
                urlParameters:{
                    "$top": 100000
                },
                success: function (oData) {
                    if (!oData.results.length) {
                        sap.m.MessageToast.show("No data found for the selected filters.");
                        that._bInitialLoadInProgress = false;
                        return;
                    }

                    // Load characteristics and select all
                    that.loadCharacteristics(that.byId("idConfigProduct").getSelectedKey());
                    // that._selectAllCharacteristics();

                    // Build chart data (existing logic stays the same)
                    var groupedData = {};
                    oData.results.forEach(function (item) {
                        var productId = item.PRODUCT_ID;
                        if (!groupedData[productId]) {
                            groupedData[productId] = { Product: productId, Actual: 0, Forecast: 0 };
                        }
                        groupedData[productId].Actual += (item.ACTUAL_QTY || 0);
                        groupedData[productId].Forecast += (item.UNCONSUMED_FORECAST || 0);
                    });

                    var aChartData = Object.values(groupedData);
                    var oChartModel = new sap.ui.model.json.JSONModel({ chartData: aChartData });
                    var oVizFrame = that.byId("idVizFrame");
                    oVizFrame.setModel(oChartModel);
                    // Configure the VizFrame for stacked bars
                    var oDataset = new sap.viz.ui5.data.FlattenedDataset({
                        dimensions: [{
                            name: "Product",
                            value: "{Product}"
                        }],
                        measures: [
                            { name: "Actual", value: "{Actual}" },
                            { name: "Forecast", value: "{Forecast}" }
                        ],
                        data: { path: "/chartData" }
                    });

                    oVizFrame.setDataset(oDataset);
                    oVizFrame.setVizType("stacked_bar"); // or "stacked_column" for vertical bars
                    oVizFrame.removeAllFeeds();

                    // Add feeds
                    oVizFrame.addFeed(new sap.viz.ui5.controls.common.feeds.FeedItem({
                        uid: "categoryAxis",
                        type: "Dimension",
                        values: ["Product"]
                    }));

                    oVizFrame.addFeed(new sap.viz.ui5.controls.common.feeds.FeedItem({
                        uid: "valueAxis",
                        type: "Measure",
                        values: ["Forecast","Actual"]
                    }));

                    // Set properties with data labels
                    oVizFrame.setVizProperties({
                        plotArea: {
                            isStacked: true,
                            dataLabel: {
                                visible: true,
                                showTotal: true, // Shows total outside the bar
                                formatString: "#,##0", // Number format
                                style: {
                                    color: "#333333",
                                    fontSize: "11px"
                                }
                            },
                            colorPalette: ["#FFC107", "#809e57"], // Yellow for Actual, Green for Forecast
                            dataPointStyle: {
                                rules: [
                                    {
                                        dataContext: { Actual: "*" },
                                        properties: {
                                            color: "#FFC107"
                                        },
                                        displayName: "Actual"
                                    },
                                    {
                                        dataContext: { Forecast: "*" },
                                        properties: {
                                            color: "#809e57"
                                        },
                                        displayName: "Unconsumed"
                                    }
                                ]
                            }
                        },
                        valueAxis: {
                            label: {
                                formatString: "#,##0"
                            },
                            title: {
                                visible: true,
                                text: "Quantity"
                            }
                        },
                        categoryAxis: {
                            title: {
                                visible: true,
                                text: "Product"
                            }
                        },
                        legend: {
                            visible: true,
                            title: {
                                visible: false
                            }
                        },
                        title: {
                            visible: false,
                            text: "Actual vs Unconsumed"
                        },
                        interaction: {
                            selectability: {
                                mode: "exclusive"
                            }
                        }

                    }),
                        console.log("CirGen chart loaded with", aChartData.length, "records");

                    var aCharFilters = [];

                    // Include all characteristics if none selected
                    var oCharModel = that.byId("idCharacteristics").getModel("charModel");
                    var aAllChars = oCharModel ? oCharModel.getProperty("/Characteristics") : [];

                    if (aAllChars && aAllChars.length) {
                        aCharFilters = aAllChars.map(function (oChar) {
                            return new sap.ui.model.Filter("CHAR_DESC", sap.ui.model.FilterOperator.EQ, oChar.key);
                        });
                    }

                    // Include selected Unique IDs
                    var aUniqueIds = that.byId("idUniqueID").getSelectedKeys() || [];
                    if (aUniqueIds.length) {
                        var oUidFilter = new sap.ui.model.Filter({
                            filters: aUniqueIds.map(function (uid) {
                                return new sap.ui.model.Filter("UNIQUE_ID", sap.ui.model.FilterOperator.EQ, uid);
                            }),
                            and: false
                        });
                        aCharFilters.push(oUidFilter);
                    }

                    // Call existing characteristic chart loader
                    // that._loadChartData(aCharFilters);
                    // that._selectAllCharacteristics();

                    // setTimeout(function () {
                    //     that._bInitialLoadInProgress = false;
                    //     console.log("✅ Initial GO load complete - _bInitialLoadInProgress = false");
                    // }, 1500);
                },


                error: function (oError) {
                    console.error("Error fetching CirGen data", oError);
                    that._bInitialLoadInProgress = false;
                    sap.m.MessageToast.show("Error loading chart data");
                }
            });
        },










        onDependentSelectionChange: function () {
            var oModel = this.getView().getModel();
            var that = this;
            var sLocation = this.byId("idLocation").getSelectedKey();

            // Step 1: Config Products (filter out empty)
            var sConfigProducts = this.byId("idConfigProduct").getSelectedKey()
            var aConfigProducts = sConfigProducts ? [sConfigProducts] : [];

            // if (!aConfigProducts.length) {
            //     MessageToast.show("Please select a Configuration Product first.");
            //     return;
            // }

            // Step 2: Date range
            var oStartDate = this.byId("DRS1").getDateValue();
            var oEndDate = this.byId("DRS1").getSecondDateValue();

            if (!oStartDate || !oEndDate) {
                MessageToast.show("Please select a valid date range.");
                return;
            }

            // 🔹 Config filter (OR group)
            var oConfigFilter = new sap.ui.model.Filter({
                filters: aConfigProducts.map(cp =>
                    new sap.ui.model.Filter("CONFIGURATION_PRODUCT", sap.ui.model.FilterOperator.EQ, cp)
                ),
                and: false
            });

            // 🔹 Location filter
            var oLocationFilter = new sap.ui.model.Filter("LOCATION_ID", sap.ui.model.FilterOperator.EQ, sLocation);

            // 🔹 Final filter for PlannedOrdAnalysis to get Products and Unique IDs
            var oFinalFilter = new sap.ui.model.Filter({
                filters: [oLocationFilter, oConfigFilter],
                and: true
            });

            // Step 3: Fetch PlannedOrdAnalysis
            oModel.read("/getPlannedOrdAnalysis", {
                filters: [oFinalFilter],
                success: function (oData) {
                    if (!oData.results.length) {
                        MessageToast.show("No data found for selected configuration.");
                        return;
                    }

                    // Extract unique Product IDs
                    var aProductIds = [...new Set(
                        oData.results
                            .map(item => item.PRODUCT_ID)
                            .filter(pid => pid !== null && pid !== undefined && String(pid).trim() !== "")
                    )];

                    if (!aProductIds.length) {
                        MessageToast.show("No valid Product IDs found.");
                        return;
                    }

                    // Automatically extract all Unique IDs for these products
                    var aAllUniqueIds = [...new Set(
                        oData.results
                            .filter(item => aProductIds.includes(item.PRODUCT_ID))
                            .map(item => item.UNIQUE_ID)
                            .filter(uid => uid !== null && uid !== undefined && String(uid).trim() !== "") // ✅ convert to string before trim
                    )];

                    // --- Step 4: Build filters for CirGen chart
                    var aFilters = [];

                    // Location filter
                    aFilters.push(new sap.ui.model.Filter("LOCATION_ID", sap.ui.model.FilterOperator.EQ, sLocation));

                    // Product ID filter (OR)
                    aFilters.push(new sap.ui.model.Filter({
                        filters: aProductIds.map(p => new sap.ui.model.Filter("PRODUCT_ID", sap.ui.model.FilterOperator.EQ, p)),
                        and: false
                    }));

                    // Unique ID filter (OR) – all unique IDs for the selected products
                    if (aAllUniqueIds.length) {
                        aFilters.push(new sap.ui.model.Filter({
                            filters: aAllUniqueIds.map(u => new sap.ui.model.Filter("UNIQUE_ID", sap.ui.model.FilterOperator.EQ, u)),
                            and: false
                        }));
                    }

                    // Date range
                    aFilters.push(new sap.ui.model.Filter("WEEK_DATE", sap.ui.model.FilterOperator.BT, oStartDate, oEndDate));

                    // --- Step 5: Read CirGen and update chart
                    // oModel.read("/getCirGen", {
                    //     filters: aFilters,
                    //     success: function (oCirData) {
                    //         var aChartData = oCirData.results.map(item => ({
                    //             Product: item.PRODUCT_ID,
                    //             Actual: item.ACTUAL_QTY,
                    //             Forecast: item.UNCONSUMED_FORECAST
                    //         }));

                    //         var oChartModel = new sap.ui.model.json.JSONModel({ chartData: aChartData });
                    //         that.byId("idVizFrame").setModel(oChartModel);

                    //         console.log("CirGen loaded:", aChartData.length, "records");
                    //     },
                    //     error: function (oError) {
                    //         console.error("Error fetching CirGen data", oError);
                    //     }
                    // });

                }.bind(this),
                error: function (oError) {
                    console.error("Error fetching PlannedOrdAnalysis data", oError);
                }
            });
        },






        loadCharacteristics: function (aSelectedConfigProducts, aUniqueIds) {
            var sLocationId = this.byId("idLocation").getSelectedKey();
            var sSelectedConfigProduct = this.byId("idConfigProduct").getSelectedKey();
            var aSelectedConfigProducts = sSelectedConfigProduct ? [sSelectedConfigProduct] : [];
            var sProducts = this.byId("idProduct").getSelectedKey();
            var aProducts = sProducts ? [sProducts] : [];
            var aModelVersions = this.byId("idModelVersion").getSelectedKeys().filter(mv => mv && mv.trim() !== "");
            aModelVersions = aModelVersions.length ==0? '':aModelVersions;
            // var aUniqueIds = this.byId("idUniqueID").getSelectedKeys().filter(uid => uid && uid.trim() !== "");
            // var aUniqueIds = this.byId("idUniqueID").getSelectedKeys().filter(uid => uid && uid.trim() !== "");

            if (!aSelectedConfigProducts || !aSelectedConfigProducts.length) {
                // No config product selected → clear CHAR_DESC
                this.byId("idCharacteristics").setModel(new sap.ui.model.json.JSONModel({ Characteristics: [] }), "charModel");
                console.log("No config products selected, cleared CHAR_DESC.");
                return;
            }

            this.showBusyIndicator(true);

            var aFilters = [];

            // Location filter
            if (sLocationId) {
                aFilters.push(new sap.ui.model.Filter("LOCATION_ID", sap.ui.model.FilterOperator.EQ, sLocationId));
            }

            // Config product filter (OR)
            // aFilters.push(new sap.ui.model.Filter({
            //     filters: aSelectedConfigProducts.map(cp =>
            //         new sap.ui.model.Filter("CONFIGURATION_PRODUCT", sap.ui.model.FilterOperator.EQ, cp)
            //     ),
            //     and: false
            // }));

            if (sSelectedConfigProduct) {
                aFilters.push(new sap.ui.model.Filter("CONFIGURATION_PRODUCT", sap.ui.model.FilterOperator.EQ, sSelectedConfigProduct));
            }

            if (sProducts) {
                aFilters.push(new sap.ui.model.Filter("PRODUCT_ID", sap.ui.model.FilterOperator.EQ, sProducts));
            }

            // if (aModelVersions) {
            //     aFilters.push(new sap.ui.model.Filter("MODEL_VERSION", sap.ui.model.FilterOperator.EQ, aModelVersions));
            // }

            // Other dependent filters
            // if (aProducts.length) {
            //     aFilters.push(new sap.ui.model.Filter({
            //         filters: aProducts.map(p =>
            //             new sap.ui.model.Filter("PRODUCT_ID", sap.ui.model.FilterOperator.EQ, p)
            //         ),
            //         and: false
            //     }));
            // }

            // if (aModelVersions.length) {
            //     aFilters.push(new sap.ui.model.Filter({
            //         filters: aModelVersions.map(mv =>
            //             new sap.ui.model.Filter("MODEL_VERSION", sap.ui.model.FilterOperator.EQ, mv)
            //         ),
            //         and: false
            //     }));
            // }

            // if (aUniqueIds && aUniqueIds.length) {
            //     aFilters.push(new sap.ui.model.Filter({
            //         filters: aUniqueIds.map(uid =>
            //             new sap.ui.model.Filter("UNIQUE_ID", sap.ui.model.FilterOperator.EQ, uid)
            //         ),
            //         and: false
            //     }));
            // }

            // Read CHAR_DESC from OData
            var oModel = this.getView().getModel();
            oModel.read("/getPlannedOrdAnalysis", {
                urlParameters: { $apply: `filter(LOCATION_ID eq '${sLocationId}' and CONFIGURATION_PRODUCT eq '${sSelectedConfigProduct}' and PRODUCT_ID eq '${sProducts}')/groupby((CHAR_DESC,CHAR_NUM))`,
                    //"$select": "CHAR_DESC, CHAR_NUM",
                     "$top": 100000 },
                // filters: aFilters,
                success: function (oData) {
                    // Get unique CHAR_DESC values
                    // var aUniqueChars = [...new Set(oData.results.map(item => item.CHAR_DESC).filter(Boolean))];
                    // var aUniqueChars = [...new Set(
                    //     oData.results
                    //         .map(item => item.CHAR_DESC && item.CHAR_NUM)
                    //         .filter(Boolean)
                    // )];
                    // var aUniqueChars = Array.from(
                    //     new Map(
                    //         oData.results.map(item => [`${item.CHAR_DESC}_${item.CHAR_NUM}`, item])
                    //     ).values()
                    // );
                    var aFormatted = oData.results.map(function (c) { return { key: c.CHAR_DESC, text: c.CHAR_DESC,desc:c.CHAR_NUM }; });



                    // Prepend "Select All"
                    aFormatted.unshift({ key: "ALL", text: "Select All" });

                    // Bind CHAR_DESC to dropdown
                    this.byId("idCharacteristics").setModel(new sap.ui.model.json.JSONModel({ Characteristics: aFormatted }), "charModel");

                    that._selectAllCharacteristics();

                    console.log("CHAR_DESC loaded:", aFormatted.length);
                    // this.showBusyIndicator(false);

                }.bind(this),
                error: function (oError) {
                    console.error("Error loading characteristics:", oError);
                    this.showErrorMessage("Failed to load characteristics");
                    this.showBusyIndicator(false);
                }.bind(this)
            });
        },


        _loadChartDataForCharacteristics: function (aCharKeys) {
            if (!aCharKeys || !aCharKeys.length) {
                // Clear chart if no characteristics selected
                var oChart = this.byId("idCharChart");
                oChart.setModel(new sap.ui.model.json.JSONModel({ CharData: [] }));
                return;
            }

            // Build OR filter for selected characteristics
            var aFilters = aCharKeys.map(function (sChar) {
                return new sap.ui.model.Filter("CHAR_DESC", sap.ui.model.FilterOperator.EQ, sChar);
            });

            var oCombinedCharFilter = new sap.ui.model.Filter({
                filters: aFilters,
                and: false
            });

            // Call your existing _loadChartData function with the combined filter
            this._loadChartData([oCombinedCharFilter]);
        },



        onCharSelectAll: function(oEvent) {
            var oList =that.byId("idCharacteristics")// oEvent.getSource();
                var aSelectedItems = oList.getSelectedItems();
                var oSelectAllItem = oList.getItems().find(i => i.getTitle() === "Select All");
                var aAllItemsExceptSelectAll = oList.getItems().filter(i => i.getTitle() !== "Select All");

                if (oEvent.getParameter("listItem") === oSelectAllItem) {
                    if (oSelectAllItem.getSelected()) {
                        that.SelectedAll = true;
                        aAllItemsExceptSelectAll.forEach(item => oList.setSelectedItem(item, true));
                        var aAllCharKeys = aAllItemsExceptSelectAll.map(item => item.getTitle());
                        // this._loadValuesAndUniqueIDs(aAllCharKeys);
                        // this._loadAllUniqueIDsForAllCharacteristics(aAllCharKeys);
                        // this._loadValuesAndUniqueIDs(aAllCharKeys);
                    } else {
                        aAllItemsExceptSelectAll.forEach(item => oList.setSelectedItem(item, false));
                        var oCharValNum = this.byId("idCharValNum");
                        var oCharChart = this.byId("idCharChart");

                        if (oCharValNum) {
                            oCharValNum.unbindItems();
                            oCharValNum.setModel(new sap.ui.model.json.JSONModel({ CharValNum: [] }), "charValModel");
                        }

                        if (oCharChart) {
                            oCharChart.unbindElement();
                            oCharChart.setModel(new sap.ui.model.json.JSONModel({ CharData: [] }));
                        }
                        // this._clearUniqueIDSelection();
                    }
                }
        },

        // Replace your existing onCharacteristicChange function with this:

        onCharacteristicChange: function (oEvent) {


            this._bCharSelectionInProgress = true;

            try {
                var oList =that.byId("idCharacteristics")// oEvent.getSource();
                var aSelectedItems = oList.getSelectedItems();
                var oSelectAllItem = oList.getItems().find(i => i.getTitle() === "Select All");
                var aAllItemsExceptSelectAll = oList.getItems().filter(i => i.getTitle() !== "Select All");

                if (oEvent.getParameter("listItem") === oSelectAllItem) {
                    if (oSelectAllItem.getSelected()) {
                        that.SelectedAll = true;
                        aAllItemsExceptSelectAll.forEach(item => oList.setSelectedItem(item, true));
                        var aAllCharKeys = aAllItemsExceptSelectAll.map(item => item.getTitle());
                       this._loadCharacteristicValues(aAllCharKeys);
                        // this._loadAllUniqueIDsForAllCharacteristics(aAllCharKeys);
                        // this._loadValuesAndUniqueIDs(aAllCharKeys);
                    } else {
                        aAllItemsExceptSelectAll.forEach(item => oList.setSelectedItem(item, false));
                        var oCharValNum = this.byId("idCharValNum");
                        var oCharChart = this.byId("idCharChart");

                        if (oCharValNum) {
                            oCharValNum.unbindItems();
                            oCharValNum.setModel(new sap.ui.model.json.JSONModel({ CharValNum: [] }), "charValModel");
                        }

                        if (oCharChart) {
                            oCharChart.unbindElement();
                            oCharChart.setModel(new sap.ui.model.json.JSONModel({ CharData: [] }));
                        }
                        // this._clearUniqueIDSelection();
                    }
                    return;
                }

                var aSelectedKeys = aSelectedItems.map(i => i.getTitle()).filter(t => t !== "Select All");

                if (oSelectAllItem && oSelectAllItem.getSelected() && aSelectedKeys.length < aAllItemsExceptSelectAll.length) {
                    oSelectAllItem.setSelected(false);
                }

                if (aSelectedKeys.length > 0) {
                    this._loadCharacteristicValues(aSelectedKeys);
                    // this._loadValuesAndUniqueIDs(aSelectedKeys);
                } else {
                    var oCharValNum = this.byId("idCharValNum");
                    var oCharChart = this.byId("idCharChart");

                    if (oCharValNum) {
                        oCharValNum.unbindItems();
                        oCharValNum.setModel(new sap.ui.model.json.JSONModel({ CharValNum: [] }), "charValModel");
                    }

                    if (oCharChart) {
                        oCharChart.unbindElement();
                        oCharChart.setModel(new sap.ui.model.json.JSONModel({ CharData: [] }));
                    }
                    // this._clearUniqueIDSelection();
                }
            } finally {
                this._bCharSelectionInProgress = false;
            }
        },


        // _loadAllUniqueIDsForAllCharacteristics: function (aSelectedCharacteristics) {
        //     if (!aSelectedCharacteristics || aSelectedCharacteristics.length === 0) {
        //         console.log("No characteristics selected.");
        //         return;
        //     }

        //     var oModel = this.getView().getModel();
        //     var sLocation = this.byId("idLocation").getSelectedKey();
        //     var sConfigProduct = this.byId("idConfigProduct").getSelectedKey();
        //     var sProduct = this.byId("idProduct").getSelectedKey();

        //     // Build base filters
        //     var aFilters = [];

        //     if (sLocation) {
        //         aFilters.push(new sap.ui.model.Filter("LOCATION_ID", sap.ui.model.FilterOperator.EQ, sLocation));
        //     }

        //     if (sConfigProduct) {
        //         aFilters.push(new sap.ui.model.Filter("CONFIGURATION_PRODUCT", sap.ui.model.FilterOperator.EQ, sConfigProduct));
        //     }

        //     if (sProduct) {
        //         aFilters.push(new sap.ui.model.Filter("PRODUCT_ID", sap.ui.model.FilterOperator.EQ, sProduct));
        //     }

        //     // Add characteristic filters (OR condition - get all characteristics)
        //     var aCharFilters = aSelectedCharacteristics.map(function (sChar) {
        //         return new sap.ui.model.Filter("CHAR_DESC", sap.ui.model.FilterOperator.EQ, sChar);
        //     });

        //     aFilters.push(new sap.ui.model.Filter({
        //         filters: aCharFilters,
        //         and: false
        //     }));

        //     this.showBusyIndicator(true);
        //     var that = this;

            

        //     // Fetch ALL Unique IDs for the selected characteristics (union - no filtering by values)
        //     oModel.read("/getPlannedOrdAnalysis", {
        //         urlParameters: {
        //             "$select": "UNIQUE_ID",
        //             "$top": 100000
        //         },
        //         filters: aFilters,
        //         success: function (oData) {
        //             // Extract all unique IDs (simple union - no intersection logic)
        //             var aAllUniqueIDs = [...new Set(
        //                 oData.results
        //                     .map(item => item.UNIQUE_ID)
        //                     .filter(uid => uid && String(uid).trim() !== "")
        //             )];

        //             console.log("Total Unique IDs loaded for all characteristics:", aAllUniqueIDs.length);

        //             // Update Unique ID dropdown model
        //             var oDepModel = that.getView().getModel("dependentModel");
        //             if (!oDepModel) {
        //                 oDepModel = new sap.ui.model.json.JSONModel({});
        //                 that.getView().setModel(oDepModel, "dependentModel");
        //             }

        //             var aFormattedIDs = aAllUniqueIDs.map(uid => ({ key: uid, text: String(uid) }));

        //             var currentData = oDepModel.getData() || {};
        //             currentData.UniqueIDs = aFormattedIDs;
        //             oDepModel.setData(currentData);

        //             // Set flag before selecting to prevent onUniqueIDChange from firing
        //             that._bCharValProgrammatic = true;
        //             that._bUniqueIDSelectionInProgress = true;

        //             var oUniqueIDControl = that.byId("idUniqueID");

        //             // Auto-select ALL unique IDs
        //             oUniqueIDControl.setSelectedKeys(aAllUniqueIDs);

        //             // Refresh the control to show the selected items
        //             if (oUniqueIDControl.getBinding("items")) {
        //                 oUniqueIDControl.getBinding("items").refresh();
        //             }

        //             console.log("✅ Auto-selected and bound all Unique IDs to input field:", aAllUniqueIDs.length);

        //             // Delay before releasing flags and proceeding with charts
        //             setTimeout(function () {
        //                 that._bCharValProgrammatic = false;
        //                 that._bUniqueIDSelectionInProgress = false;

        //                 // Load charts with all unique IDs
        //                 // that._autoLoadProductChart(aAllUniqueIDs);

        //                 // Load characteristic value chart
        //                 var aCharFilters = aSelectedCharacteristics.map(function (sChar) {
        //                     return new sap.ui.model.Filter("CHAR_DESC", sap.ui.model.FilterOperator.EQ, sChar);
        //                 });

        //                 // that._loadChartData(aCharFilters);

        //                 that.showBusyIndicator(false);
        //             }, 200);

        //         }.bind(this),
        //         error: function (oError) {
        //             console.error("Error loading Unique IDs for all characteristics:", oError);
        //             that.showBusyIndicator(false);
        //         }.bind(this)
        //     });
        // },

        _loadValuesAndUniqueIDs: function (aSelectedCharacteristics) {
            var oModel = this.getView().getModel();
            var sLocationId = this.byId("idLocation").getSelectedKey();
            var sConfigProduct = this.byId("idConfigProduct").getSelectedKey();
            var sProduct = this.byId("idProduct").getSelectedKey();

            // Build filters
            var aFilters = [];

            if (sLocationId) {
                aFilters.push(new sap.ui.model.Filter("LOCATION_ID", sap.ui.model.FilterOperator.EQ, sLocationId));
            }

            if (sConfigProduct) {
                aFilters.push(new sap.ui.model.Filter("CONFIGURATION_PRODUCT", sap.ui.model.FilterOperator.EQ, sConfigProduct));
            }

            if (sProduct) {
                aFilters.push(new sap.ui.model.Filter("PRODUCT_ID", sap.ui.model.FilterOperator.EQ, sProduct));
            }

            // Add characteristic filters
            if (aSelectedCharacteristics && aSelectedCharacteristics.length) {
                aFilters.push(new sap.ui.model.Filter({
                    filters: aSelectedCharacteristics.map(char =>
                        new sap.ui.model.Filter("CHAR_DESC", sap.ui.model.FilterOperator.EQ, char)
                    ),
                    and: false
                }));
            }

            this.showBusyIndicator(true);
            var that = this;

            // STEP 1: Fetch all characteristic values for selected characteristics
            oModel.read("/getPlannedOrdAnalysis", {
                urlParameters: { "$select": "CHAR_DESC,CHAR_CHARVALUE", "$top": 100000 },
                filters: aFilters,
                success: function (oData) {
                    // Extract unique characteristic values
                    var aCharValues=[];
                    oData.results.forEach(i=>{
                       var obj={
                            CHAR_CHARVALUE:i.CHAR_CHARVALUE,
                            CHAR_NUM:i.CHAR_NUM
                        }
                        aCharValues.push(obj)
                    })
                    // var aUniqueCharValues = [...new Set(
                    //     aCharValues
                    //         .map(item => item.CHAR_CHARVALUE && item.CHAR_NUM)
                    //         .filter(Boolean)
                    // )];
                    const aUniqueCharValues = Array.from(
                        new Set(aCharValues.map(o => JSON.stringify(o)))
                    ).map(str => JSON.parse(str));
                    console.log("Characteristic values loaded:", aUniqueCharValues.length);

                    // STEP 2: Populate idCharValNum with these values
                    var aFormattedValues = aUniqueCharValues.map(val => ({ key: val.CHAR_CHARVALUE, text: val.CHAR_CHARVALUE,desc:val.CHAR_NUM }));
                    aFormattedValues.unshift({ key: "ALL", text: "Select All",desc:"Select All" });

                    var oCharValModel = new sap.ui.model.json.JSONModel({ CharValNum: aFormattedValues });
                    var oCharValCtrl = that.byId("idCharValNum");
                    oCharValCtrl.setModel(oCharValModel, "charValModel");

                    // STEP 2b: Bind items to the list
                    oCharValCtrl.bindItems({
                        path: "charValModel>/CharValNum",
                        template: new sap.m.StandardListItem({
                            title: "{charValModel>text}",
                         
                        })
                    });

                    // Small delay to ensure binding is complete before selecting items
                    setTimeout(function () {
                        // STEP 3: Auto-select all characteristic values
                        var aAllValueItems = oCharValCtrl.getItems().filter(i => i.getTitle() !== "Select All");
                        aAllValueItems.forEach(item => oCharValCtrl.setSelectedItem(item, true));

                        var oSelectAllItem = oCharValCtrl.getItems().find(i => i.getTitle() === "Select All");
                        if (oSelectAllItem) oSelectAllItem.setSelected(true);

                        console.log("Auto-selected all characteristic values:", aAllValueItems.length);

                        // STEP 4: Load unique IDs based on selected characteristics and their values
                        that._loadUniqueIDsForCharacteristicValues(aSelectedCharacteristics, aUniqueCharValues);

                        // STEP 5: Render characteristic value chart
                        var aCharFilters = aSelectedCharacteristics.map(function (sChar) {
                            return new sap.ui.model.Filter("CHAR_DESC", sap.ui.model.FilterOperator.EQ, sChar);
                        });

                        var aAllCharValFilters = aUniqueCharValues.map(function (sVal) {
                            return new sap.ui.model.Filter("CHAR_CHARVALUE", sap.ui.model.FilterOperator.EQ, sVal);
                        });

                        aCharFilters.push(new sap.ui.model.Filter({
                            filters: aAllCharValFilters,
                            and: false
                        }));

                        that._loadChartData(aCharFilters);
                    }, 100);

                    // // STEP 4: Load unique IDs based on selected characteristics and their values
                    // that._loadUniqueIDsForCharacteristicValues(aSelectedCharacteristics, aUniqueCharValues);

                },
                error: function (oError) {
                    console.error("Error loading characteristic values:", oError);
                    that.showBusyIndicator(false);
                }
            });
        },

        // NEW FUNCTION: Load and auto-select Unique IDs based on selected characteristics
        _loadUniqueIDsForCharacteristics: function (aSelectedCharacteristics) {
            if (!aSelectedCharacteristics || aSelectedCharacteristics.length === 0) {
                return;
            }

            var oModel = this.getView().getModel();
            var sLocation = this.byId("idLocation").getSelectedKey();
            var sConfigProduct = this.byId("idConfigProduct").getSelectedKey();
            var sProduct = this.byId("idProduct").getSelectedKey();

            // Build filters
            var aFilters = [];

            if (sLocation) {
                aFilters.push(new sap.ui.model.Filter("LOCATION_ID", sap.ui.model.FilterOperator.EQ, sLocation));
            }

            if (sConfigProduct) {
                aFilters.push(new sap.ui.model.Filter("CONFIGURATION_PRODUCT", sap.ui.model.FilterOperator.EQ, sConfigProduct));
            }

            if (sProduct) {
                aFilters.push(new sap.ui.model.Filter("PRODUCT_ID", sap.ui.model.FilterOperator.EQ, sProduct));
            }

            // Add characteristic filters (OR condition)
            var aCharFilters = aSelectedCharacteristics.map(function (sChar) {
                return new sap.ui.model.Filter("CHAR_DESC", sap.ui.model.FilterOperator.EQ, sChar);
            });

            aFilters.push(new sap.ui.model.Filter({
                filters: aCharFilters,
                and: false
            }));

            this.showBusyIndicator(true);

            // Fetch Unique IDs for the selected characteristics
            oModel.read("/getPlannedOrdAnalysis", {
                urlParameters: {
                    "$select": "UNIQUE_ID",
                    "$top": 100000
                },
                filters: aFilters,
                success: function (oData) {
                    // Extract unique IDs
                    var aUniqueIDs = [...new Set(
                        oData.results
                            .map(item => item.UNIQUE_ID)
                            .filter(uid => uid && String(uid).trim() !== "")
                    )];

                    console.log("Unique IDs found for characteristics:", aUniqueIDs.length);

                    // Update Unique ID dropdown model
                    var oDepModel = this.getView().getModel("dependentModel");
                    if (!oDepModel) {
                        oDepModel = new sap.ui.model.json.JSONModel({});
                        this.getView().setModel(oDepModel, "dependentModel");
                    }

                    var aFormattedIDs = aUniqueIDs.map(uid => ({ key: uid, text: String(uid) }));
                    aFormattedIDs.unshift({ key: "ALL", text: "Select All" });

                    var currentData = oDepModel.getData() || {};
                    currentData.UniqueIDs = aFormattedIDs;
                    oDepModel.setData(currentData);

                    // Auto-select all the Unique IDs
                    var oUniqueIDControl = this.byId("idUniqueID");
                    var aKeysToSelect = aUniqueIDs; // Select all except "ALL"
                    oUniqueIDControl.setSelectedKeys(aKeysToSelect);

                    console.log("Auto-selected Unique IDs:", aKeysToSelect.length);

                    // Automatically trigger the chart load with selected Unique IDs
                    this._autoLoadProductChart(aKeysToSelect);

                    this.showBusyIndicator(false);
                }.bind(this),
                error: function (oError) {
                    console.error("Error loading Unique IDs for characteristics:", oError);
                    this.showBusyIndicator(false);
                }.bind(this)
            });
        },

        // NEW FUNCTION: Auto-load product chart without clicking GO button
        _autoLoadProductChart: function (aUniqueIDs) {
            var oModel = this.getView().getModel();
            var sLocation = this.byId("idLocation").getSelectedKey();
            var sProduct = this.byId("idProduct").getSelectedKey();
            var oStartDate = this.byId("DRS1").getDateValue();
            var oEndDate = this.byId("DRS1").getSecondDateValue();

            // Validate mandatory fields
            if (!sLocation || !sProduct || !oStartDate || !oEndDate || !aUniqueIDs.length) {
                console.log("Cannot auto-load chart: missing mandatory fields");
                return;
            }

            // Build filters
            var aFilters = [
                new sap.ui.model.Filter("LOCATION_ID", sap.ui.model.FilterOperator.EQ, sLocation),
                new sap.ui.model.Filter("PRODUCT_ID", sap.ui.model.FilterOperator.EQ, sProduct),
                new sap.ui.model.Filter("WEEK_DATE", sap.ui.model.FilterOperator.BT, oStartDate, oEndDate)
            ];

            // Add Unique ID filter (OR condition)
            if (aUniqueIDs && aUniqueIDs.length > 0) {
                var oUidFilter = new sap.ui.model.Filter({
                    filters: aUniqueIDs.map(function (uid) {
                        return new sap.ui.model.Filter("UNIQUE_ID", sap.ui.model.FilterOperator.EQ, uid);
                    }),
                    and: false
                });
                aFilters.push(oUidFilter);
            }

            var that = this;

            // Read CirGen and build chart (same as your onApplyFilters)
            oModel.read("/getCirGen", {
                filters: aFilters,
                success: function (oData) {
                    if (!oData.results.length) {
                        console.log("No data found for auto-load chart");
                        return;
                    }

                    // Group by Product and sum all UNIQUE_ID values
                    var groupedData = {};

                    oData.results.forEach(function (item) {
                        var productId = item.PRODUCT_ID;

                        if (!groupedData[productId]) {
                            groupedData[productId] = {
                                Product: productId,
                                Actual: 0,
                                Forecast: 0,
                                uniqueIds: []
                            };
                        }

                        groupedData[productId].Actual += (item.ACTUAL_QTY || 0);
                        groupedData[productId].Forecast += (item.UNCONSUMED_FORECAST || 0);

                        if (item.UNIQUE_ID && !groupedData[productId].uniqueIds.includes(item.UNIQUE_ID)) {
                            groupedData[productId].uniqueIds.push(item.UNIQUE_ID);
                        }
                    });

                    // Convert to array and add totals
                    var aChartData = Object.values(groupedData).map(function (item) {
                        return {
                            Product: item.Product,
                            Actual: item.Actual,
                            Forecast: item.Forecast,
                            Total: item.Actual + item.Forecast
                        };
                    });

                    var oChartModel = new sap.ui.model.json.JSONModel({
                        chartData: aChartData
                    });

                    var oVizFrame = that.byId("idVizFrame");
                    oVizFrame.setModel(oChartModel);

                    // Configure the VizFrame for stacked bars
                    var oDataset = new sap.viz.ui5.data.FlattenedDataset({
                        dimensions: [{
                            name: "Product",
                            value: "{Product}"
                        }],
                        measures: [
                            { name: "Actual", value: "{Actual}" },
                            { name: "Forecast", value: "{Forecast}" }
                        ],
                        data: { path: "/chartData" }
                    });

                    oVizFrame.setDataset(oDataset);
                    oVizFrame.setVizType("stacked_bar");
                    oVizFrame.removeAllFeeds();

                    oVizFrame.addFeed(new sap.viz.ui5.controls.common.feeds.FeedItem({
                        uid: "categoryAxis",
                        type: "Dimension",
                        values: ["Product"]
                    }));

                    oVizFrame.addFeed(new sap.viz.ui5.controls.common.feeds.FeedItem({
                        uid: "valueAxis",
                        type: "Measure",
                        values: [ "Forecast","Actual"]
                    }));

                    oVizFrame.setVizProperties({
                        plotArea: {
                            isStacked: true,
                            dataLabel: {
                                visible: true,
                                showTotal: true,
                                formatString: "#,##0",
                                style: {
                                    color: "#333333",
                                    fontSize: "11px"
                                }
                            },
                            colorPalette: ["#FFC107", "#809e57"],
                            dataPointStyle: {
                                rules: [
                                    {
                                        dataContext: { Actual: "*" },
                                        properties: { color: "#FFC107" },
                                        displayName: "Actual"
                                    },
                                    {
                                        dataContext: { Forecast: "*" },
                                        properties: { color: "#809e57" },
                                        displayName: "Forecast"
                                    }
                                ]
                            }
                        },
                        valueAxis: {
                            label: { formatString: "#,##0" },
                            title: { visible: true, text: "Quantity" }
                        },
                        categoryAxis: {
                            title: { visible: true, text: "Product" }
                        },
                        legend: { visible: true, title: { visible: false } },
                        title: { visible: false, text: "Actual vs Forecast (Auto-loaded)" },
                        interaction: { selectability: { mode: "exclusive" } }
                    });

                    console.log("Product chart auto-loaded with", aChartData.length, "records");
                },
                error: function (oError) {
                    console.error("Error auto-loading chart:", oError);
                }
            });
        },

        // NEW FUNCTION: Clear Unique ID selection
        _clearUniqueIDSelection: function () {
            var oUniqueIDControl = this.byId("idUniqueID");
            if (oUniqueIDControl) {
                // oUniqueIDControl.setSelectedKeys([]);
            }

            // Clear the product chart
            var oVizFrame = this.byId("idVizFrame");
            if (oVizFrame) {
                oVizFrame.setModel(new sap.ui.model.json.JSONModel({ chartData: [] }));
            }

            console.log("Unique IDs cleared");
        },


        _loadUniqueIDsForCharacteristicValues: function (aSelectedCharacteristics, aSelectedCharValues) {
            // GUARD: Exit if no characteristics selected
            if (!aSelectedCharacteristics || aSelectedCharacteristics.length === 0) {
                console.log("No characteristics selected. Exiting.");
                return;
            }

            // CASE 1: Only 1 characteristic selected
            if (aSelectedCharacteristics.length === 1) {
                console.log("Only 1 characteristic selected. Loading Unique IDs for:", aSelectedCharacteristics[0], "with values:", aSelectedCharValues);
                // Pass both the characteristic AND the selected values
                this._loadAllUniqueIDsForSingleCharacteristic(aSelectedCharacteristics[0], aSelectedCharValues);
                return;
            }

            // CASE 2: 2 or more characteristics selected - Use intersection logic
            console.log("Multiple characteristics selected. Using intersection logic.");

            var oModel = this.getView().getModel();
            var sLocation = this.byId("idLocation").getSelectedKey();
            var sConfigProduct = this.byId("idConfigProduct").getSelectedKey();
            var sProduct = this.byId("idProduct").getSelectedKey();

            // Build base filters
            var aFilters = [];

            if (sLocation) {
                aFilters.push(new sap.ui.model.Filter("LOCATION_ID", sap.ui.model.FilterOperator.EQ, sLocation));
            }

            if (sConfigProduct) {
                aFilters.push(new sap.ui.model.Filter("CONFIGURATION_PRODUCT", sap.ui.model.FilterOperator.EQ, sConfigProduct));
            }

            if (sProduct) {
                aFilters.push(new sap.ui.model.Filter("PRODUCT_ID", sap.ui.model.FilterOperator.EQ, sProduct));
            }

            // Add characteristic filters (OR condition)
            var aCharFilters = aSelectedCharacteristics.map(function (sChar) {
                return new sap.ui.model.Filter("CHAR_DESC", sap.ui.model.FilterOperator.EQ, sChar);
            });

            aFilters.push(new sap.ui.model.Filter({
                filters: aCharFilters,
                and: false
            }));

            // If characteristic values are provided, add them to the filter
            if (aSelectedCharValues && aSelectedCharValues.length > 0) {
                var aCharValFilters = aSelectedCharValues.map(function (sVal) {
                    return new sap.ui.model.Filter("CHAR_CHARVALUE", sap.ui.model.FilterOperator.EQ, sVal);
                });

                aFilters.push(new sap.ui.model.Filter({
                    filters: aCharValFilters,
                    and: false
                }));
            }

            this.showBusyIndicator(true);

            // Fetch all possible values for the selected characteristics to check if all are selected
            var that = this;
            var oCharValCtrl = this.byId("idCharValNum");
            var aAllCharValItems = oCharValCtrl ? oCharValCtrl.getItems().filter(i => i.getTitle() !== "Select All") : [];
            var aAllCharValTitles = aAllCharValItems.map(i => i.getTitle());
            var aCurrentlySelectedValues = aSelectedCharValues ? aSelectedCharValues : [];

            // Check if ALL available characteristic values are selected
            var bAllValuesSelected = aAllCharValTitles.length > 0 && aCurrentlySelectedValues.length === aAllCharValTitles.length &&
                aAllCharValTitles.every(function (val) {
                    return aCurrentlySelectedValues.includes(val);
                });

            console.log("✅ 2+ characteristics selected. All values selected:", bAllValuesSelected, "Total available:", aAllCharValTitles.length, "Selected:", aCurrentlySelectedValues.length);

            // Fetch Unique IDs for the selected characteristics and their values
            oModel.read("/getPlannedOrdAnalysis", {
                urlParameters: {
                    "$select": "UNIQUE_ID,CHAR_DESC,CHAR_CHARVALUE",
                    "$top": 100000
                },
                filters: aFilters,
                success: function (oData) {
                    var aCommonUniqueIDs = [];

                    // If ALL characteristic values are selected, show all unique IDs (union)
                    if (bAllValuesSelected) {
                        var allIds = new Set();
                        oData.results.forEach(function (item) {
                            var uniqueId = item.UNIQUE_ID;
                            if (uniqueId && String(uniqueId).trim() !== "") {
                                allIds.add(uniqueId);
                            }
                        });
                        aCommonUniqueIDs = Array.from(allIds);
                        console.log("All values selected. Showing union of all IDs:", aCommonUniqueIDs.length);
                    }
                    // If some values are deselected, use intersection logic
                    else {
                        // Group Unique IDs by Characteristic-Value pair
                        var idsByCharValue = {};

                        oData.results.forEach(function (item) {
                            var charKey = item.CHAR_DESC + "|" + item.CHAR_CHARVALUE;
                            var uniqueId = item.UNIQUE_ID;

                            if (uniqueId && String(uniqueId).trim() !== "") {
                                if (!idsByCharValue[charKey]) {
                                    idsByCharValue[charKey] = new Set();
                                }
                                idsByCharValue[charKey].add(uniqueId);
                            }
                        });

                        // Get all selected Characteristic-Value combinations
                        var aSelectedCharValuePairs = [];
                        Object.keys(idsByCharValue).forEach(function (pair) {
                            aSelectedCharValuePairs.push(pair);
                        });

                        console.log("Selected Char-Value pairs:", aSelectedCharValuePairs.length);

                        // Start with IDs from the first characteristic-value pair
                        if (aSelectedCharValuePairs.length > 0) {
                            var firstPair = aSelectedCharValuePairs[0];
                            aCommonUniqueIDs = Array.from(idsByCharValue[firstPair]);

                            // Intersect with IDs from ALL remaining characteristic-value pairs
                            // All selected values must have the ID in common
                            for (var i = 1; i < aSelectedCharValuePairs.length; i++) {
                                var currentPair = aSelectedCharValuePairs[i];
                                var currentSet = idsByCharValue[currentPair];

                                // Keep only IDs that exist in BOTH the current intersection AND this pair
                                aCommonUniqueIDs = aCommonUniqueIDs.filter(function (uid) {
                                    return currentSet.has(uid);
                                });

                                // If intersection becomes empty, stop further processing
                                if (aCommonUniqueIDs.length === 0) {
                                    var oVizFrame = this.byId("idVizFrame");
                                    if (oVizFrame) {
                                        oVizFrame.setModel(new sap.ui.model.json.JSONModel({ chartData: [] }));
                                    }
                                    var oCharChart = this.byId("idCharChart");
                                    if (oCharChart) {
                                        oCharChart.setModel(new sap.ui.model.json.JSONModel({ CharData: [] }));
                                    }

                                    break;
                                }
                            }
                        }

                        console.log("Some values deselected. Intersection Unique IDs across ALL selected values:", aCommonUniqueIDs.length);
                    }

                    // Update Unique ID dropdown model
                    var oDepModel = this.getView().getModel("dependentModel");
                    if (!oDepModel) {
                        oDepModel = new sap.ui.model.json.JSONModel({});
                        this.getView().setModel(oDepModel, "dependentModel");
                    }

                    var aFormattedIDs = aCommonUniqueIDs.map(uid => ({ key: uid, text: String(uid) }));
                    aFormattedIDs.unshift({ key: "ALL", text: "Select All" });

                    var currentData = oDepModel.getData() || {};
                    currentData.UniqueIDs = aFormattedIDs;
                    oDepModel.setData(currentData);

                    // Set flag before selecting to prevent onUniqueIDChange from firing
                    that._bCharValProgrammatic = true;

                    var oUniqueIDControl = this.byId("idUniqueID");
                    var aKeysToSelect = aCommonUniqueIDs;
                    oUniqueIDControl.setSelectedKeys(aKeysToSelect);

                    console.log("Auto-selected Unique IDs:", aKeysToSelect.length);

                    // Delay before releasing the flags and proceeding
                    if (aCommonUniqueIDs.length !== 0) {
                    setTimeout(function () {
                        that._bCharValProgrammatic = false;

                        // Now proceed with chart loading
                        that._autoLoadProductChart(aKeysToSelect);
                        that._loadChartDataForCharValues(aKeysToSelect);
                    }, 200);
                }
                that.showBusyIndicator(false);

                }.bind(this),
                error: function (oError) {
                    console.error("Error loading Unique IDs for characteristic values:", oError);
                    that.showBusyIndicator(false);
                }.bind(this)
            });
        },


        // MODIFIED: Also render characteristic value chart along with product chart
        _loadAllUniqueIDsForSingleCharacteristic: function (sSelectedCharacteristic, aSelectedCharValues) {
            var oModel = this.getView().getModel();
            var sLocation = this.byId("idLocation").getSelectedKey();
            var sConfigProduct = this.byId("idConfigProduct").getSelectedKey();
            var sProduct = this.byId("idProduct").getSelectedKey();

            var aFilters = [];

            if (sLocation) {
                aFilters.push(new sap.ui.model.Filter("LOCATION_ID", sap.ui.model.FilterOperator.EQ, sLocation));
            }

            if (sConfigProduct) {
                aFilters.push(new sap.ui.model.Filter("CONFIGURATION_PRODUCT", sap.ui.model.FilterOperator.EQ, sConfigProduct));
            }

            if (sProduct) {
                aFilters.push(new sap.ui.model.Filter("PRODUCT_ID", sap.ui.model.FilterOperator.EQ, sProduct));
            }

            // Add filter for the single characteristic
            aFilters.push(new sap.ui.model.Filter("CHAR_DESC", sap.ui.model.FilterOperator.EQ, sSelectedCharacteristic));

            // NEW: If specific characteristic values are provided, filter by them
            if (aSelectedCharValues && aSelectedCharValues.length > 0) {
                var aCharValueFilters = aSelectedCharValues.map(function (sValue) {
                    return new sap.ui.model.Filter("CHAR_CHARVALUE", sap.ui.model.FilterOperator.EQ, sValue);
                });

                aFilters.push(new sap.ui.model.Filter({
                    filters: aCharValueFilters,
                    and: false  // OR condition - match any of the values
                }));

                console.log("Loading Unique IDs for characteristic:", sSelectedCharacteristic, "with values:", aSelectedCharValues);
            } else {
                console.log("Loading ALL Unique IDs for single characteristic:", sSelectedCharacteristic);
            }

            this.showBusyIndicator(true);
            var that = this;

            // Fetch Unique IDs for the single characteristic with optional value filter
            oModel.read("/getPlannedOrdAnalysis", {
                urlParameters: {
                    "$select": "UNIQUE_ID",
                    "$top": 100000
                },
                filters: aFilters,
                success: function (oData) {
                    // Extract unique IDs
                    var aUniqueIDs = [...new Set(
                        oData.results
                            .map(item => item.UNIQUE_ID)
                            .filter(uid => uid && String(uid).trim() !== "")
                    )];

                    console.log("Unique IDs loaded for single characteristic:", aUniqueIDs.length);

                    // Update Unique ID dropdown model
                    var oDepModel = that.getView().getModel("dependentModel");
                    if (!oDepModel) {
                        oDepModel = new sap.ui.model.json.JSONModel({});
                        that.getView().setModel(oDepModel, "dependentModel");
                    }

                    var aFormattedIDs = aUniqueIDs.map(uid => ({ key: uid, text: String(uid) }));
                    aFormattedIDs.unshift({ key: "ALL", text: "Select All" });

                    var currentData = oDepModel.getData() || {};
                    currentData.UniqueIDs = aFormattedIDs;
                    oDepModel.setData(currentData);

                    // Set flag before selecting to prevent onUniqueIDChange from firing
                    that._bCharValProgrammatic = true;
                    that._bUniqueIDSelectionInProgress = true;

                    var oUniqueIDControl = that.byId("idUniqueID");
                    var aKeysToSelect = aUniqueIDs;
                    oUniqueIDControl.setSelectedKeys(aKeysToSelect);

                    console.log("Auto-selected Unique IDs for single characteristic:", aKeysToSelect.length);

                    // Delay before releasing the flags and proceeding
                    setTimeout(function () {
                        that._bCharValProgrammatic = false;
                        that._bUniqueIDSelectionInProgress = false;

                        // NEW: Build filters for characteristic value chart using the SAME Unique IDs
                        var aChartFilters = [
                            new sap.ui.model.Filter("CHAR_DESC", sap.ui.model.FilterOperator.EQ, sSelectedCharacteristic)
                        ];

                        // Add unique ID filter for selected unique IDs (SAME as product chart)
                        if (aKeysToSelect && aKeysToSelect.length > 0) {
                            var aUIDChartFilters = aKeysToSelect.map(function (uid) {
                                return new sap.ui.model.Filter("UNIQUE_ID", sap.ui.model.FilterOperator.EQ, uid);
                            });

                            aChartFilters.push(new sap.ui.model.Filter({
                                filters: aUIDChartFilters,
                                and: false
                            }));
                        }

                        // NOW: Render BOTH charts with the SAME Unique IDs
                        console.log("Loading both product chart and characteristic value chart with same Unique IDs:", aKeysToSelect.length);

                        // 1. Render product chart
                        that._autoLoadProductChart(aKeysToSelect);

                        // 2. Render characteristic value chart (filtered by characteristic and same unique IDs)
                        that._loadChartData(aChartFilters);

                        that.showBusyIndicator(false);
                    }, 200);

                }.bind(this),
                error: function (oError) {
                    console.error("Error loading Unique IDs for single characteristic:", oError);
                    that.showBusyIndicator(false);
                }.bind(this)
            });
        },



        _loadCharacteristicValuesAndTriggerChart: function (aSelectedChars) {
            var that = this;

            // First, load the characteristic values
            this._loadCharacteristicValues(aSelectedChars);

            // Then, get all selected characteristic values and load unique IDs + trigger chart
            setTimeout(function () {
                var oCharValCtrl = that.byId("idCharValNum");
                var aSelectedCharValues = oCharValCtrl.getItems()
                    .filter(i => i.getTitle() !== "Select All" && i.getSelected())
                    .map(i => i.getTitle());

                // Load unique IDs which will auto-trigger the chart
                that._loadUniqueIDsForCharacteristicValues(aSelectedChars, aSelectedCharValues);
            }, 300);
        },



        // Helper to load characteristic values
        _loadCharacteristicValues: function (aSelectedCharacteristics) {
            this.getView().setBusy(true);
            // Guard 1: Don't re-enter if already loading
            // if (this._bLoadingCharacteristics) {
            //     console.log("⚠️  _loadCharacteristicValues already in progress, skipping");
            //     return;
            // }

            var oCharValList = this.byId("idCharValNum");
            var oModel = this.getView().getModel();

            if (!aSelectedCharacteristics || aSelectedCharacteristics.length === 0) {
                oCharValList.setModel(new sap.ui.model.json.JSONModel({ CharValNum: [] }), "charValModel");
                return;
            }

            // Guard 2: Set flag
            this._bLoadingCharacteristics = true;

            // Build filters for selected characteristics
            var aFilters = aSelectedCharacteristics.map(function (sChar) {
                return new sap.ui.model.Filter("CHAR_DESC", sap.ui.model.FilterOperator.EQ, sChar);
            });
            const charDescFilter = aSelectedCharacteristics.map(id => `CHAR_DESC eq '${id}'`).join(' or ');

            this.showBusyIndicator(true);
            var that = this;

            oModel.read("/getPlannedOrdAnalysis", {
                // filters: aFilters,
                urlParameters: {
                    $apply: `filter(${charDescFilter})/groupby((CHAR_DESC,CHAR_CHARVALUE))`,
                    // "$select": "CHAR_DESC,CHAR_CHARVALUE",
                    "$top": 100000
                },
                success: function (oData) {
                    this.getView().setBusy(false);
                    // Extract unique characteristic values
                    var aValues = [];
                    oData.results.forEach(function (item) {
                        if (item.CHAR_CHARVALUE && !aValues.includes(item.CHAR_CHARVALUE)) {
                            aValues.push({CHAR_CHARVALUE:item.CHAR_CHARVALUE,CHAR_NUM:item.CHAR_NUM});
                        }
                    });

                    // Prepare data
                    var aListData = [{ text: "Select All", Desc: "Select All" }];
                    aValues.forEach(val => aListData.push({ text: val.CHAR_CHARVALUE, Desc: val.CHAR_NUM }));

                                        var aCharFilters = [];

                    // Include all characteristics if none selected
                    var oCharModel = that.byId("idCharacteristics").getModel("charModel");
                    var aAllChars = oCharModel ? oCharModel.getProperty("/Characteristics") : [];

                    if (aAllChars && aAllChars.length) {
                        aCharFilters = aAllChars.map(function (oChar) {
                            return new sap.ui.model.Filter("CHAR_DESC", sap.ui.model.FilterOperator.EQ, oChar.key);
                        });
                    }

                    // Include selected Unique IDs
                    var aUniqueIds = that.byId("idUniqueID").getSelectedKeys() || [];
                    if (aUniqueIds.length) {
                        var oUidFilter = new sap.ui.model.Filter({
                            filters: aUniqueIds.map(function (uid) {
                                return new sap.ui.model.Filter("UNIQUE_ID", sap.ui.model.FilterOperator.EQ, uid);
                            }),
                            and: false
                        });
                        aCharFilters.push(oUidFilter);
                    }

                    // that._loadChartData(aCharFilters);

                    that._bCharValProgrammatic = true;

                    var oCharValModel = new sap.ui.model.json.JSONModel({ CharValNum: aListData });
                    oCharValList.setModel(oCharValModel, "charValModel");

                    // Unbind first to prevent event cascading
                    oCharValList.unbindItems();

                    oCharValList.bindItems({
                        path: "charValModel>/CharValNum",
                        template: new sap.m.StandardListItem({
                            title: "{charValModel>text}"
                        })
                    });

                    // Select all items
                    var oSelectAllItem = oCharValList.getItems().find(i => i.getTitle() === "Select All");
                    var aAllValueItems = oCharValList.getItems().filter(i => i.getTitle() !== "Select All");

                    aAllValueItems.forEach(i => oCharValList.setSelectedItem(i, true));
                    if (oSelectAllItem) oSelectAllItem.setSelected(true);

                    // Release flags after a delay
                    setTimeout(() => {
                        that._bCharValProgrammatic = false;
                        that._bLoadingCharacteristics = false; // IMPORTANT: Release this flag

                        var aSelectedChars = that.byId("idCharacteristics")
                            .getSelectedItems()
                            .map(i => i.getTitle())
                            .filter(t => t !== "Select All");

                        var aAllValueTitles = aAllValueItems.map(i => i.getTitle());
                        // that._loadChartDataForCharValuesSelectedIDs(aSelectedChars, aAllValueTitles);
                    }, 300);

                }.bind(this),
                error: function (oError) {
                    console.error("Error loading characteristic values:", oError);
                    that._bLoadingCharacteristics = false; // Release on error
                    that.showBusyIndicator(false);
                }.bind(this)
            });
        },


        _loadChartDataForCharValuesSelectedIDs: function (aSelectedChars, aAllValueTitles) {
            var oCharValCtrl = this.byId("idCharValNum");
            var aAllItems = oCharValCtrl.getItems();
            var oSelectAllItem = aAllItems.find(i => i.getTitle && i.getTitle() === "Select All");
            var aAllValueItems = aAllItems.filter(i => i.getTitle && i.getTitle() !== "Select All");

            var aSelectedItems = oCharValCtrl.getSelectedItems();
            var aSelectedValues = aSelectedItems
                .filter(i => i.getTitle() !== "Select All")
                .map(i => i.getTitle());

            // --- Handle Select All toggle ---
            if (this._bCharValInitialLoad === true) {
                aAllValueItems.forEach(i => oCharValCtrl.setSelectedItem(i, true));
                if (oSelectAllItem) oSelectAllItem.setSelected(true);
                this._bCharValInitialLoad = false;
                aSelectedValues = aAllValueItems.map(i => i.getTitle());
            } else if (aSelectedItems.includes(oSelectAllItem)) {
                if (oSelectAllItem.getSelected()) {
                    aAllValueItems.forEach(i => oCharValCtrl.setSelectedItem(i, true));
                    aSelectedValues = aAllValueItems.map(i => i.getTitle());
                } else {
                    aAllValueItems.forEach(i => oCharValCtrl.setSelectedItem(i, false));
                    return;
                }
            } else {
                if (aSelectedValues.length < aAllValueItems.length && oSelectAllItem && oSelectAllItem.getSelected()) {
                    oSelectAllItem.setSelected(false);
                }
            }

            // --- Build filters for provided selected chars and values ---
            var aFilters = [];

            // Add selected characteristic descriptions
            if (aSelectedChars && aSelectedChars.length > 0) {
                aSelectedChars.forEach(function (sChar) {
                    aFilters.push(new sap.ui.model.Filter("CHAR_DESC", sap.ui.model.FilterOperator.EQ, sChar));
                });
            }

            // Add selected characteristic values
            if (aSelectedValues && aSelectedValues.length > 0) {
                aFilters.push(new sap.ui.model.Filter({
                    filters: aSelectedValues.map(function (val) {
                        return new sap.ui.model.Filter("CHAR_CHARVALUE", sap.ui.model.FilterOperator.EQ, val);
                    }),
                    and: false
                }));
            } else if (aAllValueTitles && aAllValueTitles.length > 0) {
                // Fallback: use all available values if none are manually selected
                aFilters.push(new sap.ui.model.Filter({
                    filters: aAllValueTitles.map(function (val) {
                        return new sap.ui.model.Filter("CHAR_CHARVALUE", sap.ui.model.FilterOperator.EQ, val);
                    }),
                    and: false
                }));
            }

            // 🔹 Finally call chart loader
            this._loadChartData(aFilters);
        },




        _selectAllCharacteristics: function () {
            this.getView().setBusy(true);
            var oList = this.byId("idCharacteristics");
            var aAllItems = oList.getItems().filter(i => i.getTitle() !== "Select All");
            aAllItems.forEach(item => oList.setSelectedItem(item, true));
            var oSelectAllItem = oList.getItems().find(i => i.getTitle() === "Select All");
            if (oSelectAllItem) oSelectAllItem.setSelected(true);

            var aAllCharKeys = aAllItems.map(item => item.getTitle());
            // if (this._bInitialLoadInProgress) {
            //     console.log("⚠️ Initial load in progress - skipping _loadCharacteristicValues from _selectAllCharacteristics");
            //     return;
            // }

            // 🔹 Suppress value selection events while loading
            this._bCharValProgrammatic = true;
            this._loadCharacteristicValues(aAllCharKeys);
            this._bCharValProgrammatic = false;
        },






        _loadAllUniqueIds: function () {
            var oModel = this.getView().getModel();
            var aFilters = [];

            // include other filters (location, product, config product, model version)
            var sLocationId = this.byId("idLocation").getSelectedKey();
            if (sLocationId) {
                aFilters.push(new sap.ui.model.Filter("LOCATION_ID", sap.ui.model.FilterOperator.EQ, sLocationId));
            }

            var sConfigProducts = this.byId("idConfigProduct").getSelectedKey()
            var aConfigProducts = sConfigProducts ? [sConfigProducts] : [];
            if (aConfigProducts.length) {
                aFilters.push(new sap.ui.model.Filter({
                    filters: aConfigProducts.map(cp =>
                        new sap.ui.model.Filter("CONFIGURATION_PRODUCT", sap.ui.model.FilterOperator.EQ, cp)
                    ),
                    and: false
                }));
            }

            var sProducts = this.byId("idProduct").getSelectedKey();
            var aProducts = sProducts ? [sProducts] : [];
            if (aProducts.length) {
                aFilters.push(new sap.ui.model.Filter({
                    filters: aProducts.map(p =>
                        new sap.ui.model.Filter("PRODUCT_ID", sap.ui.model.FilterOperator.EQ, p)
                    ),
                    and: false
                }));
            }

            var aModelVersions = this.byId("idModelVersion").getSelectedKeys()
                .filter(mv => mv && String(mv).trim() !== "");
            if (aModelVersions.length) {
                aFilters.push(new sap.ui.model.Filter({
                    filters: aModelVersions.map(mv =>
                        new sap.ui.model.Filter("MODEL_VERSION", sap.ui.model.FilterOperator.EQ, mv)
                    ),
                    and: false
                }));
            }

            // request only UNIQUE_IDs
            oModel.read("/getPlannedOrdAnalysis", {
                urlParameters: { "$select": "UNIQUE_ID", "$top": 100000 },
                filters: aFilters,
                success: function (oData) {
                    var allIds = [...new Set(oData.results
                        .map(r => r.UNIQUE_ID)
                        .filter(u => u && String(u).trim() !== "")
                    )];

                    var aFormattedUniqueIds = allIds.map(u => ({ key: u, text: String(u) }));

                    var oDepModel = this.getView().getModel("dependentModel");
                    if (!oDepModel) {
                        oDepModel = new sap.ui.model.json.JSONModel({ UniqueIDs: aFormattedUniqueIds });
                        this.getView().setModel(oDepModel, "dependentModel");
                    } else {
                        var data = oDepModel.getData() || {};
                        data.UniqueIDs = aFormattedUniqueIds;
                        oDepModel.setData(data);
                    }

                    this.showBusyIndicator(false);
                }.bind(this),
                error: function (oError) {
                    console.error("Error loading all Unique IDs:", oError);
                    this.showBusyIndicator(false);
                }.bind(this)
            });
        },


        _bCharValInitialLoad: true, // default true, used to auto-select all characteristic values on first load or GO



        // Updated: onCharValueChange to pass both characteristics and values
        onCharValueChange: function (oEvent) {

            that.changeCharVAl = true;
            var oList = oEvent.getSource();
            var oSelectAllItem = oList.getItems().find(i => i.getTitle() === "Select All");
            var aAllItemsExceptSelectAll = oList.getItems().filter(i => i.getTitle() !== "Select All");
            var aSelectedItems = oList.getSelectedItems();

            // --- CASE 1: "Select All" clicked ---
            if (oEvent.getParameter("listItem") === oSelectAllItem) {
                if (oSelectAllItem.getSelected()) {
                    // Select everything except "Select All"
                    aAllItemsExceptSelectAll.forEach(item => oList.setSelectedItem(item, true));

                    // Get all selected characteristic values
                    var aSelectedCharValues = aAllItemsExceptSelectAll.map(i => i.getTitle());

                    // Get selected characteristics
                    var aSelectedChars = this.byId("idCharacteristics")
                        .getSelectedItems()
                        .map(i => i.getTitle())
                        .filter(t => t !== "Select All");

                    // ✅ IMPORTANT: Load unique IDs BEFORE loading chart
                    // this._loadUniqueIDsForCharacteristicValues(aSelectedChars, aSelectedCharValues);

                } else {
                    // Deselect everything but keep chart as-is
                    aAllItemsExceptSelectAll.forEach(item => oList.setSelectedItem(item, false));
                }
                return;
            }

            // CASE 2: Individual characteristic value clicked
            var aSelectedTitles = aSelectedItems
                .map(i => i.getTitle())
                .filter(t => t !== "Select All");

            // Update Select All checkbox state
            if (aSelectedTitles.length < aAllItemsExceptSelectAll.length && oSelectAllItem.getSelected()) {
                oSelectAllItem.setSelected(false);
            }

            if (aSelectedTitles.length === aAllItemsExceptSelectAll.length && !oSelectAllItem.getSelected()) {
                oSelectAllItem.setSelected(true);
            }

            // Get selected characteristics
            var aSelectedChars = this.byId("idCharacteristics")
                .getSelectedItems()
                .map(i => i.getTitle())
                .filter(t => t !== "Select All");

            // Reload unique IDs based on newly selected characteristic values
            // this._loadUniqueIDsForCharacteristicValues(aSelectedChars, aSelectedTitles);
        },



        onAppFilter: function(){
            var selectedLocation = that.byId("idLocation").getSelectedKey();
            var sSelectedConfigProduct = that.byId("idConfigProduct").getSelectedKey();
            var sSelectedProduct = that.byId("idProduct").getSelectedKey();
             var aModelVersions = this.byId("idModelVersion").getSelectedKeys().filter(mv => mv && mv.trim() !== "");
            aModelVersions = aModelVersions.length == 0 ? '':aModelVersions;
            // var modelVersion = that.byId("idModelVersion").getSelectedKey().length>0 ?that.byId("idModelVersion").getSelectedKey():"";
             var oStartDate = this.byId("DRS1").getDateValue().toLocaleDateString("en-CA")
            var oEndDate = this.byId("DRS1").getSecondDateValue().toLocaleDateString("en-CA")

           var charValList =  that.byId("idCharValNum")
           var listItems = charValList.getSelectedItems();
           var charcharvalTitle = [];
           listItems.forEach(i=>{
            charcharvalTitle.push(i.getTitle());
           })
        
         const charcharvalFilter = charcharvalTitle.map(id => `CHAR_CHARVALUE eq '${id}'`).join(' or ');
         
         that.oModel.read("/getPlannedOrdAnalysis", {
             urlParameters: {
                $apply: `filter(LOCATION_ID eq '${selectedLocation}' and CONFIGURATION_PRODUCT eq '${sSelectedConfigProduct}' and PRODUCT_ID eq '${sSelectedProduct}' and ${charcharvalFilter})/groupby((CHAR_NUM,CHAR_VALUE),aggregate($count as Count))`,
                     "$top": 100000
                },
                success:function(oData){

                 var charValList =  that.byId("idCharValNum")
           var listItems = charValList.getSelectedItems();
                    var valData = [];
                    oData.results.forEach(i=>{
                        var obj = {
                            CHAR_NUM:i.CHAR_NUM,
                            CHAR_VALUE:i.CHAR_VALUE
                        }
                        valData.push(obj);
                    })
                var selUniqs = that.byId("idUniqueID").getSelectedItems().map(x=>(JSON.parse(x.getText())))
                  var  reqUniqs = selUniqs.length>0?selUniqs:that.byId("idUniqueID").getItems().map(y=>(JSON.parse(y.getText())))
                //    if(listItems[0].getTitle() !== "Select All" ){
            that.oModel.callFunction("/getPlannedOrderData",{
                method:"GET",
                urlParameters:{
                    CHAR_DATA:JSON.stringify(valData),
                    LOCATION_ID:selectedLocation,
                    PRODUCT_ID:sSelectedProduct,
                    CONFIG_PROD:sSelectedConfigProduct,
                    MODEL_VERSION:aModelVersions,
                    START_DATE:oStartDate,
                    END_DATE:oEndDate,
                    UNIQUE_ID:JSON.stringify(reqUniqs)
                },
                success:function(oData){
                    var finData = JSON.parse(oData.getPlannedOrderData);
                    that.chartfinData = finData;
                    const unique = finData.map(id => `UNIQUE_ID eq ${JSON.parse(id.UNIQUE_ID)}`).join(' or ');
                      that.oModel.read("/getCirGen", {
                        urlParameters:{
                $apply: `filter(LOCATION_ID eq '${selectedLocation}'  and PRODUCT_ID eq '${sSelectedProduct}' and (WEEK_DATE ge ${oStartDate} and WEEK_DATE le ${oEndDate}) and (${unique}))`,
                "$top": 100000,

                        },
                // filters: aFilters,
                success: function (oData) {
                    var chart1Data = oData.results; 
                      {
                    // Build chart data (existing logic stays the same)
                    var groupedData = {};
                    chart1Data.forEach(function (item) {
                        var productId = item.PRODUCT_ID;
                        if (!groupedData[productId]) {
                            groupedData[productId] = { Product: productId, Actual: 0, Forecast: 0 };
                        }
                        groupedData[productId].Actual += (item.ACTUAL_QTY || 0);
                        groupedData[productId].Forecast += (item.UNCONSUMED_FORECAST || 0);
                    });

                    var aChartData = Object.values(groupedData);
                    var oChartModel = new sap.ui.model.json.JSONModel({ chartData: aChartData });
                    var oVizFrame = that.byId("idVizFrame");
                    oVizFrame.setModel(oChartModel);
                    // Configure the VizFrame for stacked bars
                    var oDataset = new sap.viz.ui5.data.FlattenedDataset({
                        dimensions: [{
                            name: "Product",
                            value: "{Product}"
                        }],
                        measures: [
                            { name: "Forecast", value: "{Forecast}" },
                            { name: "Actual", value: "{Actual}" }
                        ],
                        data: { path: "/chartData" }
                    });

                    oVizFrame.setDataset(oDataset);
                    oVizFrame.setVizType("stacked_bar"); // or "stacked_column" for vertical bars
                    oVizFrame.removeAllFeeds();

                    // Add feeds
                    oVizFrame.addFeed(new sap.viz.ui5.controls.common.feeds.FeedItem({
                        uid: "categoryAxis",
                        type: "Dimension",
                        values: ["Product"]
                    }));

                    oVizFrame.addFeed(new sap.viz.ui5.controls.common.feeds.FeedItem({
                        uid: "valueAxis",
                        type: "Measure",
                        values: [ "Forecast","Actual"]
                    }));

                    // Set properties with data labels
                    oVizFrame.setVizProperties({
                        plotArea: {
                            isStacked: true,
                            dataLabel: {
                                visible: true,
                                showTotal: true, // Shows total outside the bar
                                formatString: "#,##0", // Number format
                                style: {
                                    color: "#333333",
                                    fontSize: "11px"
                                }
                            },
                            colorPalette: ["#FFC107", "#809e57"], // Yellow for Actual, Green for Forecast
                            dataPointStyle: {
                                rules: [
                                    {
                                        dataContext: { Actual: "*" },
                                        properties: {
                                            color: "#FFC107"
                                        },
                                        displayName: "Actual"
                                    },
                                    {
                                        dataContext: { Forecast: "*" },
                                        properties: {
                                            color: "#809e57"
                                        },
                                        displayName: "Unconsumed"
                                    }
                                ]
                            }
                        },
                        valueAxis: {
                            label: {
                                formatString: "#,##0"
                            },
                            title: {
                                visible: true,
                                text: "Quantity"
                            }
                        },
                        categoryAxis: {
                            title: {
                                visible: true,
                                text: "Product"
                            }
                        },
                        legend: {
                            visible: true,
                            title: {
                                visible: false
                            }
                        },
                        title: {
                            visible: false,
                            text: "Actual vs Unconsumed"
                        },
                        interaction: {
                            selectability: {
                                mode: "exclusive"
                            }
                        }

                    }),
                        console.log("CirGen chart loaded with", aChartData.length, "records");


                        //////////////////////////////////////
                        var groupedData = {};
                    var aAllCharValues = new Set();

                    finData.forEach(function (item) {
                        if (!item.CHAR_DESC || !item.CHAR_CHARVALUE || !item.YEAR_QUAETER) return;

                        aAllCharValues.add(item.CHAR_CHARVALUE);

                        var yearQuarter = item.YEAR_QUAETER;
                        var category = item.CHAR_DESC + " " + item.CHAR_CHARVALUE;
                        var key = yearQuarter + "|" + category;

                        if (!groupedData[key]) {
                            groupedData[key] = {
                                YearQuarter: yearQuarter,
                                Category: category,
                                Sales: 0,
                                Unconsumed: 0,
                                Forecast: 0
                            };
                        }

                        groupedData[key].Sales += item.ACTUAL_QTY || 0;
                        groupedData[key].Unconsumed += item.UNCONSUMED_FORECAST || 0;
                        groupedData[key].Forecast += item.CIR_QTY || 0;
                    });

                    // --- Prepare chart data with combined label ---
                    var chartData = Object.values(groupedData).map(function (d) {
                        var total = d.Sales + d.Unconsumed;
                        return {
                            QuarterCharacteristic: d.YearQuarter + " | " + d.Category, // Combined label
                            Sales: d.Sales > 0 ? d.Sales : null,
                            Unconsumed: d.Unconsumed,
                            Forecast: d.Forecast,
                            Total: total
                        };
                    });

                    console.log("Chart data prepared:", chartData);

                    // --- Set up model and dataset ---
                    var oChartModel = new sap.ui.model.json.JSONModel({ CharData: chartData });
                    var oVizFrame = that.byId("idCharChart");

                    var oDataset = new sap.viz.ui5.data.FlattenedDataset({
                        dimensions: [
                            { name: "Quarter / Characteristic", value: "{QuarterCharacteristic}" }
                        ],
                        measures: [
                            { name: "Unconsumed", value: "{Unconsumed}" },
                            { name: "Sales", value: "{Sales}" },
                            { name: "Forecast", value: "{Forecast}" }
                        ],
                        data: { path: "/CharData" }
                    });

                    oVizFrame.setDataset(oDataset);
                    oVizFrame.setModel(oChartModel);
                    oVizFrame.removeAllFeeds();

                    // --- Feed items ---
                    oVizFrame.addFeed(new sap.viz.ui5.controls.common.feeds.FeedItem({
                        uid: "categoryAxis",
                        type: "Dimension",
                        values: ["Quarter / Characteristic"]
                    }));

                    oVizFrame.addFeed(new sap.viz.ui5.controls.common.feeds.FeedItem({
                        uid: "valueAxis",
                        type: "Measure",
                        values: ["Unconsumed", "Sales"]
                    }));

                    oVizFrame.addFeed(new sap.viz.ui5.controls.common.feeds.FeedItem({
                        uid: "valueAxis2",
                        type: "Measure",
                        values: ["Forecast"]
                    }));

                    oVizFrame.setVizType("dual_stacked_combination");

                    // --- Chart styling and properties ---
                    oVizFrame.setVizProperties({
                        plotArea: {
                            primaryScale: { fixedRange: false, minValue: 0 },
                            secondaryScale: { fixedRange: false, minValue: 0 },
                            dataLabel: { visible: true, showTotal: true, formatString: "#,##0" },
                            dataPointStyle: {
                                rules: [
                                    {
                                        dataContext: { Unconsumed: "*" },
                                        properties: { color: "#809e57" },
                                        displayName: "Unconsumed"
                                    },
                                    {
                                        dataContext: { Sales: "*" },
                                        properties: { color: "#FFC107" },
                                        displayName: "Sales"
                                    },
                                    {
                                        dataContext: { Forecast: "*" },
                                        properties: { color: "#2196F3", lineColor: "#2196F3", lineWidth: 3 },
                                        displayName: "Forecast"
                                    }
                                ]
                            },
                            dataShape: {
                                primaryAxis: ["bar", "bar"],
                                secondaryAxis: ["line"],
                                isStacked:"true"
                            },
                            marker: { visible: true, size: 8 }
                        },
                        valueAxis: {
                            visible: true,
                            title: { visible: true, text: "Actual Quantities" },
                            label: { formatString: "#,##0" }
                        },
                        valueAxis2: {
                            visible: true,
                            title: { visible: true, text: "Forecast (CIR)" },
                            label: { formatString: "#,##0" }
                        },
                        categoryAxis: {
                            title: { visible: true, text: "Quarter | Characteristic" }
                        },
                        legend: {
                            visible: true,
                            title: { visible: false }
                        },
                        title: {
                            visible: false,
                            text: "Characteristics Value Analysis by Quarter"
                        },
                        interaction: {
                            selectability: { mode: "exclusive" }
                        }
                    });
                    that.loadForecastChart();
                    that.loadActualChart()

                }
                    
                },
                error:function(error){

                }
            });

                    // var selChars =  that.byId("idCharacteristics").getSelectedItems().filter(mv => mv.getTitle())
                    // const chardescfil =that.byId("idCharacteristics").getSelectedItems().map(id => `CHAR_DESC eq '${id.getTitle()}'`).join(' or ');
                    // const unique = unData.map(id => `UNIQUE_ID eq ${JSON.parse(id.UNIQUE_ID)}`).join(' or ');
                    
            //         that.oModel.read("/getPlannedOrdAnalysis", {
            //  urlParameters: {
            //     $apply: `filter(LOCATION_ID eq '${selectedLocation}' and CONFIGURATION_PRODUCT eq '${sSelectedConfigProduct}' and PRODUCT_ID eq '${sSelectedProduct}' and (${chardescfil} and (WEEK_DATE ge '${oStartDate}' and WEEK_DATE le '${oEndDate}') and (${unique}))`,
            //          "$top": 100000
            //     },
            //     success:function(oData){
            //         console.log(oData.results)
            //     },
            //     error:function(error){
            //         console.log(error)
            //     }
            // })
  
                },
                error:function(error){
                    console.log(error);
                }
            })
        //    }
                },
                error:function(error){
                    console.log(error);
                } 
            });
                
        },




        _loadChartDataForCharValues: function (aUniqueIDs) {
            var oCharValCtrl = this.byId("idCharValNum");
            var aAllItems = oCharValCtrl.getItems();
            var oSelectAllItem = aAllItems.find(i => i.getTitle && i.getTitle() === "Select All");
            var aAllValueItems = aAllItems.filter(i => i.getTitle && i.getTitle() !== "Select All");

            var aSelectedItems = oCharValCtrl.getSelectedItems();
            var aSelectedValues = aSelectedItems
                .filter(i => i.getTitle() !== "Select All")
                .map(i => i.getTitle());

            // --- Handle Select All toggle ---
            if (this._bCharValInitialLoad === true) {
                aAllValueItems.forEach(i => oCharValCtrl.setSelectedItem(i, true));
                if (oSelectAllItem) oSelectAllItem.setSelected(true);
                this._bCharValInitialLoad = false;
                aSelectedValues = aAllValueItems.map(i => i.getTitle());
            } else if (aSelectedItems.includes(oSelectAllItem)) {
                if (oSelectAllItem.getSelected()) {
                    aAllValueItems.forEach(i => oCharValCtrl.setSelectedItem(i, true));
                    aSelectedValues = aAllValueItems.map(i => i.getTitle());
                } else {
                    aAllValueItems.forEach(i => oCharValCtrl.setSelectedItem(i, false));
                    return;
                }
            } else {
                if (aSelectedValues.length < aAllValueItems.length && oSelectAllItem && oSelectAllItem.getSelected()) {
                    oSelectAllItem.setSelected(false);
                }
            }

            // --- Build filters for selected values only ---
            var aFilters = [];
            var aSelectedChars = this.byId("idCharacteristics").getSelectedItems();
            aSelectedChars.forEach(function (oItem) {
                aFilters.push(new sap.ui.model.Filter("CHAR_DESC", sap.ui.model.FilterOperator.EQ, oItem.getTitle()));
            });

            if (aSelectedValues.length > 0) {
                aFilters.push(new sap.ui.model.Filter({
                    filters: aSelectedValues.map(function (val) {
                        return new sap.ui.model.Filter("CHAR_CHARVALUE", sap.ui.model.FilterOperator.EQ, val);
                    }),
                    and: false
                }));
            }

            // ✅ If aUniqueIDs are provided, add them to the filters
            if (aUniqueIDs && aUniqueIDs.length > 0) {
                var aUIDFilters = aUniqueIDs.map(function (uid) {
                    return new sap.ui.model.Filter("UNIQUE_ID", sap.ui.model.FilterOperator.EQ, uid);
                });
                aFilters.push(new sap.ui.model.Filter({ filters: aUIDFilters, and: false }));
            }

            // 🔹 Finally call chart loader
            this._loadChartData(aFilters);
        },











        _loadChartData: function (aFilters) {
            var oModel = this.getView().getModel();
            this.showBusyIndicator(true);

            // --- Date range filter ---
            var oStartDate = this.byId("DRS1").getDateValue();
            var oEndDate = this.byId("DRS1").getSecondDateValue();

            if (oStartDate && oEndDate) {
                aFilters.push(
                    new sap.ui.model.Filter("WEEK_DATE", sap.ui.model.FilterOperator.BT, oStartDate, oEndDate)
                );
            } else {
                this.showBusyIndicator(false);
                this.showErrorMessage("Please select a valid date range.");
                return;
            }

            // --- Unique ID filter ---
            var aKeys = [];
            this.byId("idUniqueID").getItems().forEach(y=>{
                               aKeys.push( y.getText())
                            });
               var selUID = this.byId("idUniqueID").getSelectedKeys();             
            // var oUniqueIds = selUID.length > 0 ? selUID : aKeys;
            var oUniqueIds = selUID;
            if (oUniqueIds.length > 0) {
                var oUidFilter = new sap.ui.model.Filter({
                    filters: oUniqueIds.map(function (uid) {
                        return new sap.ui.model.Filter("UNIQUE_ID", sap.ui.model.FilterOperator.EQ, uid);
                    }),
                    and: false
                });
                aFilters.push(oUidFilter);
            }

            // --- Read data from backend ---
            oModel.read("/getPlannedOrdAnalysis", {
                urlParameters: {
                    "$select": "CHAR_DESC,CHAR_CHARVALUE,ACTUAL_QTY,UNCONSUMED_FORECAST,CIR_QTY,YEAR_QUAETER,WEEK_DATE",
                    "$top": 100000
                },
                filters: aFilters,
                success: function (oData) {
                    var groupedData = {};
                    var aAllCharValues = new Set();

                    oData.results.forEach(function (item) {
                        if (!item.CHAR_DESC || !item.CHAR_CHARVALUE || !item.YEAR_QUAETER) return;

                        aAllCharValues.add(item.CHAR_CHARVALUE);

                        var yearQuarter = item.YEAR_QUAETER;
                        var category = item.CHAR_DESC + " " + item.CHAR_CHARVALUE;
                        var key = yearQuarter + "|" + category;

                        if (!groupedData[key]) {
                            groupedData[key] = {
                                YearQuarter: yearQuarter,
                                Category: category,
                                Sales: 0,
                                Unconsumed: 0,
                                Forecast: 0
                            };
                        }

                        groupedData[key].Sales += item.ACTUAL_QTY || 0;
                        groupedData[key].Unconsumed += item.UNCONSUMED_FORECAST || 0;
                        groupedData[key].Forecast += item.CIR_QTY || 0;
                    });

                    // --- Prepare chart data with combined label ---
                    var chartData = Object.values(groupedData).map(function (d) {
                        var total = d.Sales + d.Unconsumed;
                        return {
                            QuarterCharacteristic: d.YearQuarter + " | " + d.Category, // Combined label
                            Sales: d.Sales > 0 ? d.Sales : null,
                            Unconsumed: d.Unconsumed,
                            Forecast: d.Forecast,
                            Total: total
                        };
                    });

                    console.log("Chart data prepared:", chartData);

                    // --- Set up model and dataset ---
                    var oChartModel = new sap.ui.model.json.JSONModel({ CharData: chartData });
                    var oVizFrame = this.byId("idCharChart");

                    var oDataset = new sap.viz.ui5.data.FlattenedDataset({
                        dimensions: [
                            { name: "Quarter / Characteristic", value: "{QuarterCharacteristic}" }
                        ],
                        measures: [
                            { name: "Unconsumed", value: "{Unconsumed}" },
                            { name: "Sales", value: "{Sales}" },
                            { name: "Forecast", value: "{Forecast}" }
                        ],
                        data: { path: "/CharData" }
                    });

                    oVizFrame.setDataset(oDataset);
                    oVizFrame.setModel(oChartModel);
                    oVizFrame.removeAllFeeds();

                    // --- Feed items ---
                    oVizFrame.addFeed(new sap.viz.ui5.controls.common.feeds.FeedItem({
                        uid: "categoryAxis",
                        type: "Dimension",
                        values: ["Quarter / Characteristic"]
                    }));

                    oVizFrame.addFeed(new sap.viz.ui5.controls.common.feeds.FeedItem({
                        uid: "valueAxis",
                        type: "Measure",
                        values: ["Unconsumed", "Sales"]
                    }));

                    oVizFrame.addFeed(new sap.viz.ui5.controls.common.feeds.FeedItem({
                        uid: "valueAxis2",
                        type: "Measure",
                        values: ["Forecast"]
                    }));

                    oVizFrame.setVizType("dual_stacked_combination");

                    // --- Chart styling and properties ---
                    oVizFrame.setVizProperties({
                        plotArea: {
                            primaryScale: { fixedRange: false, minValue: 0 },
                            secondaryScale: { fixedRange: false, minValue: 0 },
                            dataLabel: { visible: true, showTotal: true, formatString: "#,##0" },
                            dataPointStyle: {
                                rules: [
                                    {
                                        dataContext: { Unconsumed: "*" },
                                        properties: { color: "#809e57" },
                                        displayName: "Unconsumed"
                                    },
                                    {
                                        dataContext: { Sales: "*" },
                                        properties: { color: "#FFC107" },
                                        displayName: "Sales"
                                    },
                                    {
                                        dataContext: { Forecast: "*" },
                                        properties: { color: "#2196F3", lineColor: "#2196F3", lineWidth: 3 },
                                        displayName: "Forecast"
                                    }
                                ]
                            },
                            dataShape: {
                                primaryAxis: ["bar", "bar"],
                                secondaryAxis: ["line"]
                            },
                            marker: { visible: true, size: 8 }
                        },
                        valueAxis: {
                            visible: true,
                            title: { visible: true, text: "Actual Quantities" },
                            label: { formatString: "#,##0" }
                        },
                        valueAxis2: {
                            visible: true,
                            title: { visible: true, text: "Forecast (CIR)" },
                            label: { formatString: "#,##0" }
                        },
                        categoryAxis: {
                            title: { visible: true, text: "Quarter | Characteristic" }
                        },
                        legend: {
                            visible: true,
                            title: { visible: false }
                        },
                        title: {
                            visible: false,
                            text: "Characteristics Value Analysis by Quarter"
                        },
                        interaction: {
                            selectability: { mode: "exclusive" }
                        }
                    });

                    // --- Initialize Characteristic value dropdown ---
                    if (!that.changeCharVAl) {
                        var oCharValCtrl = this.byId("idCharValNum");
                        if (oCharValCtrl) {
                            var aFormattedCharValues = Array.from(aAllCharValues).map(function (val) {
                                return { key: val, text: val };
                            });
                            aFormattedCharValues.unshift({ key: "Select All", text: "Select All" });

                            oCharValCtrl.setModel(new sap.ui.model.json.JSONModel({ CharValNum: aFormattedCharValues }));
                            oCharValCtrl.getItems().forEach(function (item) {
                                oCharValCtrl.setSelectedItem(item, true);
                            });
                        }
                    }

                    this.showBusyIndicator(false);
                    console.log("Chart rendered with Quarter + Characteristic on X-axis");
                }.bind(this),
                error: function (oError) {
                    console.error("Error fetching chart data:", oError);
                    this.showErrorMessage("Failed to load chart data");
                    this.showBusyIndicator(false);
                }.bind(this)
            });
        },





        // Add this function to your controller

        loadForecastChart: function () {
            var oModel = this.getView().getModel();
            var sLocation = this.byId("idLocation").getSelectedKey();
            var sConfigProduct = this.byId("idConfigProduct").getSelectedKey();
            var sProduct = this.byId("idProduct").getSelectedKey();
            var oStartDate = this.byId("DRS1").getDateValue();
            var oEndDate = this.byId("DRS1").getSecondDateValue();
            var uniqueID = this.byId("idUniqueID");
            var  uniqueIdF = uniqueID.getSelectedItems().length > 0 ? uniqueID.getSelectedItems().map(y=>{ return y.getText()}):uniqueID.getItems().map(x=>{return x.getText()})

            // var charvallist = this.byId("idCharValNum")
            var fData = this.chartfinData;
            if(fData){
                if(fData.length>0){
             const uniqueIDs1 = [...new Set(fData.map(item => item.UNIQUE_ID))];
             var uniqueIdF = uniqueIDs1
            }
        }

            // Get all Unique IDs from the dropdown (not just selected ones)
            var oUniqueIDModel = this.getView().getModel("dependentModel");
            var aAllUniqueIDs = oUniqueIDModel ? (oUniqueIDModel.getProperty("/UniqueIDs") || []) : [];
            var totUniq = this.byId("idUniqueID").getItems().map(i=>{
                return i.getText()
            })
            // if (aAllUniqueIDs.length === 0) {
            //     console.log("No Unique IDs available to load forecast chart");
            //     this.byId("idForecastChart").setModel(new sap.ui.model.json.JSONModel({ ForecastChartData: [] }));
            //     return;
            // }

            this.showBusyIndicator(true);

            // Build filters
            var aFilters = [
                new sap.ui.model.Filter("LOCATION_ID", sap.ui.model.FilterOperator.EQ, sLocation),
                new sap.ui.model.Filter("PRODUCT_ID", sap.ui.model.FilterOperator.EQ, sProduct),
                new sap.ui.model.Filter("WEEK_DATE", sap.ui.model.FilterOperator.BT, oStartDate, oEndDate)
            ];

            // Add Unique ID filter (OR condition for all unique IDs in dropdown)
            if (uniqueIdF.length > 0) {
                var aUniqueIDFilters = aAllUniqueIDs.map(function (uid) {
                    return new sap.ui.model.Filter("UNIQUE_ID", sap.ui.model.FilterOperator.EQ, uid);
                });

                aFilters.push(new sap.ui.model.Filter({
                    filters: aUniqueIDFilters,
                    and: false
                }));
            }
            const unique = uniqueIdF.map(id => `UNIQUE_ID eq ${JSON.parse(id)}`).join(' or ');
            var that = this;

            // Read data from getAsmbReqAnalysis
            oModel.read("/getAsmbReqAnalysis", {
                // filters: aFilters,
                urlParameters: {
                    $apply: `filter(LOCATION_ID eq '${sLocation}' and PRODUCT_ID eq '${sProduct}' and (WEEK_DATE ge ${oStartDate.toLocaleDateString("en-CA")} and WEEK_DATE le ${oEndDate.toLocaleDateString("en-CA")}) and (${unique}))/groupby((UNIQUE_ID,WEEK_DATE,ASSEMBLY_DESCRIPTION,CIR_QTY,COUNT))`,

                    // "$select": "WEEK_DATE,ASSEMBLY_DESC,CIR_QTY,COUNT",
                    "$top": 100000
                },
                success: function (oData) {
                    console.log("Raw forecast data loaded:", oData.results.length);

                    // Group by WEEK_DATE and ASSEMBLY_DESC to aggregate CIR_QTY and COUNT
                    var groupedData = {};
                    var Data = oData.results.length >0 ? oData.results:that.data;
                    // oData.results.forEach(function (item) {

                    var groupedData = {};

                    Data.forEach(function (item) {
                        // Skip if no week date
                        if (!item.WEEK_DATE) {
                            return;
                        }

                        // Handle missing or null ASSEMBLY_DESCRIPTION
                        var assemblyDesc = item.ASSEMBLY_DESCRIPTION || "Unknown";

                        // Format week date properly
                        var weekDate = item.WEEK_DATE;
                        if (weekDate instanceof Date) {
                            weekDate = weekDate.toISOString().split('T')[0];
                        } else if (typeof weekDate === "string" && weekDate.includes("T")) {
                            weekDate = weekDate.split("T")[0];
                        }

                        // Create a unique key
                        var key = weekDate + "_" + assemblyDesc;

                        // Initialize if not exists
                        if (!groupedData[key]) {
                            groupedData[key] = {
                                WEEK_DATE: weekDate,
                                ASSEMBLY_DESC: assemblyDesc,
                                totalCirQty: 0,
                                totalCount: 0
                            };
                        }

                        // Aggregate CIR_QTY and COUNT
                        groupedData[key].totalCirQty += Number(item.CIR_QTY) || 0;
                        groupedData[key].totalCount += Number(item.COUNT) || 0;
                    });

                    // Convert grouped data into array for chart
                    var aChartData = Object.values(groupedData).map(function (item) {
                        var forecastQty = 0;
                        if (item.totalCount > 0) {
                            forecastQty = item.totalCirQty / item.totalCount;
                        }

                        return {
                            WEEK_DATE: item.WEEK_DATE,
                            ASSEMBLY_DESC: item.ASSEMBLY_DESC,
                            FORECAST_QTY: forecastQty
                        };
                    });

                    // Sort by week date
                    aChartData.sort(function (a, b) {
                        return new Date(a.WEEK_DATE) - new Date(b.WEEK_DATE);
                    });

                    console.log("Processed forecast chart data:", aChartData);

                    // Bind to VizFrame
                    var oChartModel = new sap.ui.model.json.JSONModel({
                        ForecastChartData: aChartData
                    });
                    that.byId("idForecastChart").setModel(oChartModel);

                    // Hide chart title
                    var oVizFrame = that.getView().byId("idForecastChart");
                    // oVizFrame.setVizProperties({
                    //     title: { visible: false }
                    // });
                    oVizFrame.setVizProperties({
                        title: { visible: false },
                        plotArea: {
                            dataLabel: {
                                visible: true,        // ✅ shows numeric values on dots
                                formatString: "##.##" // optional, control decimal format
                            },
                            marker: {
                                visible: true          // ✅ shows circular dots for each point
                            }
                        },
                        valueAxis: {
                            title: { visible: true, text: "Forecast Quantity" }
                        },
                        categoryAxis: {
                            title: { visible: true, text: "Week Date" }
                        },
                        legend: {
                            visible: true
                        }
                    });
                    //    Data.forEach(function (item) {
                    //     if (!item.WEEK_DATE || !item.ASSEMBLY_DESCRIPTION) {
                    //         return;
                    //     }

                    //     // Format week date for grouping
                    //     var weekDate = item.WEEK_DATE;
                    //     if (weekDate instanceof Date) {
                    //         weekDate = weekDate.toISOString().split('T')[0];
                    //     }

                    //     var key = weekDate + "_" + item.ASSEMBLY_DESCRIPTION;

                    //     if (!groupedData[key]) {
                    //         groupedData[key] = {
                    //             WEEK_DATE: weekDate,
                    //             ASSEMBLY_DESC: item.ASSEMBLY_DESCRIPTION,
                    //             totalCirQty: 0,
                    //             totalCount: 0
                    //         };
                    //     }

                    //     groupedData[key].totalCirQty += (item.CIR_QTY || 0);
                    //     groupedData[key].totalCount += (item.COUNT || 0);
                    // });

                    // // Calculate FORECAST_QTY = CIR_QTY / COUNT for each group
                    // // var aChartData = Object.values(groupedData).map(function(item) {
                    // //     var forecastQty = 0;
                    // //     if (item.totalCount > 0) {
                    // //         forecastQty = item.totalCirQty / item.totalCount;
                    // //     }

                    // //     return {
                    // //         WEEK_DATE: item.WEEK_DATE,
                    // //         ASSEMBLY_DESC: item.ASSEMBLY_DESC,
                    // //         FORECAST_QTY: forecastQty
                    // //     };
                    // // });

                    // var aChartData = Object.values(groupedData).map(function (item) {
                    //     return {
                    //         WEEK_DATE: item.WEEK_DATE,
                    //         ASSEMBLY_DESC: item.ASSEMBLY_DESCRIPTION,
                    //         FORECAST_QTY: item.totalCirQty
                    //     };
                    // });

                    // // Sort by week date
                    // aChartData.sort(function (a, b) {
                    //     return new Date(a.WEEK_DATE) - new Date(b.WEEK_DATE);
                    // });

                    // console.log("Processed forecast chart data:", aChartData.length, "records");

                    // // Update chart model
                    // var oChartModel = new sap.ui.model.json.JSONModel({
                    //     ForecastChartData: aChartData
                    // });
                    // that.byId("idForecastChart").setModel(oChartModel);
                    // var oVizFrame = that.getView().byId("idForecastChart"); // your vizFrame ID

                    // oVizFrame.setVizProperties({
                    //     title: {
                    //         visible: false // hides the title
                    //     }
                    // });

                    that.showBusyIndicator(false);
                },
                error: function (oError) {
                    console.error("Error loading forecast chart data:", oError);
                    that.showErrorMessage("Failed to load forecast chart data");
                    that.showBusyIndicator(false);
                }
            });
        },


        // Add this function to your controller

        loadActualChart: function () {
            var oModel = this.getView().getModel();
            var sLocation = this.byId("idLocation").getSelectedKey();
            // var sConfigProduct = this.byId("idConfigProduct").getSelectedKey();
            var sProduct = this.byId("idProduct").getSelectedKey();
            var oStartDate = this.byId("DRS1").getDateValue();
            var oEndDate = this.byId("DRS1").getSecondDateValue();
               var uniqueID = this.byId("idUniqueID");
            var  uniqueIdF = uniqueID.getSelectedItems().length > 0 ? uniqueID.getSelectedItems().map(y=>{ return y.getText()}):uniqueID.getItems().map(x=>{return x.getText()})


              var fData = this.chartfinData;
            if(fData){
                if(fData.length>0){
             const uniqueIDs1 = [...new Set(fData.map(item => item.UNIQUE_ID))];
             var uniqueIdF = uniqueIDs1
            }
        }
            // Get all Unique IDs from the dropdown (not just selected ones)
            var oUniqueIDModel = this.getView().getModel("dependentModel");
            var aAllUniqueIDs = oUniqueIDModel ? (oUniqueIDModel.getProperty("/UniqueIDs") || []) : [];

            // if (aAllUniqueIDs.length === 0) {
            //     console.log("No Unique IDs available to load actual chart");
            //     this.byId("idActualChart").setModel(new sap.ui.model.json.JSONModel({ ActualChartData: [] }));
            //     return;
            // }

            this.showBusyIndicator(true);

            // Build filters
            var aFilters = [
                new sap.ui.model.Filter("LOCATION_ID", sap.ui.model.FilterOperator.EQ, sLocation),
                new sap.ui.model.Filter("PRODUCT_ID", sap.ui.model.FilterOperator.EQ, sProduct),
                new sap.ui.model.Filter("WEEK_DATE", sap.ui.model.FilterOperator.BT, oStartDate, oEndDate)
            ];

            // Add Unique ID filter (OR condition for all unique IDs in dropdown)
            if (uniqueIdF.length > 0) {
                var aUniqueIDFilters = aAllUniqueIDs.map(function (uid) {
                    return new sap.ui.model.Filter("UNIQUE_ID", sap.ui.model.FilterOperator.EQ, uid.key);
                });

                aFilters.push(new sap.ui.model.Filter({
                    filters: aUniqueIDFilters,
                    and: false
                }));
            }
            const unique = uniqueIdF.map(id => `UNIQUE_ID eq ${JSON.parse(id)}`).join(' or ');
            var that = this;

            // Read data from getAsmbReqAnalysis
            oModel.read("/getAsmbReqAnalysis", {
                // filters: aFilters,
                urlParameters: {
                      $apply: `filter(LOCATION_ID eq '${sLocation}' and PRODUCT_ID eq '${sProduct}' and (WEEK_DATE ge ${oStartDate.toLocaleDateString("en-CA")} and WEEK_DATE le ${oEndDate.toLocaleDateString("en-CA")}) and (${unique}))/groupby((WEEK_DATE,ASSEMBLY_DESCRIPTION,ACTUAL_QTY,COUNT))`,
                    // "$select": "WEEK_DATE,ASSEMBLY_DESCRIPTION,ACTUAL_QTY,COUNT",
                    "$top": 100000
                },
                success: function (oData) {
                    console.log("Raw actual data loaded:", oData.results.length);

                    // Group by WEEK_DATE and ASSEMBLY_DESC to aggregate ACTUAL_QTY and COUNT
                    var groupedData = {};
                     var Data = oData.results.length >0 ? oData.results:that.data;

                     var groupedData = {};

                    Data.forEach(function (item) {
                        // Skip if WEEK_DATE is missing
                        if (!item.WEEK_DATE) {
                            return;
                        }

                        // Handle null or missing assembly descriptions
                        var assemblyDesc = item.ASSEMBLY_DESCRIPTION || "Unknown";

                        // Format WEEK_DATE properly
                        var weekDate = item.WEEK_DATE;
                        if (weekDate instanceof Date) {
                            weekDate = weekDate.toISOString().split("T")[0];
                        } else if (typeof weekDate === "string" && weekDate.includes("T")) {
                            weekDate = weekDate.split("T")[0];
                        }

                        // Create a unique key for grouping
                        var key = weekDate + "_" + assemblyDesc;

                        if (!groupedData[key]) {
                            groupedData[key] = {
                                WEEK_DATE: weekDate,
                                ASSEMBLY_DESC: assemblyDesc,
                                totalActualQty: 0,
                                totalCount: 0
                            };
                        }

                        // Aggregate Actual Quantity and Count
                        groupedData[key].totalActualQty += Number(item.ACTUAL_QTY) || 0;
                        groupedData[key].totalCount += Number(item.COUNT) || 0;
                    });

                    // Convert grouped data to array for chart binding
                    var aChartData = Object.values(groupedData).map(function (item) {
                        var actualQty = 0;
                        if (item.totalCount > 0) {
                            actualQty = item.totalActualQty / item.totalCount;
                        }

                        return {
                            WEEK_DATE: item.WEEK_DATE,
                            ASSEMBLY_DESC: item.ASSEMBLY_DESC,
                            FORECAST_QTY: actualQty
                        };
                    });

                    // Sort data by date
                    aChartData.sort(function (a, b) {
                        return new Date(a.WEEK_DATE) - new Date(b.WEEK_DATE);
                    });

                    console.log("Processed actual chart data:", aChartData);

                    // Bind to VizFrame
                    var oChartModel = new sap.ui.model.json.JSONModel({
                        ActualChartData: aChartData
                    });
                    that.byId("idActualChart").setModel(oChartModel);

                    var oVizFrame = that.getView().byId("idActualChart");
                    oVizFrame.setVizProperties({
                        title: { visible: false },
                        plotArea: {
                            dataLabel: {
                                visible: true,        // ✅ shows numeric values on dots
                                formatString: "##.##" // optional, control decimal format
                            },
                            marker: {
                                visible: true          // ✅ shows circular dots for each point
                            }
                        },
                        valueAxis: {
                            title: { visible: true, text: "Forecast Quantity" }
                        },
                        categoryAxis: {
                            title: { visible: true, text: "Week Date" }
                        },
                        legend: {
                            visible: true
                        }
                    });
                    // Data.forEach(function (item) {
                    //     if (!item.WEEK_DATE || !item.ASSEMBLY_DESCRIPTION) {
                    //         return;
                    //     }

                    //     // Format week date for grouping
                    //     var weekDate = item.WEEK_DATE;
                    //     if (weekDate instanceof Date) {
                    //         weekDate = weekDate.toISOString().split('T')[0];
                    //     }

                    //     var key = weekDate + "_" + item.ASSEMBLY_DESCRIPTION;

                    //     if (!groupedData[key]) {
                    //         groupedData[key] = {
                    //             WEEK_DATE: weekDate,
                    //             ASSEMBLY_DESC: item.ASSEMBLY_DESCRIPTION,
                    //             totalActualQty: 0,
                    //             totalCount: 0
                    //         };
                    //     }

                    //     groupedData[key].totalActualQty += (item.ACTUAL_QTY || 0);
                    //     groupedData[key].totalCount += (item.COUNT || 0);
                    // });

                    // // Calculate ACTUAL_QTY = ACTUAL_QTY / COUNT for each group
                    // // var aChartData = Object.values(groupedData).map(function(item) {
                    // //     var actualQty = 0;
                    // //     if (item.totalCount > 0) {
                    // //         actualQty = item.totalActualQty / item.totalCount;
                    // //     }

                    // //     return {
                    // //         WEEK_DATE: item.WEEK_DATE,
                    // //         ASSEMBLY_DESC: item.ASSEMBLY_DESC,
                    // //         ACTUAL_QTY: actualQty
                    // //     };
                    // // });

                    // var aChartData = Object.values(groupedData).map(function (item) {
                    //     return {
                    //         WEEK_DATE: item.WEEK_DATE,
                    //         ASSEMBLY_DESC: item.ASSEMBLY_DESCRIPTION,
                    //         // FORECAST_QTY: item.actualQty
                    //         FORECAST_QTY: item.totalActualQty
                    //     };
                    // });

                    // // Sort by week date
                    // aChartData.sort(function (a, b) {
                    //     return new Date(a.WEEK_DATE) - new Date(b.WEEK_DATE);
                    // });

                    // console.log("Processed actual chart data:", aChartData.length, "records");

                    // // Update chart model
                    // var oChartModel = new sap.ui.model.json.JSONModel({
                    //     ActualChartData: aChartData
                    // });
                    // that.byId("idActualChart").setModel(oChartModel);

                    // var oVizFrame = that.getView().byId("idActualChart"); // your vizFrame ID

                    // oVizFrame.setVizProperties({
                    //     title: {
                    //         visible: false // hides the title
                    //     }
                    // });

                    that.showBusyIndicator(false);
                },
                error: function (oError) {
                    console.error("Error loading actual chart data:", oError);
                    that.showErrorMessage("Failed to load actual chart data");
                    that.showBusyIndicator(false);
                }
            });
        },










        processChartData: function (data) {
            console.log("=== processChartData started with", data.length, "records ===");

            var chartData = data.map(item => ({
                Product: item.PRODUCT_ID,
                Sales: item.ACTUAL_QTY || 0,
                Unconsumed: item.UNCONSUMED_FORECAST || 0
            }));

            var oChartModel = new sap.ui.model.json.JSONModel({
                ProductData: chartData
            });

            this.getView().setModel(oChartModel);
            console.log("Chart model set with", chartData.length, "records");
        },

        processFilteredData: function (data, allUniqueIDs = []) {
            console.log("=== processFilteredData started with", data.length, "records ===");

            const uniqueProducts = [...new Set(data.map(item => item.PRODUCT_ID).filter(p => p))];
            const uniqueModelVersions = [...new Set(data.map(item => item.MODEL_VERSION).filter(m => m))];

            // Format Unique IDs using the pre-fetched allUniqueIDs
            const uniqueIDs = allUniqueIDs.map(uid => ({ key: uid, text: uid }));

            const products = uniqueProducts.map(product => ({ key: product, text: product }));
            const modelVersions = uniqueModelVersions.map(version => ({ key: version, text: version }));

            const dependentModel = this.getView().getModel("dependentModel") || new JSONModel({
                Products: [], ModelVersions: [], UniqueIDs: []
            });

            dependentModel.setData({
                Products: products,
                ModelVersions: modelVersions,
                UniqueIDs: uniqueIDs
            });
            this.byId("idProduct").setBusy(false);


            // Clear previous selections
            ["idProduct", "idModelVersion", "idUniqueID"].forEach(id => {
                const ctrl = this.byId(id);
                if (ctrl && ctrl.setSelectedKeys) ctrl.setSelectedKeys([]);
            });

            this.getView().setModel(dependentModel, "dependentModel");

            console.log("Dependent dropdowns updated:", {
                products: products.length,
                modelVersions: modelVersions.length,
                uniqueIDs: uniqueIDs.length
            });
            console.log("=== processFilteredData finished ===");
        },





        clearAllDependentDropdowns: function () {
            console.log("=== clearAllDependentDropdowns ===");

            // Clear configuration product dropdown
            var configModel = this.getView().getModel("configModel");
            if (configModel) {
                configModel.setData({ ConfigProducts: [] });
                this.byId("idConfigProduct").setSelectedKey("");
            }

            // Clear other dependent dropdowns
            this.clearDependentDropdowns();
        },

        clearDependentDropdowns: function () {
            console.log("=== clearDependentDropdowns ===");

            var dependentModel = this.getView().getModel("dependentModel");
            if (dependentModel) {
                dependentModel.setData({
                    Products: [],
                    ModelVersions: [],
                    UniqueIDs: []
                });
            }

            // Clear selections explicitly
            // this.byId("idProduct").removeAllItems();
            // this.byId("idModelVersion").removeAllSelectedItems();
            // this.byId("idUniqueID").removeAllSelectedItems();
        },

        // Utility methods
        showBusyIndicator: function (show) {
            if (this.getView()) {
                this.getView().setBusy(show);
            }
        },

        showErrorMessage: function (message) {
            if (sap.m.MessageBox) {
                sap.m.MessageBox.error(message);
            } else {
                console.error("MessageBox not available:", message);
                alert(message); // Fallback
            }
        },

        // Your existing readModel method (unchanged)
        readModel(entity, urlParameters, filter = []) {
            let allResults = [];
            let skip = 0;
            const top = urlParameters.$top || 100000;

            const fetchData = async () => {
                const currentUrlParameters = { ...urlParameters, $skip: skip };

                try {
                    const { promise, resolve, reject } = Promise.withResolvers();
                    that.oModel.read(`/${entity}`, {
                        urlParameters: currentUrlParameters,
                        success(oRes) {
                            resolve(oRes.results);
                        },
                        error(oError) {
                            reject(oError);
                        },
                    });
                    const results = await promise;

                    allResults = allResults.concat(results);

                    if (results.length === top) {
                        skip += top;
                        return await fetchData();
                    } else {
                        return allResults;
                    }
                } catch (error) {
                    throw error;
                }
            };

            return fetchData();
        }
    });
});

