<template>
	<div>
		<div style="margin: 15px 0;"></div>
		<el-checkbox-group
			v-model="selectedValue"
			:size="data.inputSize"
            :max="data.maximumChecked"
			:disabled="data.disabled">
			<el-checkbox
				v-for="(item, index) in data.data"
				:label="item.groupCodeId"
				:key="index"
				:border="data.checkboxBorder"
                @change="emitToParent">
            {{ item.groupCodeName }}</el-checkbox>
		</el-checkbox-group>
	</div>
</template>

<script>
	export default {
		props: ["data"],
		data() {
			return {
				selectedValue: [],
				checkAll: false,
			};
		},
		methods: {
			emitToParent() {
				this.$emit("returnGroupCodeId", this.selectedValue);
			},
		},
	};
</script>
