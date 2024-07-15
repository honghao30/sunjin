<template>
	<div class="page-login">
		<div id="container">
			<div class="content-wrap">
				<h1 class="form-title">로그인</h1>
				<form class="form">
					<div class="i-vertical">
						<label for="email" style="text-align: left;">이메일</label>
						<input type="email" id="email">
					</div>
					<div class="i-vertical">
						<label for="password" style="text-align: left;">비밀번호</label>
						<input type="password" id="password">
					</div>
					<div class="contents-footer">
						<button type="submit" class="btn btn-fill-bluedark w-full" >로그인</button>
					</div>
				</form>
			</div><!--//content-wrap-->
		</div><!--//container-->
	</div>
</template>

<script>

export default {
	name: "Login",
	data() {
		return {};
	},
	methods: {}
};
</script>

<style scoped src="@/assets/css/style.css">
</style>
