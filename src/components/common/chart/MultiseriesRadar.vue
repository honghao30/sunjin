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
                title: {
                    text: this.data.title,
                    align: "center",
                },
                tooltip: {
                    enabled: this.data.enableTooltip,
                },
                legend: {
                    show: this.data.showLegend,
                },
            },
        };
    },
    mounted() {
        this.series = this.data.data;
    },
};
</script>