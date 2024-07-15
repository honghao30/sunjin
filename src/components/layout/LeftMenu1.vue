<template>
	<el-col>
		<el-menu mode="vertical" default-active="1" class="el-menu-vertical-demo">
			<el-menu-item index="1"><i class="el-icon-message"></i></el-menu-item>
			<el-menu-item index="2"><i class="el-icon-message"></i></el-menu-item>
			<el-menu-item index="2"><i class="el-icon-message"></i></el-menu-item>
		</el-menu>
	</el-col>
</template>

<script>
export default {
	name: "LeftMenu1"
}
</script>

<style scoped>
.el-menu {
	border: none;
}
.el-menu-item {
	padding: 0px !important;
}
</style>