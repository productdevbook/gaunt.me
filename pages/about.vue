<script lang="ts" setup>
useHead({
  title: 'About',
})

definePageMeta({
  changefreq: 'monthly',
})
</script>

<template>
  <div flex bg-zinc-800 bg-opacity-40 lg:highlight rounded-none lg:rounded-l-6 lg:rounded-r-2 lg:overflow-hidden w-full>
    <main id="main" relative flex flex-col lg:overflow-y-auto lg:max-h-page w-full>
      <Container max-w-6xl py-20 lg:py-32>
        <ListDetailView
          title="About"
          description="Welcome to my little corner of the internet. It's not much, but it's something."
          icon="User"
        >
          <div flex flex-col space-y-3>
            <div grid grid-cols-1 gap-6 md:gap-8>
              <div col-span-1>
                <AboutBlurb />
              </div>
              <div col-span-1>
                <div grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8>
                  <div col-span-1>
                    <AboutTweet />
                  </div>
                  <div col-span-1>
                    <AboutSkills />
                  </div>
                </div>
              </div>
              <div col-span-1>
                <AboutChat />
              </div>
            </div>
          </div>
        </ListDetailView>
      </Container>
    </main>
  </div>
</template>
