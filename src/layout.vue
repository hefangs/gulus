<template>
    <div class="layout" :class="layoutClass">
        <slot></slot>
    </div>
</template>
<style lang="scss" scoped>
    .layout{
        flex-grow: 1;
        background: #00e0ff;
        display: flex;
        flex-direction: column;
        border:burlywood 1px solid;
        height: 350px;
        &.hasSider{
            flex-direction: row;
        }
    }
</style>
<script>
export default {
    name:'GuluLayout',
    data(){
        return{
            layoutClass:{
                hasSider:false
            }
        }
    },
    mounted(){
        this.$children.forEach((vm) => {
            if(vm.$options.name === 'GuluSider') {
                this.layoutClass.hasSider = true
            }
        })
    }
}
</script>


