<template>
	<div align="center">
		<h2>Donut Chart</h2>
		<apexchart :width="data.width" :height="data.height" :options="chartOptions" :series="series"></apexchart>

		<div class="actions" v-if="data.showAction">
			<button @click="appendData">+ ADD</button>

			<button @click="removeData">- REMOVE</button>

			<button @click="randomize">RANDOMIZE</button>

			<button @click="reset">RESET</button>
		</div>
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
				counter: this.data.defaultDataShow,
				series: this.data.data,
				chartOptions: {
					chart: {
						id: "donutChart",
						height: this.data.height,
						width: this.data.width,
						type: "donut",
						toolbar: {
							show: this.data.showToolbar,
						},
					},
					fill: {
						type: this.data.fillType,
					},
					colors: this.data.colors,
					legend: {
						show: this.data.showLegend,
						width: 200,
					},
					labels: this.data.labels,
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
			defaultDisplay() {
				let arr = [];
				let labels = [];
				if (this.data.defaultDataShow > this.data.data.length) {
					this.counter = this.data.data.length;
					for (let i = 0; i < this.counter; i++) {
						arr.push(this.data.data[i]);
						labels.push(this.data.labels[i]);
					}
				} else {
					for (let i = 0; i < this.data.defaultDataShow; i++) {
						arr.push(this.data.data[i]);
						labels.push(this.data.labels[i]);
					}
				}
				this.series = arr;
				this.chartOptions.labels = labels;
				ApexCharts.exec("donutChart", "updateOptions", {
					labels: labels,
				});
			},
			appendData() {
				let arr = this.series.slice();
				let preSlice = this.chartOptions.labels.slice();
				let labels = [];

				for (let i = 0; i < this.counter; i++) {
					labels.push(preSlice[i]);
				}

				if (this.counter < this.data.data.length) {
					arr.push(this.data.data[this.counter]);
					labels.push(this.data.labels[this.counter]);
					this.series = arr;
					this.chartOptions.labels = labels;
					this.counter++;

					ApexCharts.exec("donutChart", "updateOptions", {
						labels: labels,
					});
				} else {
					alert("Nothing else to add");
				}
			},

			removeData() {
				if (this.series.length === 1) return;
				let arr = this.series.slice();
				let preSlice = this.chartOptions.labels.slice();
				let currentLabels = [];

				for (let i = 0; i < this.counter; i++) {
					currentLabels.push(preSlice[i]);
				}

				arr.pop();
				currentLabels.pop();
				this.series = arr;
				this.chartOptions.labels = currentLabels;
				this.counter--;

				ApexCharts.exec("donutChart", "updateOptions", {
					labels: this.chartOptions.labels,
				});
			},

			randomize() {
				this.series = this.series.map(function () {
					return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
				});
			},

			reset() {
				this.counter = this.data.defaultDataShow;
				this.defaultDisplay();
				// this.series = this.data;
			},
		},
		mounted() {
			if (this.data.showAction) {
				this.defaultDisplay();
			}
		},
	};
</script>

<style scoped>
	.actions {
		top: -10px;
		position: relative;
		z-index: 10;
		max-width: 400px;
		margin: 0 auto;
	}
	button {
		color: #fff;
		background: #20b2aa;
		padding: 5px 10px;
		margin: 2px;
		font-weight: bold;
		font-size: 13px;
		border-radius: 5px;
	}
</style>