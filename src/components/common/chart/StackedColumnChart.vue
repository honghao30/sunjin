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
			"xAxisType",
			"xAxis",
		],
		data() {
			self = this;
			return {
				series: [],
				chartOptions: {
					chart: {
						id: "stackedColumnChart",
						type: "bar",
						stacked: true,
						toolbar: {
							show: true,
						},
						zoom: {
							enabled: true,
						},
					},
					plotOptions: {
						bar: {
							horizontal: false,
						},
					},
					xaxis: {
						type: "datetime",
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
				ApexCharts.exec("stackedColumnChart", "updateOptions", {
					chart: {
						toolbar: {
							show: this.showToolbar,
						},
						zoom: {
							enabled: this.isZoomable,
						},
					},
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
						type: this.xAxisType,
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