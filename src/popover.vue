<template>
    <div class="popover" @click="onClick">
        <slot class="contentWrapper" name="content" v-if="visible"></slot>
        <slot></slot>
    </div>
</template>
<script>
    export default {
       name: 'GuluPopover',
       data(){
           return{
               visible:false,
           }
       },
        methods:{
            onClick(){
                this.visible = !this.visible
            }
        }
    }
</script>
<style lang="scss" scoped>
    .popover{
        display: inline-block;
        vertical-align: top;
        position: relative;
        .contentWrapper{
            position: absolute;
            bottom: 100%;
            left: 0;
            border:1px solid red;
            box-shadow: 0 0 3px rgba(0, 0, 0.5)
        }
    }
</style>
