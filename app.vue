<template>
   <div>
      <NuxtLayout :name="layout">
         <NuxtPage />
      </NuxtLayout>
   </div>
</template>

<script setup lang="ts">
const { status } = useAuth();
const layout = status.value === "authenticated" ? "default" : "1-column";
</script>
