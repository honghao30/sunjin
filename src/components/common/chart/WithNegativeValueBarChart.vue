<template>
	<div align="center">
		<h2>Bar Chart With Negative Values</h2>
		<apexchart :width="width" :height="height" :options="chartOptions" :series="series"></apexchart>
	</div>
</template>

<script>
	export default {
		props: [
			"data",
			"width",
			"height",
			"showDataLabels",
			"showStroke",
			"strokeWidth",
			"xAxis",
			"xAxisLabel",
			"tooltipLabel",
			"colors",
			"stackType",
			"title",
		],
		data() {
			self = this;
			return {
				series: this.data,
				chartOptions: {
					chart: {
						type: "bar",
						stacked: true,
					},
					colors: this.colors,
					plotOptions: {
						bar: {
							horizontal: true,
						},
					},
					dataLabels: {
						enabled: this.showDataLabels,
					},
					stroke: {
						width: this.strokeWidth,
						colors: ["#fff"],
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
						text: this.title2,
					},
					xaxis: {
						categories: this.xAxis,
						labels: {
							formatter: function (val) {
								return Math.abs(Math.round(val)) + "%";
							},
						},
					},
				},
			};
		},
		methods: {
			updateChart() {
				let xaxisLabel = this.xAxisLabel;
				ApexCharts.exec("stackedBarChart", "updateOptions", {
					xaxis: {
						labels: {
							formatter: function (val) {
								return xaxisLabel.replace("(val)", val);
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