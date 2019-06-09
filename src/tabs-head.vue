<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="line" ref="line"></div>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>
<script>
    export default {
       name:'GuluTabsHead',
       inject:['eventBus'],
       created(){
           this.$emit('update:selected', 'tabs-head 抛出的数据')
       }
    }
</script>
<style lang="scss" scoped>
     $tab-height: 40px;
     $color:#00bbf0;
    .tabs-head {
        display: flex;
        height: $tab-height;
        justify-content: flex-end;
        align-items: center;
        position: relative;
        > .line{
            position: absolute;
            bottom: 0;
            border-bottom: $color solid 1px;
            width: 100px;
        }
        > .actions-wrapper {
            margin-left: auto;
        }
    }
</style>
