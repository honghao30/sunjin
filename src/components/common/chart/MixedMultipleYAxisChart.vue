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
				series: [],
				chartOptions: {
					chart: {
						id: "multiYaxisChart",
						height: this.data.height,
					},
					dataLabels: {
						enabled: this.data.showDataLabels,
					},
					stroke: {
						width: [1, 1, 4],
						curve: this.data.strokeType,
					},
					title: {
						text: this.data.title,
					},
					colors: this.data.colors,
					labels: this.data.labels,
					xaxis: {
						type: this.data.xAxisType,
					},
					tooltip: {
						fixed: {
							enabled: true,
							position: "topLeft", // topRight, topLeft, bottomRight, bottomLeft
							offsetY: 30,
							offsetX: 60,
						},
					},
					legend: {
						horizontalAlign: "left",
						offsetX: 40,
					},
				},
			};
		},
		methods: {
			updateChartOptions() {
				let arr = [];
				let yaxis = [];
				let yaxisObj = {};
				for (let i = 0; i < this.data.data.length; i++) {
					let obj = {
						name: this.data.data[i].name,
						type: this.data.chartType[i],
						data: this.data.data[i].data,
					};

					if (i < 1) {
						yaxisObj = {
							xisTicks: {
								show: true,
							},
							axisBorder: {
								show: true,
								color: this.data.colors[i],
							},
							labels: {
								style: {
									colors: this.data.colors[i],
								},
							},
							title: {
								text: this.data.yAxisText[i],
								style: {
									color: this.data.colors[i],
								},
							},
							tooltip: {
								enabled: this.data.showTooltip,
							},
						};
					} else {
						yaxisObj = {
							seriesName: this.data.data[i].name,
							opposite: true,
							axisTicks: {
								show: true,
							},
							axisBorder: {
								show: true,
								color: this.data.colors[i],
							},
							labels: {
								style: {
									colors: this.data.colors[i],
								},
							},
							title: {
								text: this.data.yAxisText[i],
								style: {
									color: this.data.colors[i],
								},
							},
						};
					}

					arr.push(obj);
					yaxis.push(yaxisObj);
				}
				this.series = arr;
				this.chartOptions.yaxis = yaxis;

				ApexCharts.exec("multiYaxisChart", "updateOptions", {
					yaxis: yaxis,
				});
			},
		},
		created() {
			this.updateChartOptions();
		},
	};
</script>