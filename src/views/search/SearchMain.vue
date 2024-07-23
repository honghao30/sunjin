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
                                    <el-input type="date" v-model="startDate" placeholder="Start Date" />     
                                    <span>~</span>                                               
                                    <el-input type="date" v-model="endDate" placeholder="End Date" /> 
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
                        <el-button type="primary">검색</el-button>
                    </div>              
                </div>                         
            </div>
            <!-- 검색 -->
            <div class="tabs-cont__wrap">
                <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
                    <el-tab-pane label="Date" name="first">
                        <div class="scroll-content">
                            <table class="table table-list">
                                <colgroup>
                                    <col width="16%" />
                                    <col width="16%" />
                                    <col width="16%" />
                                    <col width="16%" />
                                    <col width="17%" />
                                    <col width="" />                                    
                                </colgroup>
                                <thead>
                                    <th scope="col">Date</th>
                                    <th scope="col">Images</th>
                                    <th scope="col">Vibrio Water</th>
                                    <th scope="col">Vibrio Liver</th>
                                    <th scope="col">Vibrio Gut</th>
                                    <th scope="col">Write</th>                                    
                                </thead>
                                <tbody>
                                    <tr
                                        @click="handleDetailView()"
                                    >
                                        <td>2024/07/19</td>
                                        <td>
                                            2
                                        </td>
                                        <td>                                         
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td class="text-l"></td>
                                    </tr>
                                </tbody>
                            </table>                            

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
        <div class="detail-view-modal__wrap"
            v-if="detailModal"
        >
            <div class="detail-view-modal">
                <div class="modal-header">
                    <h2>Vibrio Wate Detail</h2>
                    <el-button class="btn-x"
                        @click="handleClose()"
                        circle 
                    />
                </div>
                <div class="modal-content">
                    <div class="data-select">
                        <el-input type="date" v-model="searchData" placeholder="Date" />
                    </div>
                    <div class="detail-data">
                        <table class="table table-body">
                            <colgroup>
                                <col width="50%" />
                                <col width="" />
                            </colgroup>
                            <tbody>
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
                    <!-- 테이블 -->
                    <div class="image-slider__wrap">
                        <swiper :options="swiperOption">
                            <swiper-slide>
                                <img src="https://via.placeholder.com/600x300?text=Slide+1" alt="Slide 1">
                            </swiper-slide>
                            <swiper-slide>
                                <img src="https://via.placeholder.com/600x300?text=Slide+2" alt="Slide 2">
                            </swiper-slide>
                            <div class="swiper-pagination" slot="pagination"></div>

                            <!-- Add Navigation -->
                            <div class="swiper-button-next" slot="button-next"></div>
                            <div class="swiper-button-prev" slot="button-prev"></div>
                        </swiper>                        
                    </div>
                </div>
            </div>
        </div>
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