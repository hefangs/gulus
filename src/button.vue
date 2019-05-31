<template>
    <button class="g-button">按钮</button>
</template>
<script>
    export default{}
</script>
<style lang="scss">
    .g-button{
            font-size: var(--font-size);
            height:var(--button-height);
            border-radius: var(--border-radius);
            border:1px solid var(--border-color);
            background:var(--button-background);
            padding:0 1em;
            &n:hover{
                border-color: var(--border-color-hove)
            }
            &:active{
                background:var(--button-active-background)
            }
            &:focus{
                outline: none;
            }
    }
</style>