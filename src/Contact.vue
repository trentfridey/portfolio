<template>
  <section id="contact">
    <div class="contact-form">
      <div class="contact-form-heading">
        <div>Say Hello</div>
        <div @click="$emit('return')">⏎</div>
      </div>
      <form data-netlify="true" name="contact" method="post">
        <input name="form-name" type="hidden" value="contact" />
        <input name="date" type="hidden" :value="Date()" />
        <div>
          <div class="input-container">
            <label for="name">Name</label>
            <input name="name" />
          </div>
          <div class="input-container">
            <label for="email">Email</label>
            <input name="email" />
          </div>
        </div>
        <textarea placeholder="message" name="message"></textarea>
        <button class="submit-btn" type="submit">
          <span>Submit</span>
        </button>
      </form>
    </div>
  </section>
</template>

<style lang="scss">
.slide-enter-active,
.slide-leave-active {
  transition: all .500s ease-in-out;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateY(100%);
}
#contact {
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: var(--black);
  color: var(--white);
  padding: 0 20px 20px 20px;
}
.contact-form-heading {
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
}
form {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: flex-start;
  max-width: 800px;
}
textarea {
  background-color: var(--black);
  border: 1.4px solid var(--white);
  color: var(--white);
  font-family: "Inter";
  padding: 10px;
  resize: none;
  height: 200px;
  width: 100%;
}
.input-container {
  margin: 10px 0;
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: stretch;
}
label {
  background-color: var(--white);
  color: var(--black);
  display: inline-block;
  padding: 12px 0;
  text-align: center;
  font-weight: 800;
  flex: 0 0 72px;
}
input {
  flex: 1 0 auto;
  background-color: var(--black);
  border: 1.4px solid var(--white);
  color: var(--white);
  font-family: "Inter";
  padding: 0 10px;
  display: inline-block;
  height: 100%;
}
.submit-btn {
  border: 1.4px solid var(--white);
  font-family: "Inter";
  font-size: 14px;
  padding: 20px 30px;
  cursor: pointer;
  margin-top: 10px;
  align-self: flex-end;
  font-weight: 800;
  font-size: 22px;
  background-color: var(--black);
  color: var(--white);
  position: relative;
  overflow: hidden;
  & > span {
    position: relative;
    mix-blend-mode: difference;
  }
  &::before {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    background: var(--white);
    height: 100%;
    width: 100%;
    transition: transform 0.3s ease;
  }
  &:hover::before {
    transform: translateY(-100%);
  }
}
</style>
