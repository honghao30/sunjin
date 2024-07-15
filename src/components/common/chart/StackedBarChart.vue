<template>
	<div align="center">
		<h2>Stacked Bar Chart</h2>
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
			"stackType",
			"title",
		],
		data() {
			self = this;
			return {
				series: this.data,
				chartOptions: {
					chart: {
						id: "stackedBarChart",
						type: "bar",
						stacked: true,
						stackType: this.stackType,
					},
					plotOptions: {
						bar: {
							horizontal: true,
						},
					},
					stroke: {
						width: this.strokeWidth,
						colors: ["#fff"],
					},
					title: {
						text: this.title,
					},
					xaxis: {
						categories: this.xAxis,
					},
					fill: {
						opacity: 1,
					},
				},
			};
		},
		methods: {
			updateChart() {
				let xaxisLabel = this.xAxisLabel;
				let tooltipLabel = this.tooltipLabel;
				this.series = this.data;
				ApexCharts.exec("stackedBarChart", "updateOptions", {
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