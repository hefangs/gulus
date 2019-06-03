<template>
    <div class="wrapper">
        <input type="text" :value="value">
    </div>
</template>
<script>
export default {
    name:'',
    props:{
        value:{
            type:String,
        }
    }
}
</script>
<style lang="scss" scoped>
    $height:32px;
    $border-color:#999;
    $border-color-hover:#666;
    $border-radius:4px;
    $font-size:12px;
    $box-shadow-color:rgba(0,0,0,0.5);
    .wrapper{
        font-size: $font-size;
        > input{
                height:$height;
                border:1px solid $border-color;  
                border-radius: $border-radius;
                padding: 0 8px;
                font-size: inherit;
            &:hover{
                border-color:$border-color-hover;
            }
            &:focus{
                box-shadow: inset 1 1px 3px $box-shadow-color
            }
        }
    }   
</style>



