<script setup lang="ts">
interface Feeding {
  datetime: string;
  amount: number;
}

const props = defineProps({
  feedings: {
    type: Object as () => Feeding,
    required: true,
  },
});
</script>

<template>
  <section>
    <h2>今日の記録</h2>

    <div v-for="feeding in feedings">
      <div>
        <span>{{ feeding.datetime }}</span>
        <span>{{ feeding.amount }} ml</span>
      </div>
    </div>
  </section>
</template>
