<template>
  <!-- <Header /> -->
  <TransitionOnScroll>
    <h1>Trent&nbsp;Fridey</h1>
    <h2>
      SOFTWARE DEVELOPER &amp; DATA SCIENTIST
      <a href="https://linkedin.com/in/trentfridey">
        <img src="/icons/linkedin.svg" width="26" height="26" />
      </a>
    </h2>
    <div class="section-heading" id="code">Code</div>
    <div class="section-heading" id="contact-link">Contact</div>
  </TransitionOnScroll>
  <TransitionOnScroll>
    <Projects />
  </TransitionOnScroll>
  <section id="contact">
    <Contact />
  </section>
</template>

<script>
import Contact from "./Contact.vue";
import Projects from "./Projects.vue";
import TransitionOnScroll from "./TransitionOnScroll.vue";
import Header from "./Header.vue";
export default {
  name: "App",
  components: { Header, TransitionOnScroll, Projects, Contact },
};
</script>

<style lang="scss">
:root {
  --header-height: 48px;
  --header-inner-height: 48px;
  --white: #efefea;
  --black: rgb(37, 37, 37);
  font-family: "Inter";
}
section {
  min-height: calc(100vh);
  padding: 20px 40px;
}
.section-heading {
  font-family: "Inter";
  font-weight: 800;
  font-size: 88px;
  letter-spacing: -5px;
  line-height: 88px;
  border: 1px solid var(--black);
  padding: 20px;
  cursor: pointer;
  &#code:hover {
    background-image: url(./coding.gif);
    background-size: cover;
    background-position: center;
  }
  &#contact-link:hover {
    background-image: url(./math.gif);
    background-size: cover;
    background-position: center;
  }
}
#summary {
  margin-bottom: 300px;
  display: flex;
  align-items: center;
}
a {
  text-decoration: none;
  color: var(--black);
  &:visited {
    color: var(--black);
  }
}
h1 {
  font-family: "Inter";
  font-weight: 800;
  font-size: 190px;
  letter-spacing: -9px;
  line-height: 190px;
  color: var(--black);
  margin: 0;
}
h2 {
  font-weight: 300;
  margin: 0;
  font-size: 32px;
  margin-left: 42px;
  margin-top: -18px;
}

@media screen and (max-device-width: 812px) {
  h1 {
    font-size: 24px;
    letter-spacing: normal;
    font-weight: 300;
    line-height: 24px;
  }
  .card + .card {
    margin-left: 0;
  }
}
</style>
