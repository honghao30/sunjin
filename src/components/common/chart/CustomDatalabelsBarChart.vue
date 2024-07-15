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
				series: this.data.data,
				chartOptions: {
					chart: {
						id: "customDataLabelsBarChart",
						type: "bar",
					},
					plotOptions: {
						bar: {
							barHeight: "100%",
							distributed: true,
							horizontal: true,
							dataLabels: {
								position: "bottom",
							},
						},
					},
					colors: this.data.colors,
					dataLabels: {
						enabled: this.data.showDataLabels,
						textAnchor: "start",
						style: {
							colors: ["#fff"],
						},
						formatter: function (val, opt) {
							return (
								opt.w.globals.labels[opt.dataPointIndex] +
								":  " +
								val
							);
						},
						offsetX: 0,
						dropShadow: {
							enabled: true,
						},
					},
					stroke: {
						show: this.data.showStroke,
						width: this.data.strokeWidth,
						colors: ["#fff"],
					},
					legend: {
						show: this.data.showLegend
					},
					xaxis: {
						type: this.data.xAxisType,
						categories: this.data.xAxis,
					},
					yaxis: {
						labels: {
							show: false,
						},
					},
					title: {
						text: this.data.title,
						align: "center",
						floating: true,
					},
					tooltip: {
						y: {
							title: {
								formatter: function () {
									return "";
								},
							},
						},
					},
				},
			};
		},
	};
</script>