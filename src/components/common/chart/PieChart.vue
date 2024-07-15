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
						id: "pieChart",
						height: this.data.height,
						width: this.data.width,
						type: "pie",
						toolbar: {
							show: this.data.showToolbar,
						},
					},
					colors: this.data.colors,
					legend: {
						show: this.data.showLegend,
						width: 200,
					},
					labels: this.data.labels,
					theme: {
						monochrome: {
							enabled: this.data.isMonoChrome,
						},
					},
					dataLabels: {
						enabled: this.data.showDataLabels,
					},
					title: {
						text: this.data.title,
					},
				},
			};
		},
		methods: {
			updateDataLabels() {
				let isMonoChrome = this.data.isMonoChrome;
				if (isMonoChrome) {
					ApexCharts.exec("pieChart", "updateOptions", {
						dataLabels: {
							formatter(val, opts) {
								const name =
									opts.w.globals.labels[opts.seriesIndex];
								return [name, val.toFixed(1) + "%"];
							},
						},
					});
				}
			},
		},
		mounted() {
			this.updateDataLabels();
		},
	};
</script>