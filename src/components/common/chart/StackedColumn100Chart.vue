<template>
	<div align="center">
		<h2>Stacked Column Chart</h2>
		<apexchart width="700" :options="chartOptions" :series="series"></apexchart>
	</div>
</template>

<script>
	export default {
		props: [
			"data",
			"width",
			"height",
			"isHorizontal",
			"isZoomable",
			"columnWidth",
			"showToolbar",
			"showDataLabels",
			"showLegend",
			"xAxis",
		],
		data() {
			self = this;
			return {
				series: [],
				chartOptions: {
					chart: {
						id: "stackedColumn100Chart",
						type: "bar",
						stacked: true,
						stackType: "100%",
					},
					plotOptions: {
						bar: {
							horizontal: false,
						},
					},
					xaxis: {
						categories: [],
					},
					legend: {
						show: true,
					},
					fill: {
						opacity: 1,
					},
				},
			};
		},
		methods: {
			updateChart() {
				this.series = this.data;
				ApexCharts.exec("stackedColumn100Chart", "updateOptions", {
					plotOptions: {
						bar: {
							horizontal: this.isHorizontal,
							columnWidth: this.columnWidth,
						},
					},
					dataLabels: {
						enabled: this.showDataLabels,
					},
					legend: {
						show: this.showLegend,
					},
					xaxis: {
						categories: this.xAxis,
					},
				});
			},
		},
		mounted() {
			this.updateChart();
		},
	};
</script>