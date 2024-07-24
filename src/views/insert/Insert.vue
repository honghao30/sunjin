<template>
	<div class="content__wrap">
		<div class="page-title">
			<h2>Insert</h2>
		</div>
		<div class="content">
			<div class="search-option__wrap">
                <div class="search-item-rows">
                    <div class="search-item-group">
                        <div class="item-tit">
                            Today
                        </div>
                        <div class="item-cont">
                            <el-input type="date" v-model="todayData" placeholder="today Date" />    
                        </div>
                    </div>                    
                    <div class="search-item-group">
                        <div class="item-tit">
                            Province
                        </div>
                        <div class="item-cont">
                            <el-select
                                v-model="SelectValue"
                                placeholder="Kiên Giang"
                                size="large"           
                                style="width: 100%;"           
                            >
                                <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                />
                            </el-select>
                        </div>
                    </div>
                </div>
                <div class="search-item-rows">
                    <div class="search-item-group">
                        <div class="item-tit">
                            District
                        </div>
                        <div class="item-cont">
                            <el-select
                                v-model="SelectValue"
                                placeholder="Thành phố Rạch Giá"
                                size="large"           
                                style="width: 100%;"                
                            >
                                <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                />
                            </el-select>  
                        </div>
                    </div>   
                    <div class="search-item-group">
                        <div class="item-tit">
                            Village
                        </div>
                        <div class="item-cont">
                            <el-select
                                v-model="SelectValue"
                                placeholder="Phường Vĩnh Thanh Vân"
                                size="large"           
                                style="width: 100%;"            
                            >
                                <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                />
                            </el-select>
                        </div>
                    </div>
                </div>
                <div class="search-item-rows">
                    <div class="search-item-group">
                        <div class="item-tit">
                            Farm
                        </div>
                        <div class="item-cont">
                            <el-select
                                v-model="SelectValue"
                                placeholder="ABC Shrimp Farm"
                                size="large"           
                                style="width: 100%;"          
                            >
                                <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                />
                            </el-select>  
                        </div>
                    </div>  
                    <div class="search-item-group">
                        <div class="item-tit">
                            Pond
                        </div>
                        <div class="item-cont">
                            <el-select
                                v-model="SelectValue"
                                placeholder="Pond 01"
                                size="large"           
                                style="width: 100%;"                
                            >
                                <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                />
                            </el-select>
                        </div>
                    </div>    
                </div>                       
            </div>
            <!-- 검색 -->
            <div class="tabs-cont__wrap">
                <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
                    <el-tab-pane label="Water Env." name="first">
                        <div class="detail-data">
                            <table class="table table-body">
                                <colgroup>
                                    <col width="50%" />
                                    <col width="" />
                                </colgroup>
                                <tbody>
                                    <tr>
                                        <th scope="row">Salinity</th>
                                        <td>0.10</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">pH</th>
                                        <td>7.61</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Vibrio in water</th>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Vibrio in Liver & Gut</th>
                                        <td></td>
                                    </tr>   
                                    <tr>
                                        <th scope="row">Shrimp Health</th>
                                        <td></td>
                                    </tr>  
                                    <tr>
                                        <th scope="row">Salinity</th>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">pH</th>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Vibrio in water</th>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Vibrio in Liver & Gut</th>
                                        <td></td>
                                    </tr>   
                                    <tr>
                                        <th scope="row">Shrimp Health</th>
                                        <td></td>
                                    </tr>                                                                                                                                                              
                                </tbody>
                            </table>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="Vibrio" name="second">
                        <table class="table table-list">
                            <colgroup>
                                <col width="25%" />
                                <col width="25%" />
                                <col width="25%" />
                                <col width="25%" />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th scope="col">Type</th>
                                    <th scope="col">Water</th>
                                    <th scope="col">Liver</th>
                                    <th scope="col">Gut </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>White</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>                                        
                                </tr>
                                <tr>
                                    <td>Purple</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>     
                                <tr>
                                    <td>Blue</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>                                        
                                </tr> 
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td>Total</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>                                        
                                </tr>                                    
                            </tfoot>
                        </table> 
                    </el-tab-pane>
                    <el-tab-pane label="Health" name="third">
                        <table class="table table-list">
                            <colgroup>
                                <col width="25%" />
                                <col width="25%" />
                                <col width="25%" />
                                <col width="25%" />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">Bad</th>
                                    <th scope="col">Normal </th>
                                    <th scope="col">Good</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Liver </td>
                                    <td><el-radio v-model="radio" label="1"><span class="blind">Bad</span></el-radio></td>
                                    <td><el-radio v-model="radio" label="2"><span class="blind">Normal</span></el-radio></td>
                                    <td><el-radio v-model="radio" label="3"><span class="blind">Good</span></el-radio></td>                                        
                                </tr>
                                <tr>
                                    <td>Gut </td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>     
                                <tr>
                                    <td>reserved</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>                                        
                                </tr>        
                                <tr>
                                    <td>reserved</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>                                        
                                </tr>                                                                                                                              
                            </tbody>
                        </table>
                    </el-tab-pane>              
                    <el-tab-pane label="Photo" name="fourth">
                        <table class="table table-body">
                            <colgroup>
                                <col width="33.3%" />
                                <col width="33.3%" />
                                <col width="*" />                                
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th scope="row">Liver </th>
                                    <td>0 picture(s) uploaded</td>
                                    <td>
                                        <el-upload
                                            class="upload-demo"
                                            action="https://jsonplaceholder.typicode.com/posts/"
                                            :on-preview="handlePreview"
                                            :on-remove="handleRemove"
                                            :before-remove="beforeRemove"
                                            multiple
                                            :limit="3"
                                            :on-exceed="handleExceed"
                                            :file-list="fileList"
                                        >
                                            <el-button size="small" type="primary">Upload</el-button>                                            
                                        </el-upload>                                        
                                    </td>                                                                        
                                </tr>
                                <tr>
                                    <th scope="row">Gut </th>
                                    <td>0 picture(s) uploaded</td>
                                    <td>
                                        <el-upload
                                            class="upload-demo"
                                            action="https://jsonplaceholder.typicode.com/posts/"
                                            :on-preview="handlePreview"
                                            :on-remove="handleRemove"
                                            :before-remove="beforeRemove"
                                            multiple
                                            :limit="3"
                                            :on-exceed="handleExceed"
                                            :file-list="fileList"
                                        >
                                            <el-button size="small" type="primary">Upload</el-button>                                            
                                        </el-upload>                                         
                                    </td>                                    
                                </tr>     
                                <tr>
                                    <th scope="row">Whole</th>
                                    <td>0 picture(s) uploaded</td>
                                    <td>
                                        <el-upload
                                            class="upload-demo"
                                            action="https://jsonplaceholder.typicode.com/posts/"
                                            :on-preview="handlePreview"
                                            :on-remove="handleRemove"
                                            :before-remove="beforeRemove"
                                            multiple
                                            :limit="3"
                                            :on-exceed="handleExceed"
                                            :file-list="fileList"
                                        >
                                            <el-button size="small" type="primary">Upload</el-button>                                            
                                        </el-upload>                                         
                                    </td>                                                                          
                                </tr>  
                            </tbody>
                        </table>
                    </el-tab-pane>                           
                </el-tabs> 
                <div class="button__wrap is-bottom flex-end">
                    <el-button type="info">Cancel</el-button>
                    <el-button type="primary">Save</el-button>
                </div>                
            </div>
		</div>
        <el-dialog            
            :visible.sync="dialogVisible"
            class="data-insert"
            width="40%"
        >
        <div class="modal-content">
            <div class="data-insert-form">
                <div class="tit">Salinity</div>
                <div class="input-wrap">
                    <el-input-number v-model="num" controls-position="right" @change="handleChange" :min="1" :max="10"></el-input-number>                    
                </div>
            </div>
        </div>
        <span slot="footer" class="dialog-footer">
            <el-button type="info">Prev</el-button>
            <el-button type="info">Next</el-button>
            <el-button type="primary" @click="dialogVisible = false">OK</el-button>
        </span>
        </el-dialog>
        
	</div>
