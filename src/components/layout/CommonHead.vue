<template>
    <div class="header__wrap">
        <div class="top-navigation">
            <button type="button" class="btn-hamburger" @click="sideOpenHandle">
                <i></i>
            </button>
        </div>
        <div class="title-area">
            <h1>Sunjin MTS</h1>
        </div>
        <div class="member-msg">
            <el-avatar> Steve </el-avatar>
            <!-- Manager : <strong>Steve</strong> -->
        </div>       
        <div class="side-menu__wrap" :class="{ 'is-active': sideMenu }">
            <div class="menu__wrap--inner">
                <div class="menu-header">
                    Sunjin MTS
                    <el-button class="btn-x" @click="sideCloseHandle"></el-button>
                </div>
                <ul class="menu-list">
                    <li v-for="index in 5" :key="index">
                        <router-link to="">
                            메뉴명{{ index }}
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>     
    </div>
</template>

<script>
export default {
    data() {
        return {
            sideMenu: false
        };
    },
    methods: {
        sideOpenHandle() {
            this.sideMenu = true;
        },
        sideCloseHandle() {
            this.sideMenu = false;
        }
    }
};
</script>

<style scoped>
</style>
