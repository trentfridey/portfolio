<template>
  <header>
    <div class="header-light">
      <h1>Trent&nbsp;Fridey</h1>
    </div>
    <div class="header-dark">
      <h1>software&nbsp;engineer</h1>
    </div>
  </header>
  <section id="summary">
    <div class="tag-line">
      Software engineering<br/> 
      from<img src="/ctrl-z.svg" style="height:72px;margin-left:20px"/><br/>
      experience.
      <br/>
    </div>
  </section>
  <section>
    <div className="cards">
      <div
        v-for="(project, idx) in projects"
        class="card"
        v-motion
        visible-once
        :initial="{ opacity: 0, y: 100 }"
        :enter="{ opacity: 1, y: 0, scale: 1 }"
        :variants="{ custom: { scale: 2 } }"
      >
        <div class="card-header">
          <a :href="`${project.site}`" class="h2">{{ project.name }}</a>
          <a :href="`${project.src}`"
            ><img
              style="vertical-align: text-top"
              src="/icons/github.svg"
              width="28"
              height="28"
          /></a>
        </div>
        <div>
          <a :href="`${project.site || project.src}`" class="preview">
            <img :src="`${project.preview}`" class="preview-img" />
          </a>
        </div>
        <div class="card-content">
          <div class="tools">
            <div class="tool" v-for="tool in project.tools">
              <img
                :src="`/icons/${tool}.svg`"
                :alt="tool"
                width="20"
                style="vertical-align: text-top; margin-right: 8px"
              />
              <span class="tool-name">{{ tool }}</span>
            </div>
          </div>
          <div class="project-description">{{ project.description }}</div>
        </div>
      </div>
    </div>
  </section>
  <vue-3-marquee id="marquee-slider" direction="reverse" duration="5" :clone="true">
      <img src="/ctrl-z.svg" style="height: 74px; margin: 0px 10px 10px 0" />
    </vue-3-marquee>
  <section id="contact">
    <div class="contact-form">
      <h3>Say Hello</h3>
      <form data-netlify="true" name="contact" method="post">
        <input name="form-name" type="hidden" value="contact" />
        <input name="date" type="hidden" :value="Date()" />
        <input placeholder="name" name="name" />
        <input placeholder="email" name="email" />
        <textarea placeholder="message" name="message"></textarea>
        <button class="submit-btn" type="submit">Submit</button>
      </form>
    </div>
  </section>
</template>

<style scoped></style>

<script>
import projects from "./projects.json";
export default {
  name: "App",
  computed: {
    projects() {
      return projects;
    },
  },
};
</script>

