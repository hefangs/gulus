<template>
    <div class="col" :class="[`col-${span}`,offset && `offset-${offset}`]"
     :style="{paddingLeft:gutter/2 +'px',paddingRight:gutter/2 +'px'}>
        <slot></slot>
    </div>
</template>
<style lang="scss" scoped>
    .col{
        height: 100px;
        background: #00e0ff;
        width: 50%;
        border: 1px solid #155263;
        padding: 0 10px;

        $class-prefix:col-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n/24) * 100%
            }
        }
        $class-prefix:offset-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                margin-left: ($n/24) * 100%
            }
        }
    }
</style>
<script>
    export default {
        name:'',
        props:{
            span:{
                type:[Number,String]
            },
            offset:{
                type:[Number,String]
            },
             gutter:{
                type:[Number,String]
            }
        }
    }
</script>


