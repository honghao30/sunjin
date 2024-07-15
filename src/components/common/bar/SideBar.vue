<template>
    <div>
        <el-menu class="el-menu-demo" style="border-right: none" :unique-opened="true">
            <el-submenu v-for="item in hasChild" :key="item.name" :index="item.index">
                <template slot="title">
                    <i v-if="item.icon" :class="item.icon" />
                    {{ item.name }}
                </template>
                <el-menu-item-group>
                    <el-menu-item v-for="c in item.child" :key="c.name" :index="c.index">
                        <router-link :to="c.url">{{ c.name }}</router-link>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-menu-item v-for="item in noChild" :key="item.name" :index="item.index">
                <router-link :to="item.url">
                    <template>
                        <i v-if="item.icon" :class="item.icon" />
                        {{ item.name }}
                    </template>
                </router-link>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
    props: ["data"],
    computed: {
        hasChild() {
            return this.data.filter((has) => {
                return has.child;
            });
        },
        noChild() {
            return this.data.filter((no) => {
                return !no.child;
            });
        },
    },
};
</script>

<style scoped>
.el-menu-item a {
    text-decoration: none;
}

.el-menu-item.is-active {
    font-weight: bolder;
}
</style>