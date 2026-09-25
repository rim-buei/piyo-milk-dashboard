<script setup lang="ts">
const props = defineProps({
  totalAmount: {
    type: Number,
    required: true,
  },
  targetAmount: {
    type: Number,
    required: true,
  },
});

const progress = computed(() => {
  if (props.targetAmount <= 0) {
    return 0;
  }

  return Math.min((props.totalAmount / props.targetAmount) * 100, 100);
});
</script>

<template>
  <section class="rounded-3xl bg-white p-6 shadow-lg ring-1 ring-slate-200">
    <div class="mb-4 flex items-center justify-between">
      <h2 class="text-xl font-bold text-slate-700">今日のミルク</h2>

      <span class="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-500">
        目標 {{ targetAmount }} ml
      </span>
    </div>

    <div class="flex items-baseline gap-2">
      <span class="text-6xl font-bold tracking-tight text-slate-900">
        {{ totalAmount }}
      </span>

      <span class="text-2xl font-medium text-slate-500"> ml</span>
    </div>

    <div class="mt-6">
      <div class="h-4 overflow-hidden rounded-full bg-slate-100">
        <div
          class="h-full rounded-full bg-sky-500 transition-all duration-500"
          :style="{ width: `${progress}%` }"
        />
      </div>

      <div class="mt-2 flex justify-between text-sm text-slate-500">
        <span>0 ml</span>
        <span>{{ targetAmount }} ml</span>
      </div>
    </div>
  </section>
</template>
