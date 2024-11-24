<template>
  <div>
    <h1>Printing ...</h1>
    <UButton class="mr-4 mb-4" @click="print">Print</UButton>
    <UButton @click="closeApp">Close</UButton>
  </div>
</template>

<script setup lang="ts">
const kiosk = useKiosk();
function print() {
  console.log('Printing ...');
  kiosk.printslip();
}

function closeApp() {
  kiosk.closeapp();
}
</script>