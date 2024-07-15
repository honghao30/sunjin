<template>
	<div>
		<label style="margin-left: 35%;font-weight: bolder">Total Page: {{ totalCount }}</label>
		<el-table
			:data="tableData"
			:default-sort="{prop: sortingList[0], order: sortingList[1]}"
			:style="'width:' + tableWidth"
			:height="tableHeight"
			align="center">
			<el-table-column width="50">
				<template slot-scope="scope">
					<span>{{ (totalCount - scope.$index) - ((currentPage - 1) * pageSize) }}</span>
				</template>
			</el-table-column>
			<el-table-column
				v-for="(row, index) in this.rowList"
				:key="index"
				:prop="row"
				:label="header[index]"
				sortable
				:width="columnWidth"
				:style="'height: ' + columnHeight">
            </el-table-column>
		</el-table>
		<div class="pagination">
			<el-pagination
				background
				layout="prev, pager, next"
				@current-change="handlePageChange"
				:current-page.sync="currentPage"
				:total="totalCount"
				:page-size="pageSize">
			</el-pagination>
		</div>
	</div>
</template>

<script>
	export default {
		props: [
			"data",
			"header",
			"rowList",
			"sortingList",
			"totalCount",
			"pageSize",
			"tableWidth",
			"tableHeight",
			"columnWidth",
			"columnHeight",
		],
		data() {
			return {
				tableData: [],
				currentRow: null,
				currentPage: 1,
			};
		},
		methods: {
			handlePageChange: function () {
				this.tableData = [];
				if (this.totalCount > this.pageSize) {
					let index = (this.currentPage - 1) * this.pageSize;

					if (index <= this.totalCount && this.currentPage != 1) {
						let pageLimit = this.currentPage * this.pageSize;
						if (pageLimit >= this.totalCount) {
							for (let i = index; i < this.totalCount; i++) {
								this.tableData.push(this.data[i]);
							}
						} else {
							for (let i = index; i < pageLimit; i++) {
								this.tableData.push(this.data[i]);
							}
						}
					} else {
						for (let i = index; i < this.pageSize; i++) {
							this.tableData.push(this.data[i]);
						}
					}
				} else {
					this.tableData = this.data;
				}
			},
		},
		created() {
			this.handlePageChange();
		},
	};
</script>
