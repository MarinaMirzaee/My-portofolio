import { useState } from "react";
import { site } from "../data/content";
import Reveal from "./Reveal";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const emptyForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
  _gotcha: "",
};

// One floating-label field (input or textarea)
function Field({ id, label, type = "text", textarea = false, ...props }) {
  const Control = textarea ? "textarea" : "input";
  return (
    <div className={`field${props.invalid ? " invalid" : ""}`}>
      <Control
        id={id}
        name={id}
        type={textarea ? undefined : type}
        rows={textarea ? 5 : undefined}
        placeholder=" "
        value={props.value}
        onChange={props.onChange}
        autoComplete={props.autoComplete}
        required={props.required}
        aria-invalid={props.invalid || undefined}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default function Contact() {
  const [values, setValues] = useState(emptyForm);
  const [invalid, setInvalid] = useState({});
  const [status, setStatus] = useState({ message: "", type: "" });
  const [sending, setSending] = useState(false);

  const contactItems = [
    {
      icon: "✉",
      label: "Email",
      text: site.email,
      href: `mailto:${site.email}`,
    },
    {
      icon: <i className="devicon-github-original" aria-hidden="true" />,
      label: "GitHub",
      text: "github.com/MarinaMirzaee",
      href: "https://github.com/MarinaMirzaee",
    },
    {
      icon: <i className="devicon-linkedin-plain" aria-hidden="true" />,
      label: "LinkedIn",
      text: "linkedin.com/in/marina-mirzaee-654551416",
      href: "https://www.linkedin.com/in/marina-mirzaee-654551416",
    },
    { icon: "📍", label: "Location", text: site.location },
  ];

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((current) => ({ ...current, [name]: value }));
    // clear the error style as soon as the visitor edits the field
    setInvalid((current) => ({ ...current, [name]: false }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;

    const problems = {
      name: !values.name.trim(),
      email: !emailPattern.test(values.email.trim()),
      message: !values.message.trim(),
    };
    setInvalid(problems);

    const firstProblem = Object.keys(problems).find((key) => problems[key]);
    if (firstProblem) {
      setStatus({
        message: "Please fill in your name, a valid email and a message.",
        type: "error",
      });
      form.elements[firstProblem].focus();
      return;
    }

    // Spam trap: bots fill this hidden field, people never see it.
    if (values._gotcha) return;

    // No form service configured yet → open the visitor's email app.
    if (!site.formEndpoint) {
      const subject = values.subject || "Message from your portfolio";
      const body = `${values.message}\n\n— ${values.name} (${values.email})`;
      window.location.href =
        `mailto:${site.email}?subject=${encodeURIComponent(subject)}` +
        `&body=${encodeURIComponent(body)}`;
      setStatus({ message: "Opening your email app…", type: "success" });
      return;
    }

    setSending(true);
    setStatus({ message: "Sending…", type: "" });

    try {
      const response = await fetch(site.formEndpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error("Request failed");

      setValues(emptyForm);
      setStatus({
        message: "Thank you! Your message was sent — I'll reply soon.",
        type: "success",
      });
    } catch {
      setStatus({
        message: "Something went wrong. Please email me directly instead.",
        type: "error",
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="contact" id="contact">
      <Reveal className="contact-info" index={0}>
        <p className="tag">GET IN TOUCH</p>
        <h2>
          Let's Build Something <span>Great.</span>
        </h2>
        <p className="contact-lead">
          Have an opportunity or a project in mind? Feel free to contact me —
          I'd love to hear from you.
        </p>

        <div className="contact-list">
          {contactItems.map((item) => {
            const content = (
              <>
                <span className="ci" aria-hidden="true">
                  {item.icon}
                </span>
                <span className="ct">
                  <small>{item.label}</small>
                  {item.text}
                </span>
              </>
            );

            return item.href ? (
              <a
                key={item.label}
                href={item.href}
                className="contact-item"
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
              >
                {content}
              </a>
            ) : (
              <div key={item.label} className="contact-item">
                {content}
              </div>
            );
          })}
        </div>
      </Reveal>

      <Reveal
        as="form"
        className="contact-form"
        index={1}
        onSubmit={handleSubmit}
        noValidate
      >
        <h3>Send me a message</h3>

        <div className="field-row">
          <Field
            id="name"
            label="Your name"
            autoComplete="name"
            required
            value={values.name}
            onChange={handleChange}
            invalid={invalid.name}
          />
          <Field
            id="email"
            label="Your email"
            type="email"
            autoComplete="email"
            required
            value={values.email}
            onChange={handleChange}
            invalid={invalid.email}
          />
        </div>

        <Field
          id="subject"
          label="Subject"
          value={values.subject}
          onChange={handleChange}
        />

        <Field
          id="message"
          label="Your message"
          textarea
          required
          value={values.message}
          onChange={handleChange}
          invalid={invalid.message}
        />

        {/* spam trap: real visitors never see or fill this */}
        <input
          type="text"
          name="_gotcha"
          className="hp"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          value={values._gotcha}
          onChange={handleChange}
        />

        <button type="submit" className="btn" disabled={sending}>
          Send Message ➤
        </button>
        <p
          className={`form-status${status.type ? " " + status.type : ""}`}
          role="status"
          aria-live="polite"
        >
          {status.message}
        </p>
      </Reveal>
    </section>
  );
}
