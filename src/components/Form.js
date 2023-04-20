import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Section } from "gatsby-theme-portfolio-minimal";
import * as styles from "./style.module.css";

export const Form = (props) => {
  const [state, handleSubmit] = useForm("xyyalger");
  if (state.succeeded) {
    return (
      <Section anchor={props.sectionId} className={styles.section}>
      <p className={styles.message}>
        Thank you, I will get back at you as soon as I can!{" "}
      </p>
      </Section>
    );
  }
  return (
    <Section anchor={props.sectionId} className={styles.section}>
      <form onSubmit={handleSubmit} className={styles.form}>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Name"
            required
            className={styles.input}
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            required
            className={styles.input}
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            required
            className={styles.textArea}
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        <button
          type="submit"
          disabled={state.submitting}
          className={styles.btn}
        >
          Submit
        </button>
      </form>
    </Section>
  );
};
