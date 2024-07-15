<template>
	<div :style="'width:' + data.tableWidth">
		<div :class="data.classContent">
			<div align="right">
				<b>Total: {{ data.totalCount }}</b>
			</div>
			<el-table
				ref="singleTable"
				:data="tableData"
				:border="data.border"
				:highlight-current-row="data.isSingleSelect"
				@current-change="handleCurrentChange"
				@selection-change="handleSelectionChange"
				:style="'width:' + data.tableWidth"
				:height="data.tableHeight"
				align="center">
				<el-table-column v-if="data.isMultiSelect" type="selection" :min-width="data.firstColumnWidth"></el-table-column>
				<el-table-column v-if="data.isExpandable" fixed="left" type="expand">
					<template slot-scope="scope">
						<slot name="expandableDetails" :row="scope.row"></slot>
					</template>
				</el-table-column>
				<el-table-column fixed="left" label="No." :min-width="data.firstColumnWidth">
					<template slot-scope="scope">
						<span>{{ (data.totalCount - scope.$index) - ((currentPage - 1) * data.pageSize) }}</span>
					</template>
				</el-table-column>
				<el-table-column
					v-for="(row, index) in data.columnInfo"
					:key="index"
					:label="row.name"
					:align="row.align"
					:sortable="row.sortable"
					:fixed="row.isColumnFixed"
					:min-width="row.width"
					:style="'height: ' + row.height ">
					<template slot-scope="scope">
						<div v-if="row.isCustom && row.isMovePage">
							<slot name="contents" :row="scope.row" :rowKey="row.key" :path="row.pageUrl+scope.row['id']"></slot>
						</div>

						<div v-else-if="row.isCustom && !row.isMovePage">
							<slot name="contents" :row="scope.row" :rowKey="row.key"></slot>
						</div>

						<div v-else-if="!row.isCustom && row.isMovePage">
							<router-link :to="row.pageUrl+scope.row['id']">{{ scope.row[row.key] }}</router-link>
						</div>

						<div v-else-if="row.key == ''">
							<el-button
								v-for="(button, index) in row.buttonOption"
								:key="index"
								size="mini"
								:type="button.type"
								@click="button.functionName(scope.row['id'])">
								{{ button.name }}
							</el-button>
						</div>

						<div v-else>{{ scope.row[row.key] }}</div>
					</template>
				</el-table-column>
			</el-table>
		</div>
		<div :class="data.classPaging" style="margin-top: 5%">
			<el-pagination
				background
				layout="prev, pager, next"
				@current-change="handlePageChange"
				:current-page.sync="currentPage"
				:total="data.totalCount"
				:page-size="data.pageSize">
			</el-pagination>
		</div>
		<div style="margin-top: 20px">
			<el-button @click="setCurrent()">Clear selection</el-button>
		</div>
	</div>
</template>

<script>
	export default {
		props: ["data"],
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
				if (this.data.totalCount > this.data.pageSize) {
					let index = (this.currentPage - 1) * this.data.pageSize;

					if (index <= this.data.totalCount && this.currentPage != 1) {
						let pageLimit = this.currentPage * this.data.pageSize;
						if (pageLimit >= this.data.totalCount) {
							for (let i = index; i < this.data.totalCount; i++) {
								this.tableData.push(this.data.tableData[i]);
							}
						} else {
							for (let i = index; i < pageLimit; i++) {
								this.tableData.push(this.data.tableData[i]);
							}
						}
					} else {
						for (let i = index; i < this.data.pageSize; i++) {
							this.tableData.push(this.data.tableData[i]);
						}
					}
				} else {
					this.tableData = this.data.tableData;
				}
			},
			setCurrent(row) {
				this.$refs.singleTable.setCurrentRow(row);
			},
			handleCurrentChange(val) {
				this.currentRow = val;
			},
			handleSelectionChange(val) {
				this.multipleSelection = val;
			},
		},
		created() {
			this.handlePageChange();
		},
	};
</script>
