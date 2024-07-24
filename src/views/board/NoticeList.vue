<template>
	<div class="content__wrap">
		<div class="page-title">
			<h2>Notice</h2>
		</div>
		<div class="content">
			<table class="table table-list">
				<colgroup>
					<col width="25%" />
					<col width="" />
					<col width="30%" />
				</colgroup>
				<thead>
					<tr>
						<th scope="col">Date</th>
						<th scope="col">Title</th> 
						<th scope="col">Write</th>
					</tr>
				</thead>
				<tbody>
					<tr
						v-for="list in 10"
						:key="list"
					>
						<td>2024/07/19</td>
						<td class="text-l">
							<a href="#">Vibro Warning{{list}}</a>
						</td>
						<td>HQ Manage</td>
					</tr>
				</tbody>
			</table>
			<div class="bottom__pagination">
				<el-pagination layout="prev, pager, next" :total="100" />			
			</div>			
		</div>
	</div>
</template>

<script setup>

</script>

<style scoped>

</style>