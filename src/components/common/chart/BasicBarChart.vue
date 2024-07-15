<template>
	<div align="center">
		<h2>Basic Bar Chart</h2>
		<apexchart :width="width" :height="height" :options="chartOptions" :series="series"></apexchart>
	</div>
</template>

<script>
	export default {
		props: ["data", "width", "height", "showDataLabels", "xAxis"],
		data() {
			self = this;
			return {
				series: this.data,
				chartOptions: {
					chart: {
						type: "bar",
						dataLabels: {
							position: "top",
						},
					},
					plotOptions: {
						bar: {
							horizontal: true,
						},
					},
					dataLabels: {
						enabled: this.showDataLabels,
					},
					xaxis: {
						categories: this.xAxis,
					},
				},
			};
		},
	};
</script>