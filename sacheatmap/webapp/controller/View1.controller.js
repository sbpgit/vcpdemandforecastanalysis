sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/odata/v2/ODataModel",
    "sap/ui/model/json/JSONModel",
     "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/viz/ui5/controls/VizTooltip",
    "sap/viz/ui5/format/ChartFormatter",
    "sap/viz/ui5/api/env/Format"
], (Controller, ODataModel, JSONModel, Filter, FilterOperator, VizTooltip, ChartFormatter, Format) => {
    "use strict";
    var that;
    var bSelectAllActive = false;

    return Controller.extend("vcpapp.sacheatmap.controller.View1", {
        onInit() {
          that = this;
    that.oModel = that.getOwnerComponent().getModel("oModel");

   

    // numeric formatter for tooltips
    // Format.numericFormatter(ChartFormatter.getInstance());
    // var formatPattern = ChartFormatter.DefaultPattern;

    // get heatmap
    var oViz = this.byId("heatmap");

    // create & connect tooltip
    var oTooltip = new VizTooltip({});
    oTooltip.connect(oViz.getVizUid());
    // oTooltip.setFormatString(formatPattern.STANDARDFLOAT);

            // Load distinct LOCATION_IDs
            this._loadLocations();
        },

       

        _loadLocations: function() {
             let oFilter2022 = new Filter("YEAR", FilterOperator.EQ, "2022");
                that.byId("mcLocation").setBusy(true)
            that.oModel.read("/getClusterHeatmap", {
                 filters: [oFilter2022],
                urlParameters: {
                    "$select": "LOCATION_ID",
                     "$top": 80000,
                },
                success: function(oData) {
                        that.byId("mcLocation").setBusy(false)
                    let uniqueLocs = [...new Set(oData.results.map(d => d.LOCATION_ID))];
                    let oModel = new JSONModel(uniqueLocs.map(l => ({ key: l, text: l })));
                    this.byId("mcLocation").setModel(oModel);
                    this.byId("mcLocation").bindItems("/", new sap.ui.core.Item({ key: "{key}", text: "{text}" }));
                }.bind(this)
            });
        },

       onLocationSelect: function() {
    that.getView().setBusy(true);
    let aLocs = this.byId("mcLocation").getSelectedKeys();
    if (aLocs.length === 0) return;

    let aFilters = aLocs.map(loc => new Filter("LOCATION_ID", FilterOperator.EQ, loc));
    that.oModel.read("/getClusterHeatmap", {
        filters: [new Filter(aFilters, false)], // OR within Location
        urlParameters: { "$select": "CONFIG_PRODUCT, PRODUCT_ID, CLUSTER_ID, YEAR, CHAR_DESC", "$top": 80000 },
        success: function(oData) {
            that.getView().setBusy(false);

            // CONFIG_PRODUCT
            let congifprod = [...new Set(oData.results.map(o => o.CONFIG_PRODUCT))];
            let oConfigModel = new JSONModel(congifprod.map(c => ({ key: c, text: c })));
            this.byId("mcConfig").setModel(oConfigModel);
            this.byId("mcConfig").bindItems("/", new sap.ui.core.Item({ key: "{key}", text: "{text}" }));

            // PRODUCT_ID
            let prodId = [...new Set(oData.results.map(o => o.PRODUCT_ID))];
            let oProdModel = new JSONModel(prodId.map(c => ({ key: c, text: c })));
            this.byId("mcProduct").setModel(oProdModel);
            this.byId("mcProduct").bindItems("/", new sap.ui.core.Item({ key: "{key}", text: "{text}" }));

            // CLUSTER_ID with "Select All"
            let clusterId = [...new Set(oData.results.map(o => o.CLUSTER_ID))];
            clusterId.unshift("ALL"); // Add "Select All" at the top
            let oClusterModel = new JSONModel(clusterId.map(c => ({ key: c, text: c === "ALL" ? "Select All" : c })));
            this.byId("mcCluster").setModel(oClusterModel);
            this.byId("mcCluster").bindItems("/", new sap.ui.core.Item({ key: "{key}", text: "{text}" }));

            // YEAR
            let Year = [...new Set(oData.results.map(o => o.YEAR))];
            this.byId("mcYear").setModel(new JSONModel(Year.map(c => ({ key: c, text: c }))));
            this.byId("mcYear").bindItems("/", new sap.ui.core.Item({ key: "{key}", text: "{text}" }));

            // CHAR_DESC
            let charDesc = [...new Set(oData.results.map(o => o.CHAR_DESC))];
            this.byId("mcChar").setModel(new JSONModel(charDesc.map(c => ({ key: c, text: c }))));
            this.byId("mcChar").bindItems("/", new sap.ui.core.Item({ key: "{key}", text: "{text}" }));

        }.bind(this)
    });
},


        // onConfigSelect: function() {
        //     that.byId("mcProduct").setBusy(true)
        //     let aLocs = this.byId("mcLocation").getSelectedKeys();
        //     let aConfigs = this.byId("mcConfig").getSelectedKeys();
        //     if (aLocs.length === 0 || aConfigs.length === 0) return;

        //     let aFilters = [];
        //     aFilters.push(new Filter(aLocs.map(loc => new Filter("LOCATION_ID", FilterOperator.EQ, loc)), false));
        //     aFilters.push(new Filter(aConfigs.map(c => new Filter("CONFIG_PRODUCT", FilterOperator.EQ, c)), false));

        //     that.oModel.read("/getClusterHeatmap", {
        //         filters: aFilters,
        //         urlParameters: { "$select": "PRODUCT_ID"},
        //         success: function(oData) {
        //             that.byId("mcProduct").setBusy(false)
        //             let uniqueProducts = [...new Set(oData.results.map(d => d.PRODUCT_ID))];
        //             let oModel = new JSONModel(uniqueProducts.map(p => ({ key: p, text: p })));
        //             this.byId("mcProduct").setModel(oModel);
        //             this.byId("mcProduct").bindItems("/", new sap.ui.core.Item({ key: "{key}", text: "{text}" }));
        //         }.bind(this)
        //     });
        // },

        // onProdSelect: function() {
        //   that.byId("mcCluster").setBusy(true)
        //   let aLocs = this.byId("mcConfig").getSelectedKeys();
        //     let aProds = this.byId("mcProduct").getSelectedKeys();
        //     if (aLocs.length === 0 || aProds.length === 0) return;

        //     let aFilters = [];
        //     aFilters.push(new Filter(aLocs.map(loc => new Filter("CONFIG_PRODUCT", FilterOperator.EQ, loc)), false));
        //     aFilters.push(new Filter(aProds.map(p => new Filter("PRODUCT_ID", FilterOperator.EQ, p)), false));

        //     that.oModel.read("/getClusterHeatmap", {
        //         filters: aFilters,
        //         urlParameters: { "$select": "CLUSTER_ID, CHAR_DESC"},
        //         success: function(oData) {
        //             that.byId("mcCluster").setBusy(false)
        //             let uniqueClusters = [...new Set(oData.results.map(d => d.CLUSTER_ID))];
        //             let oModel = new JSONModel(uniqueClusters.map(clu => ({ key: clu, text: clu })));
        //             this.byId("mcCluster").setModel(oModel);
        //             this.byId("mcCluster").bindItems("/", new sap.ui.core.Item({ key: "{key}", text: "{text}" }));

        //             let uniqueAttrs = [...new Set(oData.results.map(d => d.CHAR_DESC))];
        //             let oAttrModel = new JSONModel(uniqueAttrs.map(a => ({ key: a, text: a })));
        //             this.byId("mcChar").setModel(oAttrModel);
        //             this.byId("mcChar").bindItems("/", new sap.ui.core.Item({ key: "{key}", text: "{text}" }));
        //         }.bind(this)
        //     });
        // },

        // onClusterSelect: function() {
        // that.byId("mcYear").setBusy(true)
        //   let aProds = this.byId("mcProduct").getSelectedKeys();
        //     let aClusts = this.byId("mcCluster").getSelectedKeys();
        //     if (aProds.length === 0 || aClusts.length === 0) return;

        //     let aFilters = [];
        //     aFilters.push(new Filter(aProds.map(p => new Filter("PRODUCT_ID", FilterOperator.EQ, p)), false));
        //     aFilters.push(new Filter(aClusts.map(clu => new Filter("CLUSTER_ID", FilterOperator.EQ, clu)), false));

        //     that.oModel.read("/getClusterHeatmap", {
        //         filters: aFilters,
        //         urlParameters: { "$select": "YEAR"},
        //         success: function(oData) {
        //             that.byId("mcYear").setBusy(false)
        //             let uniqueYears = [...new Set(oData.results.map(d => d.YEAR))];
        //             let oModel = new JSONModel(uniqueYears.map(y => ({ key: y, text: y })));
        //             this.byId("mcYear").setModel(oModel);
        //             this.byId("mcYear").bindItems("/", new sap.ui.core.Item({ key: "{key}", text: "{text}" }));
        //         }.bind(this)
        //     });
        // },

var :bSelectAllActive = false, // global flag at controller level

onClusterSelect: function(oEvent) {
    var oMultiCombo = oEvent.getSource();
    var oChangedItem = oEvent.getParameter("changedItem");
    var sKey = oChangedItem.getKey();

    // Handle "Select All" clicked
    if (sKey === "ALL") {
        if (!bSelectAllActive) {
            // Activate Select All → select everything except "ALL"
            bSelectAllActive = true;
            var aOtherKeys = oMultiCombo.getItems()
                .map(item => item.getKey())
                .filter(key => key !== "ALL");
            oMultiCombo.setSelectedKeys(aOtherKeys);

            // Keep "ALL" visually checked
            oChangedItem.setSelected(true);
        } else {
            // Deactivate Select All → clear everything
            bSelectAllActive = false;
            oMultiCombo.removeAllSelectedItems();
            oChangedItem.setSelected(false);
        }
        return; // prevent further processing
    }

    // Handle individual changes (including ❌ removal)
    var aSelectedKeys = oMultiCombo.getSelectedKeys();

    // Collect all real keys except "ALL"
    var aAllOtherKeys = oMultiCombo.getItems()
        .map(item => item.getKey())
        .filter(key => key !== "ALL");

    // Check if all are selected
    var bAllSelected = aAllOtherKeys.length > 0 &&
                       aAllOtherKeys.every(key => aSelectedKeys.includes(key));

    var oSelectAllItem = oMultiCombo.getItems().find(item => item.getKey() === "ALL");

    if (bAllSelected) {
        // Auto-check ALL
        bSelectAllActive = true;
        if (oSelectAllItem) {
            oSelectAllItem.setSelected(true);
        }
    } else {
        // Not all selected → uncheck ALL
        bSelectAllActive = false;
        if (oSelectAllItem) {
            oSelectAllItem.setSelected(false);
        }
    }
},










onApplyFilters: function() {
    that.getView().setBusy(true)
    let aLocs = this.byId("mcLocation").getSelectedKeys();
    let aConfigs = this.byId("mcConfig").getSelectedKeys();
    let aProducts = this.byId("mcProduct").getSelectedKeys();
    let aClusters = this.byId("mcCluster").getSelectedKeys();
    let aYear = this.byId("mcYear").getSelectedKeys();
    let aChar = this.byId("mcChar").getSelectedKeys();

    let aFilters = [];

    if (aLocs.length) {
        aFilters.push(new Filter(aLocs.map(loc => new Filter("LOCATION_ID", FilterOperator.EQ, loc)), false));
    }
    if (aConfigs.length) {
        aFilters.push(new Filter(aConfigs.map(c => new Filter("CONFIG_PRODUCT", FilterOperator.EQ, c)), false));
    }
    if (aProducts.length) {
        aFilters.push(new Filter(aProducts.map(p => new Filter("PRODUCT_ID", FilterOperator.EQ, p)), false));
    }

    if (aClusters.length) {
        aFilters.push(new Filter(aClusters.map(clu => new Filter("CLUSTER_ID", FilterOperator.EQ, clu)), false));
    }

    if (aYear.length) {
        aFilters.push(new Filter(aYear.map(y => new Filter("YEAR", FilterOperator.EQ, y)), false));
    }

    if (aChar.length) {
        aFilters.push(new Filter(aChar.map(a => new Filter("CHAR_DESC", FilterOperator.EQ, a)), false));
    }

    that.oModel.read("/getClusterHeatmap", {
        filters: aFilters,
        urlParameters: { "$top": 80000 },
        success: function(oData) {
                that.getView().setBusy(false)
            let aData = oData.results;

                       let grouped = {};
    aData.forEach(item => {
        let key = item.LOCATION_ID + "|" + item.PRODUCT_ID + "|" + item.CLUSTER_ID + "|" + item.PRIMARY_ID;

        if (!grouped[key]) {
            grouped[key] = {
                rows: [],
                maxCharSeq: item.CHAR_SEQUENCE
            };
        }

        grouped[key].rows.push(item);

        if (item.CHAR_SEQUENCE > grouped[key].maxCharSeq) {
            grouped[key].maxCharSeq = item.CHAR_SEQUENCE;
        }
    });

    let aggregated = [];
    Object.values(grouped).forEach(group => {
        let maxSeq = group.maxCharSeq;
        let maxRows = group.rows.filter(r => r.CHAR_SEQUENCE === maxSeq);

        let totalORD = maxRows.reduce((sum, r) => sum + (Number(r.ORD_QTY) || 0), 0);

        let template = maxRows[0];
        aggregated.push({
            LOCATION_ID: template.LOCATION_ID,
            PRODUCT_ID: template.PRODUCT_ID,
            CLUSTER_ID: template.CLUSTER_ID,
            PRIMARY_ID: template.PRIMARY_ID,
            CLUSTER_SORT_SEQ: template.CLUSTER_SORT_SEQ,
            PRIMARY_ID_SEQUENCE: template.PRIMARY_ID_SEQUENCE,
            ORD_QTY: totalORD
        });
    });

    // === Step 2: Get all unique Primary IDs and CHAR_DESC ===
    let uniquePrimaryIDs = [...new Set(aggregated.map(d => d.PRIMARY_ID))];
    let uniqueCharDesc = [...new Set(aData.map(d => d.CHAR_DESC))]; // take all CHAR_DESC from raw data

    // === Step 3: Build cross-join grid (PrimaryID × CHAR_DESC) ===
    let finalData = [];
    uniquePrimaryIDs.forEach(pid => {
        let ordQty = aggregated.find(d => d.PRIMARY_ID === pid)?.ORD_QTY || 0;
        uniqueCharDesc.forEach(attr => {
            // check if data exists
            let cell = aData.find(d => d.PRIMARY_ID === pid && d.CHAR_DESC === attr);

            finalData.push({
                PRIMARY_ID: pid,
                PrimaryLabel: pid + " (" + ordQty + ")",   // y-axis label
                CHAR_DESC: attr,                      // x-axis label
                CHARVAL_NUM: cell ? cell.CHARVAL_NUM : null,
                COLOR_CODE: cell ? cell.COLOR_CODE : "#DDDDDD", // grey fallback
                CLUSTER_SORT_SEQ: cell ? cell.CLUSTER_SORT_SEQ : 0,
                PRIMARY_ID_SEQUENCE: cell ? cell.PRIMARY_ID_SEQUENCE : 0,
                SIZE: ordQty
            });
        });
    });

    let maxORD = Math.max(...aggregated.map(d => d.ORD_QTY));
finalData.forEach(item => {
    item.SIZE = maxORD > 0 ? (item.ORD_QTY / maxORD) * 50 : 5; 
});

    // === Step 4: Sort Y-axis (by cluster + sequence) ===
finalData.sort((a, b) => {
    if (a.CLUSTER_SORT_SEQ !== b.CLUSTER_SORT_SEQ) {
        return a.CLUSTER_SORT_SEQ - b.CLUSTER_SORT_SEQ; // ascending cluster
    }
    return a.PRIMARY_ID_SEQUENCE - b.PRIMARY_ID_SEQUENCE; // ascending sequence
});

// Reverse the order for Y-axis
finalData.reverse();

    // === Step 5: Coloring rules ===
    let oSeen = {};
    let aRules = [];
    finalData.forEach(item => {
        let key = item.PRIMARY_ID + "|" + item.CHAR_DESC;
        if (!oSeen[key]) {
            oSeen[key] = true;
            aRules.push({
                dataContext: { Attribute: item.CHAR_DESC, PrimaryID: item.PrimaryLabel },
                properties: { color: item.COLOR_CODE }
            });
        }
    });

    // === Step 6: Bind to VizFrame ===
    let oJSONModel = new JSONModel({ Results: finalData });
    let oViz = this.byId("heatmap");
    oViz.setModel(oJSONModel);


            
            // aData.sort((a, b) => {
            //     if (a.CLUSTER_SORT_SEQ !== b.CLUSTER_SORT_SEQ) {
            //         return b.CLUSTER_SORT_SEQ - a.CLUSTER_SORT_SEQ;
            //     }
            //     // else if (a.PRIMARY_ID_SEQUENCE !== b.PRIMARY_ID_SEQUENCE) {
            //     //     return a.RIMARY_ID_SEQUENCE - b.RIMARY_ID_SEQUENCE;
            //     // }
            //     // return b.PRIMARY_ID - a.PRIMARY_ID;
            //     return b.PRIMARY_ID_SEQUENCE - a.PRIMARY_ID_SEQUENCE;
            // });


            // let oJSONModel = new JSONModel({ Results: aData });
            // let oViz = this.byId("heatmap");
            // oViz.setModel(oJSONModel);

            //            var oSeen = {};
            //             var aRules = [];
            //             aData.forEach(function(item) {
            //                 var key = item.PRIMARY_ID + "|" + item.CHAR_DESC;
            //                 if (!oSeen[key]) {
            //                     oSeen[key] = true;
            //                     aRules.push({
            //                         dataContext: { Attribute: item.CHAR_DESC, PrimaryID: item.PrimaryLabel },
            //                         properties: { color: item.COLOR_CODE }
            //                     });
            //                 }
            //             });

           let uniqueRows = [...new Set(finalData.map(d => d.PRIMARY_ID))];
          if (uniqueRows.length <= 20) {
                oViz.setVizProperties({
                    legend: { visible: false },
                    categoryAxis: { title: { visible: false }, label: { angle: 45 } },
                    categoryAxis2: { title: { visible: false }},
                    plotArea: {
                        dataLabel: {
                            visible: true,
                            // hideWhenOverlap: false,   // always show even in small cells
                            // formatString: "0.##"      // formats CHARVAL_NUM nicely
                        },
                        dataPointStyle: { rules: aRules },
                        bubble: { minSize: 4, maxSize: 24 }
                    }
                });
            }

            else{
            oViz.setVizProperties({
                    legend: { visible: false },
                        categoryAxis: { title: { visible: false }, label: { angle: 45 } },
                        categoryAxis2: { title: { visible: false }, label: { formatString: "string" }},
                        plotArea: {
                            dataLabel: { visible: false },
                            dataPointStyle: { rules: aRules },
                            colorPalette: [], // optional, if you use custom colors
                            size: {
                                min: 5,     // minimum cell size
                                max: 50,    // maximum cell size
                                value: "SIZE" // bind to your SIZE property
                            }
                        }
            });
        }
        }.bind(this),
        error: function(oError) {
            console.error("Error fetching getClusterHeatmap:", oError);
        }
    });
}

    });
});