<style lang="scss">
:root {
  --header-height: 48px;
  --header-inner-height: 48px;
  font-family: "Inter";
}
header {
  display: flex;
  align-items: center;
  position: sticky;
  height: var(--header-height);
  top: calc(var(--header-inner-height) - var(--header-height));
  border-bottom: 1.4px solid rgb(37, 37, 37);
  z-index: 100;
  width: 100%;
}
.header-light {
  padding: 0 20px;
  height: var(--header-inner-height);
  background: #efefea;
  color: rgb(37, 37, 37);
  text-align: right;
  border-bottom: 1.4px solid rgb(37, 37, 37);
  line-height: var(--header-inner-height);
}
.header-dark {
  flex: 1 0 auto;
  padding: 0 20px;
  text-align: left;
  height: var(--header-inner-height);
  line-height: var(--header-inner-height);
  background: rgb(37, 37, 37);
  color: #efefea;
}
#summary {
  margin-bottom: 300px;
  display: flex;
  align-items: center;
}
.tag-line {
  font-family: "Inter";
  font-weight: 800;
  font-size: 90px;
  letter-spacing: -5px;
  line-height: 90px;
  padding: 0 0 0 60px;
  width: 660px;
  flex: 1 0 auto;
}
hr {
  margin: 0;
}
a {
  text-decoration: none;
  color: rgb(37, 37, 37);
  &:visited {
    color: rgb(37, 37, 37);
  }
}
h1 {
  font-family: "Inter";
  display: inline;
  font-weight: 300;
  margin: 0;
  font-size: 24px;
  text-transform: lowercase;
  letter-spacing: -1px;
  line-height: var(--header-height);
}
h2 {
  font-family: "Inter";
  display: inline;
  font-weight: 300;
  margin: 0;
  font-size: 36px;
  color: rgb(37, 37, 37);
  text-transform: lowercase;
  letter-spacing: 0px;
  line-height: 48px;
}
h3 {
  font-family: "Inter";
  font-weight: 800;
  margin: 0 0 16px 0;
  font-size: 88px;
  color: #efefea;
  letter-spacing: -5px;
  line-height: 88px;
  background-color: rgb(37, 37, 37);
  padding: 20px 20px;
}
.h2 {
  margin: 0;
  color: rgb(37, 37, 37);
  font-family: "Inter", sans-serif;
  font-weight: 300;
  font-size: 24px;
  text-transform: lowercase;
}
section {
  min-height: calc(100vh - var(--header-height));
  margin-bottom: 300px;
}
.sidebar {
  width: 50px;
  border-left: 4.4px solid rgb(37, 37, 37);
  height: calc(100% - 20px);
  margin: 10px 0;
  writing-mode: vertical-lr;
  line-height: 50px;
}
.cards {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
}
.card {
  flex: none;
  width: 300px;
  margin: 30px 0;
  background: #efefea;
  border: 1.4px solid rgb(37, 37, 37);
  translate: 0;
  transition: all 0.25s;
  &:hover {
    box-shadow: -12px 12px 0px 0px rgb(37, 37, 37);
    translate: 12px -12px;
  }
  & + & {
    margin-left: 15px;
  }
}
.card-header {
  padding: 10px 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  border-bottom: 1.4px solid rgb(37, 37, 37);
}
.card-content {
  padding: 20px;
}

.project-description {
  margin: 12px 0 20px 0;
  font-weight: 300;
  color: rgb(37, 37, 37);
  font-family: "Inter", sans-serif;
}
.card-footer {
  font-family: "Inter";
  color: rgb(37, 37, 37);
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: flex-end;
}
.preview {
  border-bottom: 1.4px solid rgb(37, 37, 37);
  height: 300px;
  width: 100%;
  display: flex;
  & > * {
    margin: auto;
  }
}
.preview-img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  filter: grayscale(1);
}
.tools {
  display: flex;
  flex-direction: row;
  justify-content: start;
  flex-wrap: wrap;
}
.tool {
  flex: none;
  border-radius: 12px;
  display: inline-block;
  height: 32px;
  filter: grayscale(1);
  padding: 2px 15px 2px 12px;
  margin: 2px;
  border: 1.3px solid rgb(37, 37, 37);
}
.tool-name {
  font-size: 14px;
  color: rgb(37, 37, 37);
  font-weight: 300;
}
#contact {
  background-color: rgb(37, 37, 37);
  color: #efefea;
  margin-bottom: 0;
}
form {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 0 20px;
  max-width: 800px;
}
textarea {
  background-color: rgb(37, 37, 37);
  border: 1.4px solid #efefea;
  color: #efefea;
  font-family: "Inter";
  padding: 10px;
  resize: none;
  height: 200px;
  margin: 10px 0;
  width: 100%;
}
input {
  background-color: rgb(37, 37, 37);
  border: 1.4px solid #efefea;
  color: #efefea;
  font-family: "Inter";
  padding: 10px;
  margin: 10px 0;
}
.submit-btn {
  background-color: #efefea;
  color: rgb(37, 37, 37);
  border: 1.4px solid #efefea;
  font-family: "Inter";
  font-size: 14px;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 10px;
  align-self: flex-end;
  font-weight: 800;
  translate: 0;
  transition: all 0.25s;
  &:hover {
    box-shadow: -6px 6px 0px 0px #efefeaaa;
    translate: 6px -6px;
  }
  &:active {
    translate: 2px -2px;
    box-shadow: -2px 2px 0 0 #efefeaaa;
  }
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
