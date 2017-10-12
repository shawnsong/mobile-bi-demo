/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * dashboard_sv module
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'data/data', 'viewModels/phone/dashboard',
            'ojs/ojchart'
], function (oj, ko, $, data, dashboard) {
    /**
     * The view model for the main content view template
     */
    function dashboard_OverallAccViewModel() {
        var self = this;

        /* basic chart data */
        self.bubbleSeriesValue = dashboard.bubbleSeriesValue;
        self.bubbleGroupsValue = dashboard.bubbleGroupsValue;
        self.plotArea = dashboard.plotArea;
        self.onFirstDrillDown = dashboard.onFirstDrillDown;
        self.xAxis = dashboard.xAxis;
        self.yAxis = dashboard.yAxis;
        self.polylineSeriesValue = dashboard.polylineSeriesValue;
        self.polylineGroupsValue = dashboard.polylineGroupsValue;
    }

    return new dashboard_OverallAccViewModel();
});
