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
                            <el-date-picker
                                v-model="todayData"
                                type="date"
                                placeholder="today Date">
                            </el-date-picker>
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
                            <el-table :data="waterData" style="width: 100%" class="hide-thead">
                                <el-table-column prop="type" label="Type">
                                    <template slot-scope="scope">
                                    {{ scope.row.type }}
                                    </template>
                                </el-table-column>
                                <el-table-column label="Value">
                                    <template slot-scope="scope">
                                    <el-input-number 
                                        v-if="scope.row.type !== 'Vibrio in Liver & Gut' && scope.row.type !== 'Shrimp Health'" 
                                        v-model="scope.row.value" 
                                        controls-position="right" 
                                        :min="1" 
                                        :max="10" 
                                        :step="0.01">
                                    </el-input-number>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="Vibrio" name="second">
                        <div class="scroll-content">
                            <el-table
                                :data="vibrioData  "
                                style="width: 100%"
                                show-summary
                                :summary-method="getSummaries">
                                
                                <el-table-column
                                    label="Type"
                                    width="100"
                                    fixed
                                >
                                    <template slot-scope="scope">
                                    {{ scope.row.label }}
                                    </template>
                                </el-table-column>
                                
                                <el-table-column
                                    prop="water"
                                    label="Water"
                                    width="150"
                                >
                                    <template slot-scope="scope">
                                    <el-input-number 
                                        v-model="scope.row.water" 
                                        controls-position="right" 
                                        @change="handleChangeVal6" 
                                        :min="1" 
                                        :max="10" 
                                        :step="0.01">
                                    </el-input-number>
                                    </template>
                                </el-table-column>
                                
                                <el-table-column
                                    prop="liver"
                                    label="Liver"                                    
                                    width="150"
                                >
                                    <template slot-scope="scope">
                                    <el-input-number 
                                        v-model="scope.row.liver" 
                                        controls-position="right" 
                                        @change="handleChangeVal6" 
                                        :min="1" 
                                        :max="10" 
                                        :step="0.01">
                                    </el-input-number>
                                    </template>
                                </el-table-column>
                                
                                <el-table-column
                                    prop="gut"
                                    label="Gut"
                                    width="150"
                                >
                                    <template slot-scope="scope">
                                    <el-input-number 
                                        v-model="scope.row.gut" 
                                        controls-position="right" 
                                        @change="handleChangeVal6" 
                                        :min="1" 
                                        :max="10" 
                                        :step="0.01">
                                    </el-input-number>
                                    </template>
                                </el-table-column>                            
                            </el-table>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="Health" name="third">
                        <el-table :data="healthData" style="width: 100%">
                            <el-table-column prop="type" label="">
                                <template slot-scope="scope">
                                {{ scope.row.type }}
                                </template>
                            </el-table-column>
                            <el-table-column label="Bad">
                                <template slot-scope="scope">
                                <el-radio v-model="scope.row.radio" :label="1">
                                    <span class="blind">Bad</span>
                                </el-radio>
                                </template>
                            </el-table-column>
                            <el-table-column label="Normal">
                                <template slot-scope="scope">
                                <el-radio v-model="scope.row.radio" :label="2">
                                    <span class="blind">Normal</span>
                                </el-radio>
                                </template>
                            </el-table-column>
                            <el-table-column label="Good">
                                <template slot-scope="scope">
                                <el-radio v-model="scope.row.radio" :label="3">
                                    <span class="blind">Good</span>
                                </el-radio>
                                </template>
                            </el-table-column>
                        </el-table>                       

                    </el-tab-pane>              
                    <el-tab-pane label="Photo" name="fourth">
                        <el-upload
                        class="upload-demo"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :before-upload="beforeUpload"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :file-list="fileList"
                        list-type="picture"
                        >
                        <el-button size="small" type="primary">File upload</el-button>
                        <div slot="tip" class="el-upload__tip">jpg/png files with a size less than 500kb</div>
                        </el-upload>                      
                    </el-tab-pane>                           
                </el-tabs> 
                <div class="button__wrap is-bottom flex-end">
                    <el-button type="info" @click="openDialog('cancel')">
                        <i class="el-icon-close"></i>
                        Cancel
                    </el-button>
                    <el-button type="primary" @click="openDialog('save')">
                        <i class="el-icon-document-checked"></i>
                        Save</el-button>
                </div>                
            </div>
		</div>
        <!-- 모달 -->
        <el-dialog            
            :visible.sync="dialogVisible"
            class="data-insert no-title"            
        >
        <div class="modal-content">
            <div class="data-insert-form">
                <div class="tit">Salinity</div>
                <div class="input-wrap">
                    <el-input-number v-model="num" controls-position="right" @change="handleChange" :min="1" :max="10" :step="0.01"></el-input-number>                    
                </div>
            </div>
        </div>
        <span slot="footer" class="dialog-footer">
            <el-button type="info">Prev</el-button>
            <el-button type="info">Next</el-button>
            <el-button type="primary" @click="dialogVisible = false">OK</el-button>
        </span>
        </el-dialog>
        <!-- 메시지 -->
        <el-dialog      
            class="no-header-modal"  
            :visible.sync="confirmDialog"
            width="80%"
            :before-close="cheCkModal">
            <div class="confirm-msg" >
                <i :class="dialogIcon"></i> <span :class="dialogType">{{ dialogMessage }}</span>
            </div>
            <span slot="footer" class="dialog-footer">
                <div class="button__wrap is-bottom flex-end">
                    <el-button type="info" @click="confirmDialog = false">Cancel</el-button>
                    <el-button type="primary" @click="confirmDialog = false">OK</el-button>
                </div>         
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
        dialogVisible: true,
        detailModal: false,
        clickedButton: '',
        radio: '1',
        num: '2',
        num1: '1.2',
        num2: '1.2',
        num3: '1.2',
        num5: '1.2',
        num6: '1.2',
        num7: '1.2',
        confirmDialog: false,
        fileList: [
        {
            name: 'food.jpeg',
            url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
            status: 'finished',
            type: 'image/jpeg',
            },
            {
            name: 'food2.jpeg',
            url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
            status: 'finished',
            type: 'image/jpeg',
            },
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
        waterData: [
            { type: 'Salinity', value: 1 },
            { type: 'pH', value: 1 },
            { type: 'Vibrio in water', value: 1 },
            { type: 'Vibrio in Liver & Gut', value: null },
            { type: 'Shrimp Health', value: null },
            { type: 'Salinity', value: null },
            { type: 'pH', value: null },
            { type: 'Vibrio in water', value: null },
            { type: 'Vibrio in Liver & Gut', value: null },
            { type: 'Shrimp Health', value: null }
        ],        
        healthData: [
            { type: 'Liver', radio: 3 },
            { type: 'Gut', radio: '' },
            { type: 'reserved', radio: '' },
            { type: 'reserved', radio: '' }
        ],
        vibrioData: [{
            label: 'White',
            water: 1.2,
            liver: 1.2,
            gut: 1.2
            },
            {
            label: 'Liver',
            water: 1.2,
            liver: 1.2,
            gut: 1.2
            },
            {
            label: 'Gut',
            water: 1.2,
            liver: 1.2,
            gut: 1.2
            },
            {
            label: 'White',
            water: 1.2,
            liver: 1.2,
            gut: 1.2
            }
        ]

        };
    },
    computed: {
        dialogMessage() {
            return this.clickedButton === 'save'
                ? '저장에 성공했습니다.'
                : '오류가 확인했습니다.';
        },
        dialogIcon() {
            return this.clickedButton === 'save'
                ? 'el-icon-circle-check color-success' // 성공 아이콘 클래스
                : 'el-icon-warning-outline color-error';  // 오류 아이콘 클래스
        },
        dialogType()  {
            return this.clickedButton === 'save'
                ? 'color-success' // 성공 아이콘 클래스
                : 'color-error';  // 오류 아이콘 클래스
        }      
    },
    methods: {
        cheCkModal(done) {
            this.$confirm('Are you sure to close this dialog?')
            .then(_ => {
                done();
            })
            .catch(_ => {});
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
        handleChangeVal1(value) {
            console.log(value);
        },
        handleChangeVal2(value) {
            console.log(value);
        },
        handleChangeVal3(value) {
            console.log(value);
        },   
        handleChangeVal5(value) {
            console.log(value);
        },
        handleChangeVal6(value) {
            console.log(value);
        },
        handleChangeVal7(value) {
            console.log(value);
        },
        
        getSummaries(param) {
            const { columns, data } = param;
            const sums = [];

            columns.forEach((column, index) => {
                if (index === 0) {
                sums[index] = 'Total';
                return;
                }
                const values = data.map(item => Number(item[column.property]));
                if (!values.every(value => isNaN(value))) {
                sums[index] = values.reduce((prev, curr) => {
                    const value = Number(curr);
                    if (!isNaN(value)) {
                    return prev + curr;
                    } else {
                    return prev;
                    }
                }, 0);
                sums[index] = sums[index].toFixed(2); // 소수점 2자리까지만 노출
                } else {
                sums[index] = 'N/A';
                }
            });

            return sums;
        },

        handlePreview(file) {
            console.log(file);
        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        beforeUpload(file) {
            const isJPGorPNG = file.type === 'image/jpeg' || file.type === 'image/png';
            const isLt500KB = file.size / 1024 / 1024 < 0.5;

            if (!isJPGorPNG) {
                this.$message.error('Upload jpg/png files only!');
            }
            if (!isLt500KB) {
                this.$message.error('File size should be less than 500kb!');
            }
            return isJPGorPNG && isLt500KB;
        },
        openDialog(buttonType) {
            this.clickedButton = buttonType;
            this.confirmDialog = true;
        },
        checkModal(done) {
            done();
        },
    },
};
</script>


<style scoped>

</style>