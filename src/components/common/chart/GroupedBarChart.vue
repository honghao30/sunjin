<template>
	<div align="center">
		<h2>Grouped Bar Chart</h2>
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
		],
		data() {
			self = this;
			return {
				series: this.data,
				chartOptions: {
					chart: {
						type: "bar",
					},
					plotOptions: {
						bar: {
							horizontal: true,
							dataLabels: {
								position: "top",
							},
						},
					},
					dataLabels: {
						enabled: this.showDataLabels,
						offsetX: -6,
						style: {
							fontSize: "12px",
							colors: ["#fff"],
						},
					},
					stroke: {
						show: this.showStroke,
						width: this.strokeWidth,
						colors: ["#fff"],
					},
					xaxis: {
						categories: this.xAxis,
					},
				},
			};
		},
	};
</script>