<script lang="ts" setup>
defineOptions({
  inheritAttrs: false,
})
</script>

<template>
  <div inline-flex>
    <NuxtLink
      v-bind="$attrs"
      inline-flex
      justify-center
      items-center
      bg-cyan
      bg-opacity-12
      hover:bg-opacity-10
      ring
      ring-inset
      ring-cyan
      ring-opacity-15
      rounded-5
      min-h-11
      px-6
      font-semibold
      transition-all
    >
      <slot />
    </NuxtLink>
  </div>
</template>
