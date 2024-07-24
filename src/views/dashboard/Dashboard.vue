<template>
	<div class="wrap">
		<div class="link-group">
			<div class="logo">
			<img src="../../assets/image/common/logo_color.svg" alt="" />
			</div>
			<div class="card-group">
				<el-col>
					<el-card shadow="hover">
						<el-button type="text" @click="goToDataInsert">DATA INSERT</el-button>
					</el-card>
				</el-col>
				<el-col>
					<el-card shadow="hover">
						<el-button type="text" @click="goToSearch">SEARCH</el-button>
					</el-card>
				</el-col>
				<el-col>
					<el-card shadow="hover">
						<el-button type="text" @click="goToNotice">Notice</el-button>
					</el-card>
				</el-col>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		goToDataInsert() {						
			this.$router.push('/Insert');
		},
		goToSearch() {
			this.$router.push('/SearchMain');
		},
		goToNotice() {
			console.log('NoticeLIst 버튼 클릭됨');
			this.$router.push('/NoticeLIst'); 			
		}
	}
}
</script>