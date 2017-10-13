
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojaccordion', 'ojs/ojcollapsible',
    'ojs/ojradioset', 'ojs/ojchart', 'ojs/ojtimeline', 'data/globalVars', 'ojs/ojbutton'],
        function (oj, ko, $)
        {
            function DetailAreaViewModel() {
                var self = this;

                self.afterLoginInit = function (data, event) {
                    $("#pieChart").ojChart("refresh");
                };

                self.init = function (input) {
                    if (input) {

                        console.log("filter object is :" + JSON.stringify(input));
                    }

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
                    };
                    //销量第一个饼图结束
                    //销量第二个饼图开始
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
                    };


                    // 第一个饼图结束
                };

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

                    //    console.log(stringFilter);
                    $.ajax({
                        type: "GET",
                        //url: "http://"+baseUrl+"/category/listAreaData" + stringFilter,
                        url: 'js/data/category/area.json',
                        dataType: "json",
                        success: function (resp) {
                            self.pie_sale_category_value(resp.sale.chart2.data);
                            self.pie_sale_category_label(resp.sale.chart2.chartname);

                            self.pie_profit_category_value(resp.grossProfit.chart2.data);
                            self.pie_profit_category_label(resp.grossProfit.chart2.chartname);

                        },
                        error: function (e) {
                            alert('Error: ' + e + "load local value");
                            self.sale_area_column();
                            self.sale_area_channel_customer_column();
                            self.income_area_column();
                            self.income_area_channel_customer_column();
                            self.profit_area_column();
                            self.stock_area_column();
                            self.stock_alert_area_column();
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
                };



                self.profit_area_column = function () {
                    // Implement if needed
                    var serverURL = "data/profit_area_column.txt"
                    $.get(serverURL, function (data) {
                        var obj = eval('(' + data + ')');
                        profit_area_columnSeries = [];
                        profit_area_columnGroups = [];
                        for (var i = 0; i < obj.groups.length; i++) {
                            profit_area_columnGroups.push(obj.groups[i]);
                        }
                        for (var i = 0; i < obj.series.length; i++) {
                            profit_area_columnSeries.push(obj.series[i]);
                        }
                        self.comboSeriesValue_profit_area_column(profit_area_columnSeries);
                        self.comboGroupsValue_profit_area_column(profit_area_columnGroups);
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
            //model.updateTimelineSeriesValue();
            return new DetailAreaViewModel();


        });
