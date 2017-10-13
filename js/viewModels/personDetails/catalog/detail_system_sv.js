
define(['ojs/ojcore', 'knockout', 'jquery', 'viewModels/phone/dashboard',
    'ojs/ojknockout', 'ojs/ojaccordion', 'ojs/ojcollapsible', 'ojs/ojradioset', 'ojs/ojchart', 'ojs/ojtimeline', 'data/globalVars', 'ojs/ojbutton', 'ojs/ojpopup'],
        function (oj, ko, $, dashboard)
        {
            function DetailSystemSVModel() {
                var self = this;

                self.onClickBack = function () {
                    dashboard.onBackToFirstCatDrillDown();
                };

                self.telLabel = ko.observable("客户经理");
                self.clientWidth = ko.observable($(".demo-dialog")[0].clientWidth);
                self.s1 = ko.observable("width:");
                self.s2 = ko.observable("px");
                self.setStyle = ko.computed(function () {
                    return (self.clientWidth() - 9) + "px";
                }, this);


                self.getPosition = function (event, data) {
                    /*
                     var popup = $('#popup1');
                     popup.ojPopup("option", "position",
                     {"my": {"horizontal": "start", "vertical": "top"},
                     "at": {"horizontal": "start", "vertical": "top"},
                     "offset": {"x": data.offsetX, "y": data.offsetY}});
                     */
                };

                self.onPopupMenu = function (event, data) {
                    self.telLabel(data.group+"客户经理")
                    var popup = $('#contact');
                    if (popup.ojPopup('isOpen'))
                    {
                        //    popup.ojPopup('close');
                    } else
                    {
                        popup.ojPopup('option', 'tail', 'none');
                        popup.ojPopup('open', "#popFromHere");
                        popup.ojPopup("option", "position",
                                {"my": {"horizontal": "end", "vertical": "top"},
                                    "at": {"horizontal": "end", "vertical": "top"},
                                    "offset": {"x": 0, "y": 0}});
                    }


                };


                self.init = function (input) {
                    if (input) {

                        console.log("filter object is :" + JSON.stringify(input));
                    }

                    // 第一个柱形图开始
                    /* toggle button variables */
                    self.stackValue_sale_category_column = ko.observable('');
                    self.orientationValue_sale_category_column = ko.observable('');
                    /* chart data */
                    var sale_category_columnSeries = [];
                    var sale_category_columnGroups = [];
                    /*
                     var comboSeries1 = [{name: "销量", type: "bar", items: [{y: 4808.22}, 2644.01, 825.63, 2033.3, {y: 49.8, color: 'red', label: '最低', labelPosition: 'auto'}, 43.12, 6052.43, {y: 8089.22, color: 'green', label: '最高', labelPosition: 'auto'}, 1.56]},
                     {name: "同比", type: "line", items: [-0.6419, -0.3625, -0.6105, -0.5945, -0.4296, -0.6056, -0.5605, -0.4634, -0.8292], assignedToY2: "on"},
                     {name: "达成率", type: "line", items: [0.6419, {y: 0.3625, color: 'red', label: '最低:36%', labelPosition: 'auto'}, 0.6105, 0.5945, 0.4296, 0.6056, 0.5605, 0.4634, 0.8292], assignedToY2: "on"}
                     ];
                     var comboGroups1 = ["调和油", "玉米油", "花生油", "葵花籽油", "芝麻油", "精品油", "菜籽油", "大豆油", "稻米油"];
                     */
                    self.label_sale_category_column = ko.observable("");
                    self.comboSeriesValue_sale_category_column = ko.observable(sale_category_columnSeries);
                    self.comboGroupsValue_sale_category_column = ko.observable(sale_category_columnGroups);
                    self.yMax_sale_category_column = 10000;

                    var converterFactory_sale_category_column = oj.Validation.converterFactory('number');
                    var converterOptions_sale_category_column = {style: 'percent'};
                    self.y2Converter_sale_category_column = converterFactory_sale_category_column.createConverter(converterOptions_sale_category_column);

                    /* toggle buttons*/
                    self.stackOptions = [
                        {id: 'unstacked', label: 'unstacked', value: 'off', icon: 'oj-icon demo-bar-unstack'},
                        {id: 'stacked', label: 'stacked', value: 'on', icon: 'oj-icon demo-bar-stack'}
                    ];
                    self.orientationOptions = [
                        {id: 'vertical', label: 'vertical', value: 'vertical', icon: 'oj-icon demo-bar-vert'},
                        {id: 'horizontal', label: 'horizontal', value: 'horizontal', icon: 'oj-icon demo-bar-horiz'}
                    ];
                    self.menuItemSelect = function (event, ui) {
                        self.selectedMenuItem(ui.item.children("a").text());
                    };
                    self.selectedMenuItem = ko.observable("(None selected yet)");
                    self.val = ko.observableArray(["2015"]);
                    // 第一个柱形图结束

//============================================================================饼图开始======================================================
                    // 第一个饼图开始
                    self.pie_sale_category_label = ko.observable('');
                    self.pie_sale_category_value = ko.observable([]);
                    self.effectValue = ko.observable('highlightAndExplode');
                    self.threeDValue = ko.observable('off');
                    self.threeDOptions = [
                        {id: '2D', label: '2D', value: 'off', icon: 'oj-icon demo-2d'},
                        {id: '3D', label: '3D', value: 'on', icon: 'oj-icon demo-3d'}
                    ];
                    self.threeDValueChange = function (event, data) {
                        self.threeDValue(data.value);
                        return true;
                    }
                    //销量第一个饼图结束
                    //第二个饼图开始
                    self.pie_profit_category_label = ko.observable('');
                    self.pie_profit_category_value = ko.observable([]);
                    self.effectValue = ko.observable('highlightAndExplode');
                    self.threeDValue = ko.observable('off');
                    self.threeDOptions = [
                        {id: '2D', label: '2D', value: 'off', icon: 'oj-icon demo-2d'},
                        {id: '3D', label: '3D', value: 'on', icon: 'oj-icon demo-3d'}
                    ];
                    self.threeDValueChange = function (event, data) {
                        self.threeDValue(data.value);
                        return true;
                    }


                    // 第一个饼图结束
                }
                self.init();


                self.reInitView = function () {
                    var stringFilter = "?" + "primarySelection=" + (filterData.primarySelection).toUpperCase()
                            + "&secondSelection=" + filterData.secondSelection
                            + "&year=" + filterData.year
                            + "&quarter=" + filterData.quarter
                            + "&month=" + filterData.month
                            + "&category_1_selection=" + filterData.firstArea
                            + "&category_2_selection=" + filterData.secondArea
                            + "&change=" + filterData.change
                            + "&dataRoleId=" + chooseFilter.rowId

                    console.log(stringFilter);
                    var dataFile = "";
                    if(dashboard.firstTitle === "华南大区"){
                        dataFile = 'js/data/sales/customer_data.json';
                    }
                    else{
                        dataFile = 'js/data/sales/customer_data_normal.json';
                    }
                    $.ajax({
                        type: "GET",
                        //url: "http://"+baseUrl+"/category/listCustomerData" + stringFilter,
                        url: dataFile,
                        dataType: "json",
                        success: function (resp) {
                            self.comboSeriesValue_sale_category_column(resp.sale.chart1.data.series);
                            self.comboGroupsValue_sale_category_column(resp.sale.chart1.data.groups);
                            self.label_sale_category_column(resp.sale.chart1.chartname);
                        },
                        error: function (e) {
                            alert('Error: ' + e + "load local value");
                            self.sale_category_column();
                        }
                    });
                };
                // Below are a subset of the ViewModel methods invoked by the ojModule binding
                // Please reference the ojModule jsDoc for additionaly available methods.

                /**
                 * Optional ViewModel method invoked when this ViewModel is about to be
                 * used for the View transition.  The application can put data fetch logic
                 * here that can return a Promise which will delay the handleAttached function
                 * call below until the Promise is resolved.
                 * @param {Object} info - An object with the following key-value pairs:
                 * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
                 * @param {Function} info.valueAccessor - The binding's value accessor.
                 * @return {Promise|undefined} - If the callback returns a Promise, the next phase (attaching DOM) will be delayed until
                 * the promise is resolved
                 */
                self.handleActivated = function (info) {
                    // Implement if needed
                    self.reInitView();
                };

                /**
                 * Optional ViewModel method invoked after the View is inserted into the
                 * document DOM.  The application can put logic that requires the DOM being
                 * attached here.
                 * @param {Object} info - An object with the following key-value pairs:
                 * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
                 * @param {Function} info.valueAccessor - The binding's value accessor.
                 * @param {boolean} info.fromCache - A boolean indicating whether the module was retrieved from cache.
                 */
                self.handleAttached = function (info) {
                    // Implement if needed
                };

                self.sale_category_column = function () {
                    // Implement if needed
                    var serverURL = "data/sale_category_column.txt"
                    $.get(serverURL, function (data) {
                        var obj = eval('(' + data + ')');
                        sale_category_columnSeries = [];
                        sale_category_columnGroups = [];
                        for (var i = 0; i < obj.groups.length; i++) {
                            sale_category_columnGroups.push(obj.groups[i]);
                        }
                        for (var i = 0; i < obj.series.length; i++) {
                            sale_category_columnSeries.push(obj.series[i]);
                        }
                        self.comboSeriesValue_sale_category_column(sale_category_columnSeries);
                        self.comboGroupsValue_sale_category_column(sale_category_columnGroups);
                    });
                };

                /**
                 * Optional ViewModel method invoked after the bindings are applied on this View.
                 * If the current View is retrieved from cache, the bindings will not be re-applied
                 * and this callback will not be invoked.
                 * @param {Object} info - An object with the following key-value pairs:
                 * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
                 * @param {Function} info.valueAccessor - The binding's value accessor.
                 */
                self.handleBindingsApplied = function (info) {
                    // Implement if needed

                };

                /*
                 * Optional ViewModel method invoked after the View is removed from the
                 * document DOM.
                 * @param {Object} info - An object with the following key-value pairs:
                 * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
                 * @param {Function} info.valueAccessor - The binding's value accessor.
                 * @param {Array} info.cachedNodes - An Array containing cached nodes for the View if the cache is enabled.
                 */
                self.handleDetached = function (info) {
                    // Implement if needed
                };
            }

            /*
             * Returns a constructor for the ViewModel so that the ViewModel is constrcuted
             * each time the view is displayed.  Return an instance of the ViewModel if
             * only one instance of the ViewModel is needed.
             */
            var model = new DetailSystemSVModel();
            //model.updateTimelineSeriesValue();
            return model;


        });
