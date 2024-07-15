<template>
	<div>
		<VueApexCharts :width="data.width" :height="data.height" :series="series" :options="options" />
	</div>
</template>

<script>
	import ApexCharts from "apexcharts";
	import VueApexCharts from "vue-apexcharts";

	export default {
		props: ["data"],
		components: {
			VueApexCharts,
		},
		data() {
			return {
				series: [],
				options: {
					chart: {
						id: "scatterChart",
						height: 350,
						type: "scatter",
						toolbar: {
							show: this.data.enableToolbar,
						},
					},
					fill: {
						opacity: this.data.opacityPlotData,
					},
					title: {
						text: this.data.title,
						align: "center",
					},
					xaxis: {
						type: this.data.xaxisType,
						title: {
							text: this.data.xaxisTitle,
							offsetX: 0,
							offsetY: 10,
						},

						labels: {
							formatter: function (val) {
								return val.toFixed(0);
							},
						},
					},
					yaxis: {
						title: { text: this.data.yaxisTitle },
					},
					annotations: {
						xaxis: [
							{
								x: this.data.data.xaxisAverage,
								borderColor: this.data.xaxisAverageColor,
								label: {
									show: this.data.xaxisAverageEnableLabel,
									text: this.data.xaxisAverageText,
									style: {
										color: this.data.xaxisAverageTextColor,
										background: this.data
											.xaxisAverageTextBackground,
									},
								},
							},
						],
						yaxis: [
							{
								y: this.data.data.yaxisAverage,
								borderColor: this.data.yaxisAverageColor,
								label: {
									show: this.data.yaxisAverageEnableLabel,
									text: this.data.yaxisAverageText,
									style: {
										color: this.data.yaxisAverageTextColor,
										background: this.data
											.yaxisAverageTextBackground,
									},
								},
							},
						],
					},
				},
			};
		},
		mounted() {
			this.series = this.data.data.value;
		},
	};
</script>