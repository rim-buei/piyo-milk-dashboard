<script setup lang="ts">
interface Feeding {
  amount: number;
  datetime: string;
}

const props = defineProps({
  elapsedMinutes: {
    type: Number,
    required: true,
  },
  lastFeeding: {
    type: Object as () => Feeding,
    required: true,
  },
});

const elapsedText = computed(() => {
  if (props.elapsedMinutes === null) {
    return "--";
  }

  const hours = Math.floor(props.elapsedMinutes / 60);
  const minutes = props.elapsedMinutes % 60;

  if (hours === 0) {
    return `${minutes} 分`;
  }

  return `${hours} 時間 ${minutes} 分`;
});
</script>

<template>
  <section class="flex h-full flex-col rounded-3xl bg-white p-6 shadow-lg ring-1 ring-slate-200">
    <h2 class="text-xl font-bold text-slate-700">前回のミルク</h2>

    <div v-if="lastFeeding" class="flex flex-1 flex-col justify-center">
      <div class="text-center">
        <p class="text-sm font-medium text-slate-500">前回から</p>

        <p class="mt-1 text-5xl font-bold tracking-tight text-slate-900">
          {{ elapsedText }}
        </p>
      </div>

      <div class="mt-6 flex items-center justify-center gap-8">
        <div class="text-center">
          <p class="text-sm text-slate-500">時刻</p>
          <p class="mt-1 text-2xl font-semibold text-slate-800">
            {{ formatDateTime(lastFeeding.datetime) }}
          </p>
        </div>

        <div v-if="lastFeeding.amount" class="h-10 w-px bg-slate-200" />

        <div v-if="lastFeeding.amount" class="text-center">
          <p class="text-sm text-slate-500">量</p>
          <p class="mt-1 text-2xl font-semibold text-slate-800">
            {{ lastFeeding.amount }}
            <span class="text-base font-medium text-slate-500"> ml</span>
          </p>
        </div>
      </div>
    </div>

    <div v-else class="flex flex-1 items-center justify-center">
      <p class="text-lg text-slate-400">今日のミルク記録はありません</p>
    </div>
  </section>
</template>
