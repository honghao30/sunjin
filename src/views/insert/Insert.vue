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
                <el-tabs v-model="activeName" type="border-card" @tab-click="handleTabClick">
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
                        <!-- <div class="scroll-content only-x ">
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
                        </div> -->
                        <div class="detail-data">
                            <el-table
                                :data="vibrioData  "
                                style="width: 100%"
                                show-summary
                                class="tbody-th-cell" 
                                :summary-method="getSummaries">
                                
                                <el-table-column
                                    label="Type"
                                    style="width: 25%"
                                >
                                    <template slot-scope="scope">
                                    {{ scope.row.label }}
                                    </template>
                                </el-table-column>
                                
                                <el-table-column
                                    prop="water"
                                    label="Water"
                                    style="width: 25%"
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
                                    style="width: 25%"
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
                                    style="width: 25%"
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
                        <el-table :data="healthData" class="tbody-th-cell" style="width: 100%">
                            <el-table-column prop="type" label="" :min-width="20">
                                <template slot-scope="scope">
                                {{ scope.row.type }}
                                </template>
                            </el-table-column>
                            <el-table-column label="Bad" :min-width="18">
                                <template slot-scope="scope">
                                <el-radio v-model="scope.row.radio" :label="1">
                                    <span class="blind">Bad</span>
                                </el-radio>
                                </template>
                            </el-table-column>
                            <el-table-column label="Normal"  :min-width="24">
                                <template slot-scope="scope">
                                <el-radio v-model="scope.row.radio" :label="2">
                                    <span class="blind">Normal</span>
                                </el-radio>
                                </template>
                            </el-table-column>
                            <el-table-column label="Good"  :min-width="18">
                                <template slot-scope="scope">
                                <el-radio v-model="scope.row.radio" :label="3">
                                    <span class="blind">Good</span>
                                </el-radio>
                                </template>
                            </el-table-column>
                            <el-table-column label="비고" :min-width="20">
                                <template slot-scope="scope">
                                    <el-input placeholder="note" class="note-input"  v-model="scope.row.note1"></el-input>
                                </template>
                            </el-table-column>                            
                        </el-table>                       

                    </el-tab-pane>              
                    <el-tab-pane label="Photo" name="fourth">
                        <el-table :data="photoData" class="tbody-th-cell" style="width: 100%">
                            <el-table-column prop="type" label="" :min-width="20">
                                <template slot-scope="scope">
                                {{ scope.row.type }}
                                </template>
                            </el-table-column>                            
                            <el-table-column label="upload" :min-width="30">
                                <template slot-scope="scope">
                                    <el-upload
                                        action="https://jsonplaceholder.typicode.com/posts/"
                                        list-type="picture-card"
                                        :file-list="getFileList(scope.row)"
                                        :on-preview="file => handlePictureCardPreview(scope.row, file)"
                                        :on-remove="file => handleRemove(scope.row, file)">
                                        <i class="el-icon-plus"></i>
                                    </el-upload>
                                    <el-dialog :visible.sync="scope.row.photoVisible">
                                        <img width="100%" :src="scope.row.dialogImageUrl" alt="">
                                    </el-dialog>
                                </template>
                            </el-table-column>
                            <el-table-column label="비고" :min-width="40">
                                <template slot-scope="scope">
                                    <el-input type="textarea" class="text-mx90" v-model="scope.row.note3"></el-input>                                    
                                </template>
                            </el-table-column>                            
                        </el-table>                        
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
        dialogVisible: false,
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
            { type: 'Liver', radio: 3, note1: '' },
            { type: 'Gut', radio: '', note1: '' },
            { type: 'reserved', radio: '', note1: '' },
            { type: 'reserved', radio: '', note1: '' }
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
        ],
        photoData: [
            { 
            type: 'Liver', 
            dialogImageUrl: 'https://cdn.pixabay.com/photo/2024/07/03/08/05/hot-air-balloon-8869138_1280.jpg', 
            note3: '', 
            photoVisible: false,
            fileList: [
                { name: 'hot-air-balloon.jpg', url: 'https://cdn.pixabay.com/photo/2024/07/03/08/05/hot-air-balloon-8869138_1280.jpg' }
            ]
            },
            { 
            type: 'Gut', 
            dialogImageUrl: '', 
            note3: '', 
            photoVisible: false,
            fileList: []
            },
            { 
            type: 'Whole', 
            dialogImageUrl: '', 
            note3: '', 
            photoVisible: false,
            fileList: []
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
        handleTabClick(tab) {
            console.log(tab.name)
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
        openDialog(buttonType) {
            this.clickedButton = buttonType;
            this.confirmDialog = true;
        },
        checkModal(done) {
            done();
        },

        getFileList(row) {
        return row.fileList;
        },
        handleRemove(row, file) {
        row.fileList = row.fileList.filter(f => f.url !== file.url);
        if (row.dialogImageUrl === file.url) {
            row.dialogImageUrl = '';
        }
        console.log(file);
        },
        handlePictureCardPreview(row, file) {
        row.dialogImageUrl = file.url;
        row.photoVisible = true;
        }    
    },
};
</script>


<style scoped>

</style>