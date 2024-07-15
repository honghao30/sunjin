<template>
	<div id="wrap" align="center">
		<div id="chart-year">
			<apexchart
				type="bar"
				:width="data.width"
				:height="data.height"
				ref="chart"
				:options="chartOptions"
				:series="series">
      </apexchart>
		</div>
		<div id="chart-quarter">
			<apexchart
				type="bar"
				:width="data.width"
				:height="data.height"
				ref="chartQuarter"
				:options="chartOptionsQuarter"
				:series="seriesQuarter">
      </apexchart>
		</div>
	</div>
</template>

<script>
	// Apex = {
	//   chart: {
	//     toolbar: {
	//       show: false
	//     }
	//     },
	//     tooltip: {
	//       shared: false
	//     },
	//     legend: {
	//       show: false
	//     }
	// }

	// var colors = ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#00D9E9', '#FF66C3'];

	function updateQuarterChart(sourceChart, destChartIDToUpdate) {
		var series = [];
		var seriesIndex = 0;
		var colors = [];

		if (sourceChart.w.globals.selectedDataPoints[0]) {
			var selectedPoints = sourceChart.w.globals.selectedDataPoints;
			for (var i = 0; i < selectedPoints[seriesIndex].length; i++) {
				var selectedIndex = selectedPoints[seriesIndex][i];
				var yearSeries = sourceChart.w.config.series[seriesIndex];
				series.push({
					name: yearSeries.data[selectedIndex].x,
					data: yearSeries.data[selectedIndex].quarters,
				});
				colors.push(yearSeries.data[selectedIndex].color);
			}

			if (series.length === 0)
				series = [
					{
						data: [],
					},
				];

			return ApexCharts.exec(destChartIDToUpdate, "updateOptions", {
				series: series,
				colors: colors,
				fill: {
					colors: colors,
				},
			});
		}
	}

	export default {
		props: [
			"data",
		],
		data() {
			self = this;
			return {
				arrayData: this.data.data,
				dataYearSeries: [],
				series: [
					{
						data: [],
					},
				],
				chartOptions: {
					chart: {
						id: "barYear",
						type: "bar",
						toolbar: {
							show: this.data.showToolbar,
						},
						events: {
							dataPointSelection: function (e, chart, opts) {
								var quarterChartEl = document.querySelector(
									"#chart-quarter"
								);
								var yearChartEl = document.querySelector(
									"#chart-year"
								);

								if (opts.selectedDataPoints[0].length === 1) {
									if (
										quarterChartEl.classList.contains("active")
									) {
										updateQuarterChart(chart, "barQuarter");
									} else {
										yearChartEl.classList.add(
											"chart-quarter-activated"
										);
										quarterChartEl.classList.add("active");
										updateQuarterChart(chart, "barQuarter");
									}
								} else {
									updateQuarterChart(chart, "barQuarter");
								}

								if (opts.selectedDataPoints[0].length === 0) {
									yearChartEl.classList.remove(
										"chart-quarter-activated"
									);
									quarterChartEl.classList.remove("active");
								}
							},
							updated: function (chart) {
								updateQuarterChart(chart, "barQuarter");
							},
						},
					},
					tooltip: {
						shared: false,
					},
					legend: {
						show: this.data.showLegend,
					},
					plotOptions: {
						bar: {
							distributed: this.data.isDistributed,
							horizontal: true,
							barHeight: "75%",
							dataLabels: {
								position: "bottom",
							},
						},
					},
					dataLabels: {
						enabled: this.data.showDataLabels,
						textAnchor: "start",
						style: {
							colors: ["#fff"],
						},
						formatter: function (val, opt) {
							return opt.w.globals.labels[opt.dataPointIndex];
						},
						offsetX: 0,
						dropShadow: {
							enabled: true,
						},
					},

					colors: this.data.colors,

					states: {
						normal: {
							filter: {
								type: "desaturate",
							},
						},
						active: {
							allowMultipleDataPointsSelection: true,
							filter: {
								type: "darken",
								value: 1,
							},
						},
					},
					tooltip: {
						x: {
							show: false,
						},
						y: {
							title: {
								formatter: function (val, opts) {
									return opts.w.globals.labels[
										opts.dataPointIndex
									];
								},
							},
						},
					},
					title: {
						text: this.data.primaryTitle,
						offsetX: 15,
					},
					subtitle: {
						text: "(Click on bar to see details)",
						offsetX: 15,
					},
					yaxis: {
						labels: {
							show: false,
						},
					},
				},

				seriesQuarter: [
					{
						data: [],
					},
				],
				chartOptionsQuarter: {
					chart: {
						id: "barQuarter",
						height: 400,
						width: "100%",
						type: "bar",
						stacked: true,
					},
					plotOptions: {
						bar: {
							columnWidth: "50%",
							horizontal: false,
						},
					},
					legend: {
						show: this.data.showLegend,
					},
					grid: {
						yaxis: {
							lines: {
								show: false,
							},
						},
						xaxis: {
							lines: {
								show: true,
							},
						},
					},
					yaxis: {
						labels: {
							show: false,
						},
					},
					title: {
						text: this.data.secondaryTitle,
						offsetX: 10,
					},
					tooltip: {
						x: {
							formatter: function (val, opts) {
								return opts.w.globals.seriesNames[opts.seriesIndex];
							},
						},
						y: {
							title: {
								formatter: function (val, opts) {
									return opts.w.globals.labels[
										opts.dataPointIndex
									];
								},
							},
						},
					},
				},
			};
		},
		methods: {
			makeData() {
				let dataSet = this.arrayData;
				let dataYearSeries = [];

				for (let i = 0; i < dataSet.length; i++) {
					let dataObject = {
						x: this.data.xAxis[i],
						y: dataSet[i].y,
						color: this.data.colors[i],
						quarters: dataSet[i].quarters,
					};

					dataYearSeries.push(dataObject);
				}
				this.dataYearSeries = dataYearSeries;
				this.series[0].data = this.dataYearSeries;
			},
		},
		created() {
			this.makeData();
		},
	};
</script>

<style scoped>
	#wrap {
		margin: 45px auto;
		max-width: 800px;
		position: relative;
	}

	.chart-box {
		padding-left: 0;
	}

	#chart-year,
	#chart-quarter {
		width: 96%;
		max-width: 48%;
		box-shadow: none;
		padding-left: 0;
		padding-top: 20px;
		background: #fff;
		border: 1px solid #ddd;
	}

	#chart-year {
		float: left;
		position: relative;
		transition: 1s ease transform;
		z-index: 3;
	}

	#chart-year.chart-quarter-activated {
		transform: translateX(0);
		transition: 1s ease transform;
	}

	#chart-quarter {
		float: left;
		position: relative;
		z-index: -2;
		transition: 1s ease transform;
	}

	#chart-quarter.active {
		transition: 1.1s ease-in-out transform;
		transform: translateX(0);
		z-index: 1;
	}

	@media screen and (min-width: 480px) {
		#chart-year {
			transform: translateX(50%);
		}
		#chart-quarter {
			transform: translateX(-50%);
		}
	}

	select#model {
		display: none;
		position: absolute;
		top: -40px;
		left: 0;
		z-index: 2;
		cursor: pointer;
		transform: scale(0.8);
	}
</style>