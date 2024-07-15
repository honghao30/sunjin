<template>
	<div align="center">
		<h2>Line & Area Chart</h2>
		<apexchart :width="width" :height="height" :options="chartOptions" :series="series"></apexchart>
	</div>
</template>

<script>
	export default {
		props: [
			"data",
			"chartType",
			"columnData",
			"lineData",
			"width",
			"height",
			"showLegend",
			"showDataLabels",
			"showToolbar",
			"labels",
			"xAxisType",
			"yAxisText",
			"oppositeYAxisText",
			"title",
		],
		data() {
			self = this;
			return {
				series: [
					{
						name: this.data[0].name,
						type: this.chartType[0],
						data: this.data[0].data,
					},
					{
						name: this.data[1].name,
						type: this.chartType[1],
						data: this.data[1].data,
					},
				],
				chartOptions: {
					chart: {
						height: this.height,
						type: "line",
					},
					stroke: {
						curve: "smooth",
					},
					fill: {
						type: "solid",
						opacity: [0.35, 1],
					},
					labels: this.labels,
					markers: {
						size: 0,
					},
					yaxis: [
						{
							title: {
								text: this.yAxisText,
							},
						},
						{
							opposite: true,
							title: {
								text: this.oppositeYAxisText,
							},
						},
					],
					tooltip: {
						shared: true,
						intersect: false,
					},
				},
			};
		},
	};
</script>