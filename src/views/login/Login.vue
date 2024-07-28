<template>
	<div class="login-form__wrap">
		<div class="login-page__logo">
			<img src="../../assets/image/common/logo_color.svg" alt="" />
		</div>
		<div class="login__form">
			<form @submit.prevent="handleLogin">
				<div class="input-item__wrap">
					<i class="icon-io">
						<svg xmlns="http://www.w3.org/2000/svg" width="11" height="10" viewBox="0 0 11 10" fill="none">
							<path d="M10.4998 9.5H0.50025C0.524617 7.2867 2.32638 5.5 4.54545 5.5H6.45455C8.67362 5.5 10.4754 7.2867 10.4998 9.5Z" stroke="#D9D9D9"/>
							<circle cx="5.5" cy="2.5" r="2" stroke="#D9D9D9"/>
						</svg>
					</i>
					<el-input placeholder="userId" v-model="userId"></el-input>
				</div>
				<div class="input-item__wrap">
					<i class="icon-io">
						<svg xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
							<rect x="0.5" y="4.73077" width="10" height="7.46154" rx="0.5" stroke="#D9D9D9"/>
							<path d="M2.19231 3.80769C2.19231 1.98091 3.67321 0.5 5.5 0.5C7.32679 0.5 8.80769 1.98091 8.80769 3.80769V4.57692H2.19231V3.80769Z" stroke="#D9D9D9"/>
							<circle cx="5.5" cy="8.73076" r="1.26923" fill="#C4C4C4"/>
						</svg>
					</i>					
					<el-input placeholder="Password" v-model="passWord" show-password></el-input>
				</div>
				<div class="button__wrap">
					<el-button type="primary" @click="handleLogin">
						<i class="el-icon-lock"></i>
						Login
					</el-button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Login",
		data() {
			return {
				userId: '',
				passWord: '',
			};
		},
		methods: {
			handleLogin() {
				this.$router.push('/dashboard'); 
			}
		}
	};
</script>

