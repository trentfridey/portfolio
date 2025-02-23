<template>
  <div class="contact-form">
    <div class="section-heading">Say Hello</div>
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
</template>

<style lang="scss">
#contact {
  background-color: var(--black);
  color: var(--white);
  margin-bottom: 0;
  margin-top: 50vh;
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
  width: 400px;
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
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 10px;
  align-self: flex-end;
  font-weight: 800;
  
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
    top: 0;
    left: 0;
    background: var(--white);
    height: 100%;
    width: 100%;
    transition: transform 0.3s ease;
  }
  &:hover::before{
    transform: translateY(-100%);
  }
}
</style>
