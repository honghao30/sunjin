<template>
    <div align="center">
        <h2>Brush Chart</h2>
        <VueApexCharts
            :width="data.width"
            :height="data.heightTarget"
            :series="seriesLine"
            :options="optionsLine"
        />
        <VueApexCharts
            :width="data.width"
            :height="data.heightBrush"
            :series="seriesBrush"
            :options="optionsBrush"
        />
    </div>
</template>

<script>
import ApexCharts from "apexcharts";
import VueApexCharts from "vue-apexcharts";

export default {
    props: ["data"],
    components: {
        VueApexCharts,
    },
    data() {
        return {
            //line chart
            seriesLine: [],
            optionsLine: {
                chart: {
                    id: "lineChart",
                    type: "line",
                    height: this.data.height,
                    toolbar: {
                        show: this.data.showToolbar,
                    },
                },
                title: {
                    text: this.data.title,
                    align: "left",
                },
                dataLabels: {
                    enabled: this.data.enableDataLabels,
                },
                yaxis: {
                    labels: {
                        formatter: function (val) {
                            return val.toFixed(0);
                        },
                    },
                    title: {
                        text: this.data.yaxisTitle,
                    },
                },
                xaxis: {
                    type: "datetime",
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
                    show: false,
                },
            },

            //brush chart
            seriesBrush: [],
            optionsBrush: {
                chart: {
                    id: "brush",
                    height: 150,
                    type: "area",
                    brush: {
                        target: "lineChart",
                        enabled: this.data.enableBrush,
                    },
                    selection: {
                        enabled: this.data.enableSelection,
                    },
                },
                xaxis: {
                    type: "datetime",
                    title: {
                        text: this.data.xaxisTitle,
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
                    show: this.data.showLegend,
                },
            },
        };
    },
    methods: {
        updateChart() {
            ApexCharts.exec("lineChart", "updateSeries", this.data.data, true);
            ApexCharts.exec("brush", "updateSeries", this.data.data, true);

            //update brush chart details/settings
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
    },
    mounted() {
        this.updateChart();
    },
};
</script>