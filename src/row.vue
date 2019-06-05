<template>
    <div class="row" :style="{marginLeft:-gutter/2 +'px',marginRight:-gutter/2 +'px'}">
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
        mounted(){
            this.$children.forEach((vm)=>{
                vm.gutter = this.gutter
            })
        }
    }
</script>

