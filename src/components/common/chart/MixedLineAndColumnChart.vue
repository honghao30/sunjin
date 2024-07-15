<template>
	<div align="center">
		<apexchart :width="data.width" :height="data.height" :options="chartOptions" :series="series"></apexchart>
	</div>
</template>

<script>
	export default {
		props: [
			"data",
		],
		data() {
			self = this;
			return {
				series: [
					{
						name: this.data.data[0].name,
						type: this.data.chartType[0],
						data: this.data.data[0].data,
					},
					{
						name: this.data.data[1].name,
						type: this.data.chartType[1],
						data: this.data.data[1].data,
					},
				],
				chartOptions: {
					chart: {
						height: this.data.height,
						width: this.data.width,
						type: "line",
					},
					stroke: {
						curve: this.data.strokeType,
						width: [0, 4],
					},
					fill: {
						type: "solid",
						// opacity: [0.35, 1],
					},
					markers: {
						size: 0,
					},
					title: {
						text: this.data.title,
					},
					dataLabels: {
						enabled: this.data.showDataLabels,
						enabledOnSeries: [1],
					},
					labels: this.data.labels,
					xaxis: {
						type: this.data.xAxisType,
					},
					yaxis: [
						{
							title: {
								text: this.data.yAxisText,
							},
						},
						{
							opposite: true,
							title: {
								text: this.data.oppositeYAxisText,
							},
						},
					],
					tooltip: {
						show: this.data.showTooltip,
						shared: true,
						intersect: false,
					},
				},
			};
		},
	};
</script>