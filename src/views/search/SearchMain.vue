<template>
	<div class="content__wrap">
		<div class="page-title">
			<h2>Search</h2>
		</div>
		<div class="content">
			<div class="search-option__wrap">
                <div class="search-item-rows">
                    <div class="search-item-group gap6">
                        <div class="item-tit">
                            Period
                        </div>
                        <div class="item-cont">
                            <div class="date-select-area">
                                <el-radio-group v-model="lastDate" size="large">
                                    <el-radio-button label="last Week" value="last Week" />
                                    <el-radio-button label="last Month" value="last Month" />
                                </el-radio-group>    
                                <div class="date-picker">
                                    <el-date-picker
                                        v-model="startDate"
                                        type="date"
                                        placeholder="YYYY-MM-DD"
                                        default-value="2010-10-01">
                                    </el-date-picker>                                    
                                    <span class="bar">~</span>          
                                    <el-date-picker
                                        v-model="endDate"
                                        type="date"
                                        placeholder="YYYY-MM-DD"
                                        default-value="2010-10-01">
                                    </el-date-picker>                                    
                                </div>                                                                            
                            </div>
                        </div>
                    </div>
                </div>
                <div class="search-item-rows">
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
                </div>
                <div class="search-item-rows">
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
                </div>
                <div class="search-item-rows">
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
                    <div class="button__wrap">
                        <el-button type="primary">
                            <i class="el-icon-search"></i>
                            검색
                        </el-button>
                    </div>              
                </div>                         
            </div>
            <!-- 검색 -->
            <div class="tabs-cont__wrap">
                <el-tabs v-model="activeName" type="border-card" class="type-two-items" @tab-click="handleClick">
                    <el-tab-pane label="Date" name="first">
                        <div class="scroll-content">
                            <el-table
                            :data="tableData"
                            style="width: 100%"
                            @row-click="dialogVisible = true"
                            >
                                <el-table-column
                                    prop="date"
                                    label="Date"
                                    width="100"
                                />
                                <el-table-column
                                    prop="images"
                                    label="Images"
                                    width="80"
                                >
                                    <template slot-scope="scope">
                                    <span>{{ scope.row.images }}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    prop="vibrioWater"
                                    label="Vibrio Water"
                                    width="110"
                                />
                                <el-table-column
                                    prop="vibrioLiver"
                                    label="Vibrio Liver"
                                    width="190"
                                />
                                <el-table-column
                                    prop="vibrioGut"
                                    label="Vibrio Gut"
                                    width="180"
                                />
                                <el-table-column
                                    prop="write"
                                    label="Write"
                                    width="110"
                                />
                            </el-table>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="Trend Graph" name="second">
                        <div class="graph-area">
                            그래프
                        </div>
                    </el-tab-pane>
                </el-tabs>
            </div>
		</div>
    <!-- Detail Modal -->
        <el-dialog
            title="Vibrio Wate Detail"
            :visible.sync="dialogVisible"
            class="detail-view-modal__wrap"
            width="90vw"
        >
        <div class="modal-content">
                    <div class="data-select">
                        <div class="data-title">
                            <i class="el-icon-date"></i>
                            2024-07-20
                        </div>
                        
                    </div>
                    <div class="detail-data">
                        <el-table
                            :data="detailData"
                            class="hide-thead"
                            style="width: 100%"
                            border
                            >
                            <el-table-column
                                prop="parameter"
                                label="Parameter"
                                style="width: 50%"                                
                            >
                                <template slot-scope="scope">
                                    <span>{{ scope.row.parameter }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="value"
                                label="Value"
                            >
                                <template slot-scope="scope">
                                <span>{{ scope.row.value }}</span>
                                </template>
                            </el-table-column>
                        </el-table>                        
                    </div>
                    <!-- 테이블 -->
                    <div class="image-slider__wrap">
                        <swiper :options="swiperOption">
                            <swiper-slide>
                                <img src="../../assets/image/1.jpg" alt="Slide 1">
                            </swiper-slide>
                            <swiper-slide>
                                <img src="../../assets/image/1.jpg" alt="Slide 2">
                            </swiper-slide>
                            <div class="swiper-pagination" slot="pagination"></div>

                            <!-- Add Navigation -->
                            <div class="swiper-button-next" slot="button-next"></div>
                            <div class="swiper-button-prev" slot="button-prev"></div>
                        </swiper>                        
                    </div>
                </div>
        </el-dialog>
	</div>
</template>

<script>
import { Swiper as swiper, SwiperSlide as swiperSlide } from 'vue-awesome-swiper';
// Import Swiper styles
import 'swiper/css/swiper.css';
export default {
    name: 'SwiperComponent',
    components: {
        swiper,
        swiperSlide
    },
    data() {
        return {
        startDate: '',
        endDate: '',
        lastDate: '',
        province: '',
        activeName: 'first',
        SelectValue: '',
        dialogVisible: false,
        detailModal: false,
        searchData: '2024/07/20',
        detailData: [
            { parameter: 'Salinity', value: '' },
            { parameter: 'pH', value: '' },
            { parameter: 'Vibrio in water', value: '' },
            { parameter: 'Vibrio in Liver & Gut', value: '' },
            { parameter: 'Shrimp Health', value: '' },
            { parameter: 'Salinity', value: '' },
            { parameter: 'pH', value: '' },
            { parameter: 'Vibrio in water', value: '' },
            { parameter: 'Vibrio in Liver & Gut', value: '' },
            { parameter: 'Shrimp Health', value: '' },
        ],        
        tableData: [
            {
            date: '2024/07/19',
            images: '2',
            vibrioWater: '',
            vibrioLiver: '',
            vibrioGut: '',
            write: '',
            },
            {
            date: '2024/07/19',
            images: '2',
            vibrioWater: '',
            vibrioLiver: '',
            vibrioGut: '',
            write: '',
            },
            {
            date: '2024/07/19',
            images: '2',
            vibrioWater: '',
            vibrioLiver: '',
            vibrioGut: '',
            write: '',
            },
            {
            date: '2024/07/19',
            images: '2',
            vibrioWater: '',
            vibrioLiver: '',
            vibrioGut: '',
            write: '',
            },
            {
            date: '2024/07/19',
            images: '2',
            vibrioWater: '',
            vibrioLiver: '',
            vibrioGut: '',
            write: '',
            }
        ],        
        swiperOption: {
            pagination: {
            el: '.swiper-pagination',
            type: 'fraction'
            },
            navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
            }
        },
        options: [
            {
            value: 'Kiên Giang',
            label: 'Kiên Giang'
            },
            {
            value: 'Option2',
            label: 'Option2'
            },
            {
            value: 'Option3',
            label: 'Option3'
            },
            {
            value: 'Option4',
            label: 'Option4'
            },
            {
            value: 'Option5',
            label: 'Option5'
            }
        ]
        };
    },
    methods: {
        handleClose() {
        this.detailModal = false;
        },
        handleClick() {
        console.log('handleClick');
        },
        handleDetailView() {
        this.detailModal = true;
        }
    }
    };
</script>

<style scoped>

</style>