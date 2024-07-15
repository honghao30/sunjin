<template>
	<div align="center">
		<apexchart :width="data.width" :height="data.height" :options="chartOptions" :series="series"></apexchart>
	</div>
</template>

<script>
	export default {
		props: ["data"],
		data() {
			self = this;
			return {
				series: this.data.data,
				chartOptions: {
					chart: {
                        id: "barChart",
                        type: "bar",
                        stacked: this.data.isStacked,
						stackType: this.data.stackType,
                        dataLabels: {
							position: "top",
						},
                    },
                    colors: this.data.colors,
					plotOptions: {
						bar: {
                            barHeight: "100%",
                            horizontal: true,
						},
					},
					dataLabels: {
						enabled: this.data.showDataLabels,
						style: {
							fontSize: "12px",
							colors: ["#fff"],
						},
                    },
                    tooltip: {
						shared: false,
						x: {
							formatter: function (val) {
								return val;
							},
						},
						y: {
							formatter: function (val) {
								return val;
							},
						},
					},
                    title: {
						text: this.data.title,
					},
                    stroke: {
						show: this.data.showStroke,
						width: this.data.strokeWidth,
						colors: ["#fff"],
					},
					xaxis: {
                        type: this.data.xAxisType,
                        categories: this.data.xAxis,
					},
				},
			};
        },
        methods: {
			updateChart() {
				let xaxisLabel = this.data.xAxisLabel;
				let tooltipLabel = this.data.tooltipLabel;
				ApexCharts.exec("barChart", "updateOptions", {
					xaxis: {
						labels: {
							formatter: function (val) {
								return xaxisLabel.replace("(val)", val);
							},
						},
					},
					tooltip: {
						y: {
							formatter: function (val) {
								return tooltipLabel.replace("(val)", val);
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