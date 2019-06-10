<template>
    <div class="popover" @click.stop="onClick">
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
                if(this.visible === true){
                    this.$nextTick(() =>{
                        let eventHandler = () => {
                            this.visible = false
                            document.removeEventListener('click',eventHandler)
                        }
                        document.addEventListener('click',eventHandler) 
                    })
                }
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
