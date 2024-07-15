<template>
	<div align="center">
		<h2>Distributed Column Chart</h2>
		<apexchart :width="width" :height="height" :options="chartOptions" :series="series"></apexchart>
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
				series: this.data,
				chartOptions: {
					chart: {
						id: "distributedColumnChart",
						type: "bar",
					},
					plotOptions: {
						bar: {
							columnWidth: "45%",
							distributed: true,
						},
					},
					dataLabels: {
						enabled: false,
					},
					legend: {
						show: false,
					},
					xaxis: {
						categories: [],
					},
				},
			};
		},
		methods: {
			updateChart() {
				// this.series = this.data;
				ApexCharts.exec("distributedColumnChart", "updateOptions", {
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