<template>
	<div id="app">
		<login-layout v-if="$route.name == 'Login'"></login-layout>
		<common-layout v-else></common-layout>
	</div>
</template>

<script>
// @ is an alias to /src
import CommonLayout from "@/views/layout/CommonLayout";
import LoginLayout from "@/views/layout/LoginLayout";

export default {
	name: "app",
	components: {		
		CommonLayout,
		LoginLayout
	},
};
</script>
