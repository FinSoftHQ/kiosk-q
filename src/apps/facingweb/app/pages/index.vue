<template>
  <UContainer>
    <div class="flex items-center justify-center h-screen">
      <div class="flex flex-col items-center space-y-4">
        <img src="/org-logo.png"
          alt="Fin Soft powered KIOSK"
          class="w-32 h-32" />
        <NuxtLink to="/print">Print</NuxtLink>
        <UButton @click="closeApp">Close</UButton>
      </div>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
const kiosk = useKiosk();

function closeApp() {
  kiosk.closeapp();
}
</script>
