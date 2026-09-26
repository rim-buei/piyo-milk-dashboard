<script setup lang="ts">
const props = defineProps({
  datetime: {
    type: String,
    required: true,
  },
});

const config = useRuntimeConfig();
</script>

<template>
  <section class="flex h-full flex-col rounded-3xl bg-white p-6 shadow-lg ring-1 ring-slate-200">
    <h1 class="text-3xl font-bold text-slate-700">現在時刻</h1>

    <div class="flex flex-1 items-center justify-center">
      <p class="text-6xl font-bold text-slate-700">
        {{ formatDateTime(datetime, config.public.timeZone) }}
      </p>
    </div>
  </section>
</template>
