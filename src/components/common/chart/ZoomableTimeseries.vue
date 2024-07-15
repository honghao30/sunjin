<template>
    <div align="center">
        <br />
        <h2>Zoomable Timeseries Chart</h2>
        <el-button-group>
            <el-button @click="changeData('one_month')">1 Month</el-button>
            <el-button @click="changeData('six_months')">6 Months</el-button>
            <el-button @click="changeData('one_year')">1 Year</el-button>
            <el-button @click="changeData()">All</el-button>
        </el-button-group>

        <VueApexCharts
            :width="data.width"
            :height="data.height"
            :options="chartOptions"
            :series="series"
        />
    </div>
</template>

<script>
import ApexCharts from "apexcharts";
import VueApexCharts from "vue-apexcharts";
import moment from "moment/moment";

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
            series: [],
            chartOptions: {
                chart: {
                    id: "zoomableTimeseries",
                    type: "area",
                    zoom: {
                        type: "x",
                        enabled: this.data.enableZoom,
                        autoScaleYaxis: true,
                    },
                    toolbar: {
                        show: this.data.showToolbar,
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
                    type: "gradient",
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
                        text: this.data.yaxisTitle,
                    },
                },
                xaxis: {
                    type: "datetime",
                    title: {
                        text: this.data.xaxisTitle,
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
                    show: this.data.showLegend,
                },
            },
        };
    },

    methods: {
        getData() {
            this.minZoomOut = new Date(this.data.data[0].data[0].x).getTime();
            this.maxZoomOut = new Date(
                this.data.data[0].data[this.data.data[0].data.length - 1].x
            ).getTime();
            this.updateChart();
        },

        updateChart() {
            //Update chart data
            ApexCharts.exec(
                "zoomableTimeseries",
                "updateSeries",
                this.data.data,
                true
            );
        },

        changeData(timeline) {
            let start = "";
            let end = "";
            switch (timeline) {
                case "one_month":
                    start = moment(this.data.data[0].data[0].x).format(
                        "YYYY-MM-DD"
                    );
                    end = moment(this.data.data[0].data[0].x)
                        .add(1, "months")
                        .format("YYYY-MM-DD");
                    break;
                case "six_months":
                    start = moment(this.data.data[0].data[0].x).format(
                        "YYYY-MM-DD"
                    );
                    end = moment(this.data.data[0].data[0].x)
                        .add(6, "months")
                        .format("YYYY-MM-DD");
                    break;
                case "one_year":
                    start = moment(this.data.data[0].data[0].x).format(
                        "YYYY-MM-DD"
                    );
                    end = moment(this.data.data[0].data[0].x)
                        .add(1, "year")
                        .format("YYYY-MM-DD");
                    break;
                default:
                    start = moment(this.data.data[0].data[0].x).format(
                        "YYYY-MM-DD"
                    );
                    end = moment(
                        this.data.data[0].data[
                            this.data.data[0].data.length - 1
                        ].x
                    ).format("YYYY-MM-DD");
            }
            ApexCharts.exec(
                "zoomableTimeseries",
                "zoomX",
                new Date(start).getTime(),
                new Date(end).getTime()
            );
        },
    },

    mounted() {
        this.getData();
    },
};
</script>