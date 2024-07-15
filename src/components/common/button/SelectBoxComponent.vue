<template>
	<div>
		<el-select
			v-model="selectedValue"
			:filterable="data.filterable"
			:allow-create="data.allowCreate"
			:multiple-limit="data.limitOptions"
			:collapse-tags="data.collapseTags"
			:clearable="data.clearable"
			:size="data.inputSize"
			:multiple="data.multiSelect"
			:disabled="data.disabled"
			:placeholder="data.placeholder"
			@change="emitToParent">
			<el-option
				v-for="(item, index) in data.data"
				:key="index"
				:label="item.groupCodeName"
				:value="item.groupCodeId">
			</el-option>
		</el-select>
	</div>
</template>

<script>
	export default {
		props: ["data"],
		data() {
			return {
				selectedValue: "",
			};
		},
		methods: {
			emitToParent() {
			    this.$emit('returnGroupCodeId', this.selectedValue);
			}
		},
	};
</script>
