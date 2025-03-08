<template>
  <section id="main">
    <div class="main-content">
      <div>
        <h2>Developer &amp; Data Scientist</h2>
        <h1>Trent Fridey</h1>
      </div>
      <div class="sections">
        <div class="section-heading" id="blog">
          <a class="section-heading-text" href="https://blog.trentfridey.com">Blog</a>
        </div>
        <div class="section-heading" id="resume">
          <a class="section-heading-text" href="/resume.html">Résumé</a>
        </div>
        <div class="section-heading" id="contact-link" @click="this.section = 'contact'">
          <span class="section-heading-text">Contact Me</span>
        </div>
      </div>
    </div>
  </section>
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
  --white: #d8cfbd;
  --black: rgb(37, 37, 37);
  font-family: "Inter";
  background-color: var(--white);
  color: var(--black);
}
section {
  height: 100vh;
}
#main {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: -1;
    opacity: 0.3;
    filter: blur(2px);
    animation: slideshow 15s ease-in-out infinite;
    background-repeat: no-repeat;
    background-size: cover;
  }
}
.main-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
@keyframes slideshow {
  0% {
    background-image: url("/coding.gif");
  }
  100% {
    background-image: url("/math.gif");
  }
}
@keyframes blurin {
  0% {
    filter: blur(5px);
  }
  100% {
    filter: blur(0);
  }
}
.section-heading {
  color: var(--black);
  flex: none;
  min-width: 400px;
  text-align: right;
  font-family: "Inter";
  font-weight: 300;
  font-size: 48px;
  letter-spacing: -1px;
  line-height: 48px;
  padding: 10px 0 10px 40px;
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
      transform: translateX(-20px);
    }
  }
  &#contact-link,
  &#resume,
  &#blog {
    transition: all 0.5s ease;
    &:hover {
      background-color: var(--black);
      color: var(--white);
    }
  }
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
  animation: blurin 1s ease 1;
}
h2 {
  font-weight: 300;
  margin: 0;
  font-size: 48px;
  letter-spacing: -1px;
  margin-left: 33px;
  animation: blurin 1s ease 1;
  background: var(--black);
  color: var(--white);
  padding: 4px 24px 4px 24px;
  display: inline-block;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.7s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
@media screen and (max-device-width: 812px) {
  .main-content {
    flex-direction: column;
    align-items: start;
  }
  h1 {
    font-weight: 800;
    font-size: 88px;
    letter-spacing: -5px;
    line-height: 88px;
  }
  #tag-line > h2 {
    font-size: 40px;
  }
  .section-heading {
    font-size: 48px;
    letter-spacing: -2px;
    text-align: left;
    padding-right:0;
  }
}
</style>
