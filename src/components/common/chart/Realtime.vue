<template>
    <div align="center">
        <h1>Realtime Chart</h1>
        <VueApexCharts
            :width="data.width"
            :height="data.height"
            :options="chartOptionsRealtime"
            :series="series"
        />
    </div>
</template>

<script>
import ApexCharts from "apexcharts";
import VueApexCharts from "vue-apexcharts";
import { getChartData } from "@/api/chartApi";

export default {
    props: ["data"],
    components: {
        VueApexCharts,
    },

    data() {
        self = this;
        return {
            lastIndex: "",
            seriesRealtime: [],
            newSeries: [],
            series: [],
            chartOptionsRealtime: {
                chart: {
                    id: "realtime",
                    height: 350,
                    type: "line",
                    animations: {
                        enabled: this.data.enableAnimation,
                        easing: "linear",
                        dynamicAnimation: {
                            enabled: this.data.enableDynamicAnimation,
                            speed: 1000,
                        },
                    },
                    toolbar: {
                        show: this.data.showToolbar,
                    },
                    zoom: {
                        enabled: this.data.enableZoom,
                    },
                },
                dataLabels: {
                    enabled: this.data.enableDataLabels,
                },
                stroke: {
                    curve: "smooth",
                },
                title: {
                    text: this.data.title,
                    align: "left",
                },
                markers: {
                    size: 0,
                },
                xaxis: {
                    type: "datetime",
                    range: 777600000, //Only 10 days on xaxis
                    title: {
                        text: this.data.xaxisTitle,
                    },
                    labels: {
                        show: true,
                    },
                },
                yaxis: {
                    max: 100,
                    title: {
                        text: this.data.yaxisTitle,
                    },
                },
                legend: {
                    show: this.data.showLegend,
                },
            },
        };
    },

    methods: {
        getNewSeries() {
            if (this.lastIndex != this.seriesRealtime[0].data.length - 1) {
                for (let i in this.newSeries) {
                    let newData = this.seriesRealtime[i].data[
                        this.lastIndex + 1
                    ];
                    this.newSeries[i].data.push(newData);
                }
                this.lastIndex++;
            } else {
                //reset data if all data already retrieve/show in graph
                this.resetData();
            }
        },

        updateChart() {
            let self = this;
            window.setInterval(function () {
                self.getNewSeries();
                ApexCharts.exec(
                    "realtime",
                    "updateSeries",
                    self.newSeries,
                    true
                );
            }, 1000);
        },

        resetData() {
            this.newSeries = [];
            for (let i in this.seriesRealtime) {
                let group = {};
                group.name = this.seriesRealtime[i].name;
                group.data = this.seriesRealtime[i].data.slice(0, 10);
                this.newSeries.push(group);
            }
            this.lastIndex = this.newSeries[0].data.length - 1;
        },
    },

    mounted() {
        this.seriesRealtime = this.data.data.slice();
        this.resetData();
        this.updateChart();
    },
};
</script>