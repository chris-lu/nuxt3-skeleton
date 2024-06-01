<script setup lang="ts">
// import { defineProps } from 'vue';

    interface AuthSocialButtonProps{
        icon: string
    }

    const props = defineProps<AuthSocialButtonProps>()
</script>

<template>
    <button
        type="submit"
        class="d-inline-flex w-100 justify-content-center rounded bg-white p-3 text-dark shadow-sm border border-secondary hover:bg-light focus-visible"
    >
    <Icon :name="icon"/>
    </button>
</template>

<style scoped>

</style>