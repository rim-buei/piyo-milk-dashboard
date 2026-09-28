<script setup lang="ts">
interface Feeding {
  dateTime: string;
  amount: number;
}

defineProps({
  feedings: {
    type: Object as () => Feeding,
    required: true,
  },
});

const config = useRuntimeConfig();
</script>

<template>
  <section class="flex h-full flex-col rounded-3xl bg-white p-6 shadow-lg ring-1 ring-slate-200">
    <div class="mb-5 flex items-center justify-between">
      <h1 class="text-3xl font-bold text-slate-700">最近の記録</h1>
    </div>

    <div v-if="feedings.length > 0" class="min-h-0 flex-1 overflow-y-auto">
      <ul class="divide-y divide-slate-100">
        <li
          v-for="(feeding, index) in feedings.slice(-config.public.historyCount).reverse()"
          :key="`${feeding.dateTime}-${index}`"
          class="flex items-center justify-between py-4 first:pt-0"
        >
          <div class="flex items-center gap-4">
            <span class="w-40 text-3xl font-semibold tabular-nums text-slate-800">
              {{ formatDateTime(feeding.dateTime, config.public.timeZone) }}
            </span>
            <span class="text-3xl font-medium text-slate-400">
              {{ translateFeedingType(feeding.type) }}
            </span>
          </div>

          <span class="text-3xl font-bold tabular-nums text-slate-700">
            <div v-if="feeding.amount">
              {{ feeding.amount }}
              <span class="text-3xl font-medium text-slate-400"> ml</span>
            </div>
            <div v-else>記録なし</div>
          </span>
        </li>
      </ul>
    </div>

    <div v-else class="flex flex-1 items-center justify-center">
      <p class="text-lg text-slate-400">まだ記録がありません</p>
    </div>
  </section>
</template>
