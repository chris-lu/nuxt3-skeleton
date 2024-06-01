<script setup lang="ts">
// import { defineProps } from "vue";
import clsx from "clsx";

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  fullWidth?: boolean;
  secondary?: boolean;
  danger?: boolean;
  disabled?: boolean;
}

const props = defineProps<ButtonProps>();
</script>
<template>
  <button
    :type="type"
    :disabled="disabled"
    :class="
      clsx(
        'd-flex justify-content-center rounded p-2 small fw-semibold focus-visible',
        {
          'opacity-50 disabled': props.disabled,
          'w-100': props.fullWidth,
          'text-dark': props.secondary,
          'text-white': !props.secondary,
          'bg-danger hover:bg-danger-dark focus-visible-outline-danger': props.danger,
          'bg-primary hover:bg-primary-dark focus-visible-outline-primary': !props.secondary && !props.danger,
        }
      )
    "
  >
    <slot />
  </button>
</template>

<style scoped>
</style>