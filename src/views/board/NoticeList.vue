<template>
	<div class="content__wrap">
		<div class="page-title">
			<h2>Notice</h2>
		</div>
		<div class="content">
			<el-table
			:data="tableData"
			style="width: 100%"
			class="notice-list"
			>
				<el-table-column
				label="Date"
				:min-width="35"				
				>					
					<template slot-scope="scope">						
						{{ scope.row.date }}
					</template>
				</el-table-column>
				<el-table-column				
				label="Title"
				>
					<template slot-scope="scope">
						<router-link to="#" @click="handleGoDetail(scope.$index, scope.row)">{{ scope.row.title }}</router-link>
					</template>
				</el-table-column>
				<el-table-column
				label="Write"
				:min-width="35"				
				>
					<template slot-scope="scope">
						{{ scope.row.write }}
					</template>
				</el-table-column>
			</el-table>		
			<div class="bottom__pagination">
				<el-pagination layout="prev, pager, next" :total="100" />			
			</div>			
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
		tableData: [
			{
				date: '2024/07/19',
				title: 'Vibro Warning',
				write: 'HQ Manage'
			}, 
			{
				date: '2024/07/19',
				title: 'Vibro Warning',
				write: 'HQ Manage'
			}, 
			{
				date: '2024/07/19',
				title: 'Vibro Warning',
				write: 'HQ Manage'
			}, 
			{
				date: '2024/07/19',
				title: 'Vibro Warning',
				write: 'HQ Manage'
			}, 
			{
				date: '2024/07/19',
				title: 'Vibro Warning',
				write: 'HQ Manage'
			}, 
			{
				date: '2024/07/19',
				title: 'Vibro Warning',
				write: 'HQ Manage'
			}, 
			{
				date: '2024/07/19',
				title: 'Vibro Warning',
				write: 'HQ Manage'
			}, 
			{
				date: '2024/07/19',
				title: 'Vibro Warning',
				write: 'HQ Manage'
			}, 
			{
				date: '2024/07/19',
				title: 'Vibro Warning',
				write: 'HQ Manage'
			}, 
			{
				date: '2024/07/19',
				title: 'Vibro Warning',
				write: 'HQ Manage'
			}
			]
		}
	},
	methods: {
		handleGoDetail(index, row) {
			console.log(index, row);
		},
    },

}
</script>

<style scoped>

</style>