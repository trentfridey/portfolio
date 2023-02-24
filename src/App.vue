<template>
  <header>
    <div class="header-inner">
      <h1>
        Trent&nbsp;Fridey
      // software engineer
      </h1>
      
    </div>
  </header>
  <section>
    <div className="cards">
      <div
        v-for="(project, idx) in projects"
        class="card"
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :enter="{ opacity: 1, y: 0, scale: 1 }"
        :variants="{ custom: { scale: 2 } }"
        :delay="200 + 100 * idx"
      >
        <div class="card-header">
          <a :href="`${project.site}`" class="h2">{{ project.name }}</a>
          <a :href="`${project.src}`"
            ><img
              style="vertical-align: text-top"
              src="/src/assets/icons/github.svg"
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
                :src="`/src/assets/icons/${tool}.svg`"
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
  <section id="contact">
    <div>
      <h3>Social</h3>
      <div style="margin: auto">
        <a href="https://linkedin.com/in/trentfridey" style="color: #efefea"><img
          style="vertical-align: middle; margin-right: 20px"
          src="/src/assets/icons/linkedin.svg"
        /></a>
        <a href="https://linkedin.com/in/trentfridey" style="color: #efefea">linkedin.com/in/trentfridey</a>
      </div>
    </div>
    <div class="contact-form">
      <h3>Contact Me</h3>
      <form data-netlify="true" name="contact" method="post">
        <input name="form-name" type="hidden" value="contact" />
        <input name="date" type="hidden" :value="Date()" />
        <input placeholder="name" name="name" />
        <input placeholder="email" name="email" />
        <textarea placeholder="message"></textarea>
        <button class="submit-btn" type="submit">Submit</button>
      </form>
    </div>
  </section>
</template>

<style scoped></style>

<script>
import projects from './projects.json';

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
  --header-height: 120px;
  --header-inner-height: 120px;
  font-family: "Inter";
}
header {
  display: flex;
  align-items: center;
  position: sticky;
  height: var(--header-height);
  top: calc(var(--header-inner-height) - var(--header-height));
  border-bottom: 1.4px solid black;
  z-index: 100;
  background-color: #efefea;
}
.header-inner {
  height: var(--header-inner-height);
  position: sticky;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
}
.header-box {
  border-radius: 8px;
  padding: 20px;
  margin-left: 40px;
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
  font-weight: 200;
  margin: 0;
  font-size: 64px;
  color: rgb(37, 37, 37);
  text-transform: lowercase;
  letter-spacing: -4px;
  line-height: 52px;
  background-color: #efefea;
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
  margin: 0;
  font-size: 18px;
  color: #efefea;
  text-transform: lowercase;
  letter-spacing: -1px;
  line-height: 30px;
  background-color: rgb(37, 37, 37);
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
  padding: 0px 10px 400px 10px;
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
  border-radius: 11px;
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
  height: 25px;
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
  height: calc(100vh - 180px);
  padding: 40px 40px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
}
form {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: flex-start;
  width: 420px;
}
textarea {
  background-color: rgb(37, 37, 37);
  border: 1.4px solid #efefea;
  border-radius: 6px;
  color: #efefea;
  font-family: "Inter";
  padding: 10px;
  resize: none;
  height: 200px;
  width: 400px;
  margin: 10px 0;
}
input {
  background-color: rgb(37, 37, 37);
  border: 1.4px solid #efefea;
  border-radius: 6px;
  color: #efefea;
  font-family: "Inter";
  padding: 10px;
  margin: 10px 0;
}
.submit-btn {
  background-color: #efefea;
  color: rgb(37, 37, 37);
  border: 1.4px solid #efefea;
  border-radius: 60px;
  font-family: "Inter";
  font-size: 14px;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 10px;
  align-self: flex-end;
  font-weight: 800;
}
</style>
