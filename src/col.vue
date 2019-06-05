<template>
    <div class="col" :style="colStyle" :class="colClass">
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
        },
        data(){
            return{
                gutter:0,
            }
        },
        computed:{
            colClass(){
                let { span,offset} = this
                return [
                    span && `col-${span}`,
                    offset && `offset-${offset}`
                     ]
            },
            colStyle(){
                return{
                  paddingLeft:this.gutter/2 +'px',
                  paddingRight:this.gutter/2 +'px',
                }
            }
        }
    }
</script>


