<script setup lang="ts">
import { defineProps, defineEmits, computed } from "vue";
import clsx from "clsx";

interface InputProps {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  modelValue: string | number;
  name: string;
  disabled?: boolean;
}

const props = defineProps<InputProps>();
const emit = defineEmits(["update:modelValue"]);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value: any) {
    emit("update:modelValue", value);
  },
});
</script>

<template>
  <div>
    <label :for="id" class="form-label text-muted">
      {{ label }}
    </label>

    <div class="mt-2">
      <input
        :type="type"
        :id="id"
        :disabled="disabled"
        :class="
          clsx(
            'form-control',
            disabled && 'opacity-50 cursor-not-allowed'
          )
        "
        v-model="value"
      />
    </div>
  </div>
</template>

<style scoped>
</style>
