<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]:true}">
        <svg class="icon" v-if="icon">
            <use v-bind:xlink:href = "`#i-${icon}`"></use>>
        </svg>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>
<script>
    export default{
        props:['icon','iconPosition']
    }
</script>
<style lang="scss">
    .g-button{
        font-size: var(--font-size);
        height:var(--button-height);
        border-radius: var(--border-radius);
        border:1px solid var(--border-color);
        background:var(--button-background);
        padding:0 1em;
        vertical-align: middle;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        &:hover{border-color: var(--border-color-hove)}
        &:active{ background:var(--button-active-background) }
        &:focus{outline: none;}
        > .icon{order: 1;margin-right: 0.3em;}
        > .content {order:2}
        &.icon-right{
            > .icon{
                order:2;
                margin-right: 0;
                margin-left: 0.3em
            }
            > .content{
                order:1;
            }
        }
    }
</style>