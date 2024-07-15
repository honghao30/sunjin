<template>
	<div class="parent">
		<div class="logo">
			<logo />
		</div>
		<div class="top-menu"></div>
		<div class="left-menu1">
			<left-menu1 />
		</div>
		<div class="left-menu2">
			<left-menu2 />
		</div>
		<div class="main">
			<router-view/>
		</div>
		<div class="footer">
			<span>@2020 제주데이터허브 관리자 페이지</span>
		</div>
	</div>
</template>

<script>
import Logo from "@/components/topmenu/Logo";
import LeftMenu1 from "@/components/layout/LeftMenu1";
import LeftMenu2 from "@/components/layout/LeftMenu2";

export default {
	name: "DefaultLayout",
	components: {
		Logo,
		LeftMenu1,
		LeftMenu2
	}
}
</script>

<style scoped>
.parent {
	display: grid;
	grid-template-columns: 50px 200px 1fr;
	grid-template-rows: 80px 1fr 50px;
	grid-column-gap: 0px;
	grid-row-gap: 0px;
}

.logo {
	grid-area: 1 / 1 / 2 / 3;
}

.top-menu {
	grid-area: 1 / 1 / 2 / 4;
}

.left-menu1 {
	grid-area: 2 / 1 / 3 / 2;
}

.left-menu2 {
	grid-area: 2 / 2 / 3 / 3;
}

.main {
	grid-area: 2 / 3 / 3 / 4;
}

.footer {
	grid-area: 3 / 1 / 4 / 4;
	position: relative;
	left: 0;
	bottom: 0;
	width: 100%;
	padding: 15px 0;
	text-align: center;
}
</style>