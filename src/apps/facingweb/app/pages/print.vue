<template>
  <div>
    <h1>Printing ...</h1>
    <UButton @click="print">Print</UButton>
  </div>
</template>

<script setup lang="ts">
const kiosk = useKiosk();
function print() {
  console.log('Printing ...');
  kiosk.printslip();
}
</script>