</template>

<script>
export default {
    data() {
        return {
        todayData: '2024/07/20',
        startDate: '',
        endDate: '',
        lastDate: '',
        province: '',
        activeName: 'first',
        SelectValue: '',
        dialogVisible: false,
        detailModal: false,
        radio: '1',
        num: '2',
        fileList: [
            { name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' },
            { name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }
        ],
        options: [
            {
            value: 'Kiên Giang',
            label: 'Kiên Giang',
            },
            {
            value: 'Option2',
            label: 'Option2',
            },
            {
            value: 'Option3',
            label: 'Option3',
            },
            {
            value: 'Option4',
            label: 'Option4',
            },
            {
            value: 'Option5',
            label: 'Option5',
            },
        ],
        };
    },
    methods: {
        handleRemove(file, fileList) {
        console.log(file, fileList);
        },
        handlePreview(file) {
        console.log(file);
        },
        handleExceed(files, fileList) {
        this.$message.warning(`The limit is 3, you selected ${files.length} files this time, add up to ${files.length + fileList.length} totally`);
        },
        beforeRemove(file, fileList) {
        return this.$confirm(`Cancel the transfert of ${file.name} ?`);
        },
        handleClose() {
        this.detailModal = false;
        },
        handleClick() {
        console.log('handleClick');
        },
        handleDetailView() {
        this.detailModal = true;
        },
        handleChange(value) {
        console.log(value);
        },
    },
};
</script>


<style scoped>

</style>