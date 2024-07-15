<template>
    <div align="center">
        <i class="el-icon-s-home" />
        <br />
        <h2>Chart</h2>
        <h3>Zoomable Timeseries, Brush Chart & Area Chart</h3>

        <VueApexCharts
            :width="data.width"
            :height="data.height"
            :options="chartOptions"
            :series="chartSeries"
        />

        <VueApexCharts
            v-show="data.enableBrush"
            :width="data.width"
            :height="data.heightBrush"
            :series="brushSeries"
            :options="brushOptions"
        />
    </div>
</template>

<script>
import ApexCharts from "apexcharts";
import VueApexCharts from "vue-apexcharts";
// import moment from "moment/moment";

export default {
    props: ["data"],
    components: {
        VueApexCharts,
    },

    data() {
        var self = this;
        return {
            maxZoomOut: "",
            minZoomOut: "",

            //timeseries chart
            chartSeries: [],
            chartOptions: {
                chart: {
                    id: "chart",
                    type: this.data.type,
                    zoom: {
                        type: "x",
                        enabled: this.data.enableZoom,
                        autoScaleYaxis: true,
                    },
                    toolbar: {
                        show: true,
                        tools: {
                            download: this.data.enableDownload,
                            selection: this.data.enableToolbar,
                            zoom: this.data.enableToolbar,
                            zoomin: this.data.enableToolbar,
                            zoomout: this.data.enableToolbar,
                            pan: this.data.enableToolbar,
                            reset: false,
                            customIcons: [
                                {
                                    icon: '<i class="el-icon-s-home" />',
                                    index: 0,
                                    title: "Reset",
                                    class: "custom-icon",
                                    click: function () {
                                        //if brush chart visible
                                        self.updateSelection();

                                        //if brush chart not visible
                                        ApexCharts.exec("chart", "resetSeries");
                                    },
                                },
                            ],
                        },
                        autoSelected: "zoom",
                    },
                    events: {
                        // To restrict maximum level of zoomout
                        beforeZoom: function (chartContext, { xaxis }) {
                            //current value showing on chart
                            let max = xaxis.max;
                            let min = xaxis.min;

                            let maxChart = "";
                            let minChart = "";

                            if (
                                max > self.maxZoomOut &&
                                min < self.minZoomOut
                            ) {
                                maxChart = self.maxZoomOut;
                                minChart = self.minZoomOut;
                            } else {
                                maxChart = max;
                                minChart = min;
                            }

                            return {
                                xaxis: {
                                    min: minChart,
                                    max: maxChart,
                                },
                            };
                        },
                    },
                },
                dataLabels: {
                    enabled: this.data.enableDataLabels,
                },
                markers: {
                    size: 0,
                },
                title: {
                    text: this.data.title,
                    align: "left",
                },
                colors: this.data.colors,
                fill: {
                    type: this.data.fillType,
                    gradient: {
                        shadeIntensity: 1,
                        inverseColors: false,
                        opacityFrom: 0.5,
                        opacityTo: 0,
                        stops: [0, 90, 100],
                    },
                },
                yaxis: {
                    labels: {
                        formatter: function (val) {
                            return val.toFixed(0);
                        },
                    },
                    title: {
                        text: this.data.yAxisTitle,
                    },
                },
                xaxis: {
                    type: "datetime",
                    title: {
                        text: this.data.xAxisTitle,
                    },
                    labels: {
                        datetimeFormatter: {
                            year: "yyyy",
                            month: "yyyy-MM",
                            day: "MM-dd",
                            hour: "HH:mm",
                        },
                    },
                },
                tooltip: {
                    enabled: this.data.enableTooltip,
                    x: {
                        format: "yyyy-MM-dd",
                    },
                    y: {
                        formatter: function (val) {
                            return val.toFixed(2);
                        },
                    },
                },
                legend: {
                    show: this.data.enableLegend,
                },
            },

            //brush chart
            brushSeries: [],
            brushOptions: {
                chart: {
                    id: "brushChart",
                    type: this.data.brushType,
                    brush: {
                        target: "chart",
                        enabled: this.data.enableBrush,
                    },
                    selection: {
                        enabled: true,
                    },
                },
                xaxis: {
                    type: "datetime",
                    title: {
                        text: this.data.xAxisTitle,
                        offsetX: 0,
                        offsetY: 10,
                    },
                    labels: {
                        datetimeFormatter: {
                            year: "yyyy",
                            month: "yyyy-MM",
                            day: "MM-dd",
                            hour: "HH:mm",
                        },
                    },
                },
                yaxis: {
                    tickAmount: 2,
                    min: 0,
                    labels: {
                        formatter: function (value) {
                            return value.toFixed(0);
                        },
                    },
                },
                legend: {
                    show: this.data.enableLegend,
                },
            },
        };
    },

    methods: {
        getData() {
            //For beforeZoom function purposes
            this.minZoomOut = new Date(this.data.data[0].data[0].x).getTime();
            this.maxZoomOut = new Date(
                this.data.data[0].data[this.data.data[0].data.length - 1].x
            ).getTime();
            this.updateChart();
        },

        updateSelection() {
            ApexCharts.exec("brushChart", "updateOptions", {
                chart: {
                    selection: {
                        xaxis: {
                            min: new Date(
                                this.data.data[0].data[0].x
                            ).getTime(),
                            max: new Date(
                                this.data.data[0].data[
                                    this.data.data[0].data.length - 1
                                ].x
                            ).getTime(),
                        },
                    },
                },
            });
        },

        updateChart() {
            //Update chart data
            ApexCharts.exec("chart", "updateSeries", this.data.data, true);
            ApexCharts.exec("brushChart", "updateSeries", this.data.data, true);

            //If toolbar is false, zoom will be false in all condition and reset button not visible.
            if (!this.data.enableToolbar) {
                ApexCharts.exec("chart", "updateOptions", {
                    chart: {
                        zoom: {
                            enabled: false,
                        },
                        toolbar: {
                            tools: {
                                customIcons: [],
                            },
                        },
                    },
                });
            }

            //If enableBrush is true, xaxis and legend of id="chart" will be hidden
            if (this.data.enableBrush) {
                ApexCharts.exec("chart", "updateOptions", {
                    xaxis: {
                        title: {
                            text: "",
                        },
                    },
                    legend: {
                        show: false,
                    },
                });

                this.updateSelection();
            }
        },
    },

    mounted() {
        this.getData();
    },
};
</script>