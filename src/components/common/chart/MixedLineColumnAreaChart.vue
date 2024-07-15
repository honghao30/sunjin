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
						height: 350,
						type: "line",
						stacked: false,
					},
					stroke: {
						width: [0, 2, 5],
						curve: this.data.strokeType,
					},
					plotOptions: {
						bar: {
							columnWidth: "50%",
						},
					},

					fill: {
						opacity: [0.85, 0.25, 1],
					},
					labels: this.data.labels,
					markers: {
						size: 0,
					},
					xaxis: {
						type: this.data.xAxisType,
					},
					yaxis: {
						title: {
							text: this.data.yAxisText,
						},
						min: 0,
					},
					tooltip: {
						shared: true,
						intersect: false,
					},
				},
			};
		},
		methods: {
			updateChartOptions() {
				let arr = [];
				for (let i = 0; i < this.data.data.length; i++) {
					let obj = {
						name: this.data.data[i].name,
						type: this.data.chartType[i],
						data: this.data.data[i].data,
					};
					arr.push(obj);
				}
				this.series = arr;
			},
		},
		created() {
			this.updateChartOptions();
		},
	};
</script>