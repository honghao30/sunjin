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
        <div class="side-menu__wrap" :class="{ 'is-active': sideMenuBg }">
            <div class="menu__wrap--inner"  :class="{ 'is-active': sideMenu }">
                <div class="menu-header">
                    Sunjin MTS
                    <el-button class="btn-x" @click="sideCloseHandle"></el-button>
                </div>
                <ul class="menu-list">
                    <li v-for="(menu, index) in lnbMenu" :key="index">
                        <router-link @click.native="handleNav(menu)" to="#none">
                            {{menu.label}}
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
            sideMenuBg: false,
            sideMenu: false,
            lnbMenu: [
                {
                    "label": "Dashboard",
                    "link": "/Dashboard" 
                },                
                {
                    "label": "Insert",
                    "link": "/Insert" 
                },
                {
                    "label": "Search",
                    "link": "/SearchMain" 
                },
                {
                    "label": "Notice",
                    "link": "/NoticeLIst" 
                }
            ]
        };
    },
    methods: {
        sideOpenHandle() {
            this.sideMenuBg = true;
            setTimeout(() => {
                this.sideMenu = true;
            }, 200);
        },
        sideCloseHandle() {
            this.sideMenu = true;
            setTimeout(() => {
                this.sideMenuBg = false;    
            }, 200);                        
        },
        handleNav(menu) {
            this.$router.push(menu.link);
            this.sideCloseHandle();
        }
    }
};
</script>

<style scoped>
</style>
