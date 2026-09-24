<script setup lang="ts">
interface Props {
  targetAmount: number;
  totalAmount: number;
}

const props = defineProps<Props>();
</script>

<template>
  <section>
    <h2>今日のミルク</h2>

    <div>
      <div>
        <strong>{{ totalAmount }}</strong>
        <span> / {{ targetAmount }} ml</span>
      </div>
    </div>
  </section>
</template>
