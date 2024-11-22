<template>
  <UHeader :links="links">
    <template #logo>
      Fin Soft powered KIOSK
      <UBadge label="Queue"
        variant="subtle"
        class="mb-0.5" />
    </template>

    <template #right>
      <UButton label="Sign in"
        color="gray"
        to="/login" />
      <UButton label="Sign up"
        icon="i-heroicons-arrow-right-20-solid"
        trailing
        color="black"
        to="/signup"
        class="hidden lg:flex" />
    </template>

    <template #panel>
    </template>
  </UHeader>
</template>

<script setup lang="ts">
const links = [{
  label: 'Docs',
  to: '/docs'
}, {
  label: 'Pricing',
  to: '/pricing'
}, {
  label: 'Blog',
  to: '/blog'
}]
</script>
