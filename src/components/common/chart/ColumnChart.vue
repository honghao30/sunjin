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
						id: "basicColumnChart",
						type: "bar",
						stacked: this.data.isStacked,
						stackType: this.data.stackType,
						toolbar: {
							show: this.data.showToolbar
						},
						zoom: {
							enabled: this.data.isZoomable
						}
					},
					plotOptions: {
						bar: {
							horizontal: false,
							columnWidth: this.data.columnWidth,
							distributed: this.data.isDistributed
						},
					},
					dataLabels: {
						enabled: this.data.showDataLabels,
					},
					stroke: {
						show: this.data.showStroke,
						width: 5,
						colors: ["transparent"],
					},
					legend: {
						show: this.data.showLegend
					},
					xaxis: {
                        type: this.data.xAxisType,
						categories: this.data.xAxis,
						tickPlacement: "on"
					},
					yaxis: {
						title: {
							text: this.data.yAxisTitle,
						},
					},
					fill: {
						opacity: 1,
					},
				},
			};
		},
		methods: {
			updateChart() {
				let tooltipTitle = this.data.tooltipTitle;
				ApexCharts.exec("basicColumnChart", "updateOptions", {
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