<template>
    <div align="center">
        <el-button-group>
            <el-button @click="changeData('one_month')">1 Month</el-button>
            <el-button @click="changeData('six_months')">6 Months</el-button>
            <el-button @click="changeData('one_year')">1 Year</el-button>
            <el-button @click="changeData()">All</el-button>
        </el-button-group>

        <VueApexCharts
            :width="data.width"
            :height="data.height"
            :series="seriesArea"
            :options="optionsArea"
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
        return {
            seriesArea: [],
            optionsArea: {
                chart: {
                    id: "areaChart",
                    type: "area",
                    zoom: {
                        enabled: this.data.enableZoom,
                    },
                },
                toolbar: {
                    show: this.data.showToolbar,
                },
                dataLabels: {
                    enabled: this.data.enableDataLabels,
                },
                //to make the curve smooth(spline)
                stroke: {
                    curve: this.data.curve,
                },
                title: {
                    text: this.data.title,
                    align: "left",
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
            this.updateChart();
        },

        updateChart() {
            //Update chart data
            ApexCharts.exec("areaChart", "updateSeries", this.data.data, true);
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
                "areaChart",
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