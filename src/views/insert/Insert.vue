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
                        <div class="graph-area">
                            그래프
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="Health" name="third">
                        <div class="graph-area">
                            그래프2
                        </div>
                    </el-tab-pane>              
                    <el-tab-pane label="Photo" name="fourth">
                        <div class="graph-area">
                            그래프3
                        </div>
                    </el-tab-pane>                           
                </el-tabs>
            </div>
            <div class="button__wrap is-bottom flex-end">
                <el-button type="info">Cancel</el-button>
                <el-button type="primary">Save</el-button>
            </div>
		</div>

	</div>
</template>

<script setup>
import { ref } from 'vue'

const todayData = ref('2024/07/20')
const startDate = ref('')
const endDate = ref('')
const lastDate = ref('')
const province = ref('')
const activeName = ref('first')
const SelectValue = ref('')
const dialogVisible = ref(false)
const detailModal = ref(true)


const handleClose = () => {  
    detailModal.value = false;
}

const handleClick = () => {
    console.log('handleClick')
}

const handleDetailView = () => {
    detailModal.value = true;
}

const swiperOption =  ref({
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction'
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
        // Other Swiper options
});

const options = [
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
]


</script>

<style scoped>

</style>