<template>
  <main>
    <h1>Trent Fridey &mdash; Portfolio</h1>
    <div>
      <a href="https://github.com/trentfridey">
        <img src="/github.svg" width="24" height="24" style="margin-right: 15px" />
      </a>
      <a href="https://linkedin.com/in/trentfridey">
        <img src="/linkedin.svg" width="24" height="24" />
      </a>
    </div>
  </main>
  <hr />
  <section>
    <div v-for="project in projects" class="card">
      <div>
        <a :href="`${project.site || project.src}`" class="preview">
          <img :src="`${project.preview}`" class="preview-img" />
        </a>
      </div>
      <div class="card-content">
        <h2>
          <a :href="`${project.src}`">{{ project.name }}</a>
        </h2>
        <div class="project-description">{{ project.description }}</div>
        <div class="tools">
          <div class="tool" v-for="tool in project.tools">
            <img :src="`/${tool}.svg`" width="20" style="margin-right: 8px" />
            <span class="tool-name">{{ tool }}</span>
          </div>
        </div>
      </div>
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
main {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 20px 20px;
}
hr {
  margin: 0;
}
a {
  color: black;
  &:visited {
    color: black;
  }
}
h1 {
  font-family: "Inter";
  font-weight: 500;
  margin: 0;
  font-size: 24px;
}
h2 {
  margin: 0;
  color: black;
  font-family: "Inter", sans-serif;
  font-weight: 300;
}
section {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
}
.card {
  border: 1px solid grey;
  flex: none;
  width: 300px;
  margin: 30px 0;
  border-radius: 11px;
  background: #f4f4f4;
  box-shadow: -4px 4px 8px #dedede, 4px -4px 8px #ffffff;
}
.card-content {
  padding: 20px;
}
.project-description {
  margin: 12px 0 20px 0;
  font-weight: 300;
  color: black;
  font-family: "Inter", sans-serif;
}
.preview {
  border-bottom: 1px solid black;
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
  border-top-left-radius: 11px;
  border-top-right-radius: 11px;
}
.tools {
  display: flex;
  flex-direction: row;
  justify-content: start;
  flex-wrap: wrap;
}
.tool {
  flex: none;
  border-radius: 11px;
  background: #f4f4f4;
  box-shadow: -4px 4px 8px #dedede, 4px -4px 8px #ffffff;
  border: 1px solid black;
  padding: 2px 5px;
  display: inline-block;
  height: 25px;
  margin: 3px 3px;
}
.tool-name {
  font-size: 14px;
  vertical-align: super;
  color: black;
  font-family: monospace;
  font-weight: 100;
}
</style>
