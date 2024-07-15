<template>
	<div align="center">
		<h2>Basic Column Chart</h2>
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
			"columnWidth",
			"showDataLabels",
			"showStroke",
			"strokeWidth",
			"showLegend",
			"xAxis",
			"yAxisTitle",
			"showTooltip",
			"tooltipTitle",
		],
		data() {
			self = this;
			return {
				series: [],
				chartOptions: {
					chart: {
						id: "basicColumnChart",
						type: "bar",
					},
					plotOptions: {
						bar: {
							horizontal: false,
							columnWidth: "55%",
							endingShape: "rounded",
						},
					},
					dataLabels: {
						enabled: false,
					},
					stroke: {
						show: true,
						width: 2,
						colors: ["transparent"],
					},
					xaxis: {
						categories: [
							"Feb",
							"Mar",
							"Apr",
							"May",
							"Jun",
							"Jul",
							"Aug",
							"Sep",
							"Oct",
						],
					},
					yaxis: {
						title: {
							text: "$ (thousands)",
						},
					},
					fill: {
						opacity: 1,
					},
					tooltip: {
						y: {
							formatter: function (val) {
								return "$ " + val + " thousands";
							},
						},
					},
				},
			};
		},
		methods: {
			updateChart() {
				let tooltipTitle = this.tooltipTitle;
				this.series = this.data;
				ApexCharts.exec("basicColumnChart", "updateOptions", {
					plotOptions: {
						bar: {
							horizontal: this.isHorizontal,
							columnWidth: this.columnWidth,
							endingShape: "rounded",
						},
					},
					dataLabels: {
						enabled: this.showDataLabels,
					},
					stroke: {
						show: this.showStroke,
						width: this.strokeWidth,
					},
					legend: {
						show: this.showLegend,
					},
					xaxis: {
						categories: this.xAxis,
					},
					yaxis: {
						title: {
							text: this.yAxisTitle,
						},
					},
					tooltip: {
						y: {
							formatter: function (val) {
								return tooltipTitle.replace("(val)", val);
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