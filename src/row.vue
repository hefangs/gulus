<template>
    <div class="row" :style="rowStyle">
        <slot></slot>
    </div>
</template>
<style lang="scss" scoped>
    .row{
        display: flex;
        margin: -10px;
    }
</style>
<script>
    export default {
        props:{
            gutter:{
                type:[Number,String]
            }
        },
        computed:{
            rowStyle(){
                let {gutter} = this
                return{
                  paddingLeft:this.gutter/2 +'px',
                  paddingRight:this.gutter/2 +'px',
                }
            }
        }, 
        mounted(){
            this.$children.forEach((vm)=>{
                vm.gutter = this.gutter
            })
        }
    }
</script>

