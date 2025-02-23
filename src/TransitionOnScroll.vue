<template>
  <section>
    <div ref="container" class="container">
    <Transition name="fade" appear>
      <div v-show="isVisible">
        <slot />
      </div>
    </Transition>
    </div>
  </section>
</template>

<script>
export default {
  name: "TransitionOnScroll",
  data() {
    return {
      observer: null,
      isVisible: false,
    };
  },
  mounted() {
    const options = {
      root: null, // Defaults to the viewport
    };

    this.observer = new IntersectionObserver(this.handleIntersection, options);
    this.observer.observe(this.$refs.container); // Observe the target element
  },
  beforeDestroy() {
    if (this.observer) {
      this.observer.disconnect(); // Disconnect the observer
    }
  },
  methods: {
    handleIntersection(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Element is in view
          console.log("Element is visible", this.$props.name);
          this.isVisible = true;
        } else {
          // Element is out of view
          console.log("Element is not visible", this.$props.name);
          this.isVisible = false;
        }
      });
    },
  },
};
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: all 1.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
