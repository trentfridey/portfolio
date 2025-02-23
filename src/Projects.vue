<template>
  <div>
    <div class="section-heading" id="code-samples" style="text-align: right">
      Code Samples
    </div>
    <div className="cards">
      <div v-for="(project, idx) in projects" class="card">
        <div class="card-header">
          <a :href="`${project.site}`" class="card-title">{{ project.name }}</a>
          <a :href="`${project.src}`">
            <img
              style="vertical-align: text-top"
              src="/icons/github.svg"
              width="28"
              height="28"
            />
          </a>
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
  </div>
</template>

<script>
import projects from "./projects.json";

export default {
  name: "Projects",
  computed: {
    projects() {
      return projects;
    },
  },
};
</script>

<style lang="scss">
#code-samples {
  display: flex;
  align-items: center;
  &::before {
    content: "";
    margin: 0 30px;
    flex: 1;
    border-bottom: 1px solid var(--black);
  }
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
  background: var(--white);
  border: 1.4px solid var(--black);
  translate: 0;
  transition: all 0.25s;
  box-shadow: -12px 12px 0px 0px var(--black);
  translate: 12px -12px;
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
  border-bottom: 1.4px solid var(--black);
}
.card-title {
  margin: 0;
  color: var(--black);
  font-family: "Inter", sans-serif;
  font-weight: 300;
  font-size: 24px;
  text-transform: lowercase;
}
.card-content {
  padding: 20px;
}
.project-description {
  margin: 12px 0 20px 0;
  font-weight: 300;
  color: var(--black);
  font-family: "Inter", sans-serif;
}
.card-footer {
  font-family: "Inter";
  color: var(--black);
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: flex-end;
}
.preview {
  border-bottom: 1.4px solid var(--black);
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
  border: 1.3px solid var(--black);
}
.tool-name {
  font-size: 14px;
  color: var(--black);
  font-weight: 300;
}
</style>
