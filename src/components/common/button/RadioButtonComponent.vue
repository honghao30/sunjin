<template>
	<div>
		<el-radio-group v-model="selectedValue" :size="data.buttonSize" :disabled="data.disabled">
			<el-radio
				v-for="(item, index) in data.data"
				:key="index"
                :label="item.groupCodeId"
				:border="data.border"
                @change="emitToParent">{{ item.groupCodeName }}
            </el-radio>
		</el-radio-group>
	</div>
</template>

<script>
	export default {
		props: ["data"],
		data() {
			return {
                selectedValue: '',
			};
		},
		methods: {
            emitToParent() {
                this.$emit('returnGroupCodeId', this.selectedValue);
            }
        },
	};
</script>
