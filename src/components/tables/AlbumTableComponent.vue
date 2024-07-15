<template>
	<div>
		<v-gallery
			type="gallery"
			:images="data.imageList"
			:caption="data.showCaption"
			:control-pause="data.controlPause"
			:control-title="data.controlTitle"
			:dark="data.darkMode">
		</v-gallery>
		<!-- <v-gallery type="gallery" :images="data.imageList" :caption="data.showCaption" class="image-box">
			<a href="javascript:void(0);"
				v-for="(img, index) in data.imageList"
				:data-image="img.url"
				:title="img.title"
				:key="index">
				<div class="bgbox">
					<img :src="img.url" style="width: 300px">
				</div>
				<div class="img-title" v-html="img.title"></div>
			</a>
		</v-gallery>-->
	</div>
</template>

<script>
	import Vue from "vue";

	import vGallery from "v-gallery";

	Vue.use(vGallery);

	export default {
		props: ["data"],
	};
</script>

<style lang="scss">
	.v-gallery .light-gallery a .image-container img {
		width: 300px !important;
	}
</style>
