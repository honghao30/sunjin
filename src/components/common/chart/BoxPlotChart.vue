<template>
	<div align="center">
		<kendo-chart
			:title-text="'Monthly Mean Temperatures (&deg;F)'"
			:legend-visible="false"
			:series="series"
			:category-axis="categoryAxis"
			:theme="'sass'">
        </kendo-chart>
	</div>
</template>

<script>
    import Vue from 'vue';
    import '@progress/kendo-ui';
    import '@progress/kendo-theme-default/dist/all.css'
    import { ChartInstaller } from '@progress/kendo-charts-vue-wrapper';

    Vue.use(ChartInstaller);

	export default {
		props: ["data"],
		data() {
			self = this;
			return {
				series: [
					{
						type: "boxPlot",
						data: this.data.data,
						tooltip: {
							visible: this.data.showTooltip,
						},
					},
				],
				categoryAxis: {
					categories: this.data.categories,
					majorGridLines: {
						visible: this.data.showGridLines,
					},
					labels: {
						rotation: "auto",
					},
				},
			};
		},
	};
</script>