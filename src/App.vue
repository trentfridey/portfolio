<template>
  <Transition name="fade" appear v-show="this.section === 'main'">
    <section id="main">
      <div class="slideshow">
        <h1>Trent Fridey</h1>
        <div id="tag-line">
        <h2>
          Developer &amp; Data Scientist
          <a href="https://linkedin.com/in/trentfridey"> </a>
        </h2>
      </div>
      </div>
      <div>
        <div class="section-heading" id="blog">
          <a class="section-heading-text" href="https://blog.trentfridey.com">Blog</a>
        </div>
        <div class="section-heading" id="resume">
          <a class="section-heading-text" href="/resume.html">Résumé</a>
        </div>
        <div class="section-heading" id="contact-link">
          <span class="section-heading-text" @click="this.section = 'contact'"
            >Contact Me</span
          >
        </div>
      </div>
      
    </section>
  </Transition>
  <Transition name="slide" appear v-show="this.section === 'contact'">
    <Contact @return="this.section = 'main'" />
  </Transition>
</template>

<script>
import Contact from "./Contact.vue";
export default {
  name: "App",
  components: { Contact },
  data() {
    return {
      section: "main",
    };
  },
};
</script>

<style lang="scss">
:root {
  --header-height: 48px;
  --header-inner-height: 48px;
  --white: #efefea;
  --black: rgb(37, 37, 37);
  font-family: "Inter";
  background-color: var(--white);
  color: var(--black);
}
section {
  height: calc(100vh);
}
#main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.slideshow {
  flex: 1 0 auto;
  position: relative;
}
.slideshow::after {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: -1;
  opacity: 0.3;
  animation: slideshow 15s ease-in-out infinite;
  background-repeat: no-repeat;
  background-size: cover;
}
@keyframes slideshow {
  0% {
    background-image: url("/coding.gif");
  }
  50% {
    background-image: url("/math.gif");
  }
  100% {
    background-image: url("/inspect.gif");
  }
}
.section-heading {
  color: var(--black);
  flex: none;
  font-family: "Inter";
  font-weight: 800;
  font-size: 88px;
  letter-spacing: -5px;
  line-height: 88px;
  border-top: 1px solid var(--black);
  padding: 20px;
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: space-between;
  & .section-heading-text {
    width: calc(100% - 20px);
    transform: translateX(0);
    transition: transform 0.5s ease;
  }
  &:hover {
    .section-heading-text {
      color: var(--white);
      transform: translateX(20px);
    }
  }
  &#contact-link,
  &#resume,
  &#blog {
    transition: all 0.5s ease;
    border-bottom: 1px solid var(--black);
    &:hover {
      background-color: var(--black);
      color: var(--white);
    }
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
}
h1 {
  font-family: "Inter";
  font-weight: 800;
  font-size: 190px;
  letter-spacing: -9px;
  line-height: 190px;
  color: var(--black);
  padding: 10px 0 30px 30px;
  margin: 0;
  position: relative;
}
h2 {
  font-weight: 300;
  margin: 0;
  font-size: 62px;
  letter-spacing: -2px;
  margin-left: 42px;
  margin-top: -18px;
}
#tag-line {
  color: var(--black);
  position: absolute;
  bottom: 10px;
  right: 30px;
  pointer-events: none;
}
@media screen and (max-device-width: 812px) {
  h1 {
    font-weight: 800;
    font-size: 88px;
    letter-spacing: -5px;
    line-height: 88px;
  }
  #tag-line {
    display: none;
  }
}
</style>
