<template>
	<div>
		<wordcloud
			:data='data.data'
			:nameKey='data.nameKey'
			:valueKey='data.valueKey'
			:color='data.color'
            :margin='data.margin'
            :wordPadding='data.wordPadding'
            :rotate='data.rotate'
            :spiral='data.spiral'
            :fontScale='data.fontScale'
            :font='data.font'
            :fontSize='data.fontSize'
			:showTooltip='data.showTooltip'
			:wordClick="data.wordClickFunction">
        </wordcloud>
	</div>
</template>

<script>
	import wordcloud from "vue-wordcloud";

	export default {
		props: ["data"],
		components: {
			wordcloud,
		},
		data() {
			return {
				myColors: ["#1f77b4", "#629fc9", "#94bedb", "#c9e0ef"],
			};
		},
	};
</script>

<style>
div.tooltip {
    height: 13% !important;
}
</style>