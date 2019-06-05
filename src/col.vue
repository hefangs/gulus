<template>
    <div class="col" :class="[`col-${span}`]">
        <slot></slot>
    </div>
</template>
<style lang="scss" scoped>
    .col{
        height: 100px;
        background: #00e0ff;
        width: 50%;
        border: 1px solid #155263;

        $class-prefix:col-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n/24) * 100%
            }
        }
    }
</style>
<script>
    export default {
        name:'',
        props:{
            span:[Number,String]
        }
    }
</script>


