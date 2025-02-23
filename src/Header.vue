<template>
    <header>
    <div class="header-light">
      <span class="header-text">Trent&nbsp;Fridey</span>
    </div>
    <div class="header-dark">
      <span class="header-text">software&nbsp;engineer</span>
    </div>
  </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style lang="scss">
header {
  display: flex;
  align-items: center;
  position: sticky;
  height: var(--header-height);
  top: calc(var(--header-inner-height) - var(--header-height));
  border-bottom: 1.4px solid var(--black);
  z-index: 100;
  width: 100%;
}
.header-light {
  padding: 0 20px;
  height: var(--header-inner-height);
  background: var(--white);
  color: var(--black);
  text-align: right;
  font-weight: 800;
  border-bottom: 1.4px solid var(--black);
  line-height: var(--header-inner-height);
}
.header-dark {
  flex: 1 0 auto;
  padding: 0 20px;
  text-align: left;
  height: var(--header-inner-height);
  line-height: var(--header-inner-height);
  background: var(--black);
  color: var(--white);
}
.header-text {
  font-family: "Inter";
  display: inline;
  font-weight: 300;
  margin: 0;
  font-size: 24px;
  text-transform: lowercase;
  letter-spacing: -1px;
  line-height: var(--header-height);
}
</style>