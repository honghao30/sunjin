<template>
	<div id="app">
		<login-layout v-if="$route.name == 'Login'"></login-layout>
		<common-layout v-else></common-layout>
	</div>
</template>

<script>
// @ is an alias to /src
import DefaultLayout from "@/views/layout/DefaultLayout";
import CommonLayout from "@/views/layout/CommonLayout";
import LoginLayout from "@/views/layout/LoginLayout";

export default {
	name: "app",
	components: {
		DefaultLayout,
		CommonLayout,
		LoginLayout
	},
};
</script>

<style>
/* #app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
} */
</style>
