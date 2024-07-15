<template>
    <div align="center">
        <VueApexCharts
            :width="data.width"
            :height="data.height"
            :series="series"
            :options="options"
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
            series: [],
            options: {
                chart: {
                    type: "radar",
                },
                dataLabels: {
                    enabled: this.data.enableDataLabels,
                },
                plotOptions: {
                    radar: {
                        size: this.data.size, //Size of radar
                        polygons: {
                            strokeColors: this.data.strokeChartColors,
                            fill: {
                                colors: this.data.chartColors,
                            },
                        },
                    },
                },
                title: {
                    text: this.data.title,
                    align: "center",
                },
                colors: this.data.plottedChartColors,
                markers: {
                    size: 4,
                    colors: ["#fff"],
                    strokeColor: "#FF4560",
                    strokeWidth: 2,
                },
                yaxis: {
                    tickAmount: 7,
                    labels: {
                        formatter: function (val, i) {
                            if (i % 2 === 0) {
                                return val;
                            } else {
                                return "";
                            }
                        },
                    },
                },
                tooltip: {
                    enabled: this.data.enableTooltip,
                },
                legend: {
                    show: this.data.showLegend,
                    showForSingleSeries: this.data.showForSingleSeries,
                },
            },
        };
    },
    mounted() {
        //this.series.push(this.data[0]);
        this.series = this.data.data;
    },
};
</script>