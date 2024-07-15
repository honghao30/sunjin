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
						height: 350,
						type: "bubble",
						toolbar: {
							show: this.data.showToolbar,
						},
					},
					dataLabels: {
						enabled: this.data.showDataLabels,
					},
					fill: {
						type: this.data.type,
						opacity: 0.8,
					},
					title: {
						text: this.data.title,
					},
					xaxis: {
						tickAmount: 12,
						type: "category",
					},
				},
			};
		},
	};
</script>