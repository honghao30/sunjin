<template>
	<el-col>
		<el-menu mode="vertical" default-active="1" class="el-menu-vertical-demo">
			<h5 class="menu-title">제주빅데이터센터</h5>
			<el-menu-item-group>
				<el-menu-item index="1"><i class="el-icon-message"></i>대시보드</el-menu-item>
			</el-menu-item-group>
			<el-menu-item-group>
				<h6 class="menu-group-title">예약관리</h6>
				<el-menu-item index="2"><i class="el-icon-message"></i>Lab 예약관리</el-menu-item>
				<el-menu-item index="3"><i class="el-icon-message"></i>일분분석실 예약관리</el-menu-item>
				<el-menu-item index="4"><i class="el-icon-message"></i>교육장 예약관리</el-menu-item>
			</el-menu-item-group>
			<el-menu-item-group>
				<el-menu-item index="5"><i class="el-icon-message"></i>반출신청관리</el-menu-item>
			</el-menu-item-group>
			<el-menu-item-group>
				<h6 class="menu-group-title">통계관리</h6>
				<el-menu-item index="6"><i class="el-icon-message"></i>예약현황 통계</el-menu-item>
				<el-menu-item index="7"><i class="el-icon-message"></i>반출내역 통계</el-menu-item>
			</el-menu-item-group>
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
	border-left: solid 1px #e6e6e6;
	border-right: solid 1px #e6e6e6;
	padding-left: 10px;
	padding-right: 10px;
}
.menu-title {
	text-align: left;
	margin-bottom: 0px;
}

.menu-group-title {
	text-align: left;
	margin-top: 10px;
	margin-left: 15px;
	margin-bottom: 0px;
}
.el-menu-item {
	padding: 0px !important;
	text-align: left;
	margin-left: 15px;
}
</style>