<script lang="ts" setup>
const left = ref<HTMLElement>()
const right = ref<HTMLElement>()

const refs = [left, right]

refs.forEach((ref, i) => {
  useMotion(ref, {
    initial: {
      y: 80,
      scale: 0.9,
      opacity: 0,
    },
    visibleOnce: {
      y: 0,
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 15,
        delay: 200 * i,
      },
    },
  })
})
</script>

<template>
  <Card overflow-hidden p-none>
    <div grid items-stretch gap-4 w-full>
      <div col-span-12>
        <div flex justify-center w-full relative z-5>
          <div space-y-8 text-center py-16 md:py-20 px-6>
            <div flex flex-col space-y-6 max-w-lg>
              <Heading type="h2" text="#B3FF66" text-4xl lg:(text-5xl leading-14)>
                Next level betting.
              </Heading>

              <p text-lg text-zinc-400 leading-relaxed tracking-normal>
                Reimagining the traditional sportsbook for a new audience, with a focus on esports and
                dynamic markets that reinvigorate players.
              </p>
            </div>

            <Button
              component="a"
              href="https://www.midnite.com"
              target="_blank"
              aria-label="Visit Midnite"
              font-black
            >
              View Project
            </Button>
          </div>
        </div>
      </div>
      <div col-span-12 md:min-h-xs h-full mt="-20 md:-50">
        <div flex justify-center items-center>
          <img
            src="/projects/midnite/wave.svg"
            alt="Midnite"
            relative
            w-full
          >
        </div>
      </div>
    </div>
  </Card>
</template>
