import React from "react";
import { Field, reduxForm } from "redux-form";

class ProfileForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, placeholder, type, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;

    return (
      <div className={className}>
        <label>{label}</label>
        <input
          {...input}
          autoComplete="off"
          type={type}
          placeholder={placeholder}
        />
        {this.renderError(meta)}
      </div>
    );
  };

  renderTextArea = ({ input, label }) => (
    <div>
      <label>{label}</label>
      <div>
        <textarea {...input} rows="10" cols="40" />
      </div>
    </div>
  );

  adaptFileEventToValue = (delegate) => (e) => delegate(e.target.files[0]);

  renderFile = ({
    input: { value: omitValue, onChange, onBlur, ...inputProps },
    meta: omitMeta,
    label,
    ...props
  }) => {
    return (
      <div>
        <label>{label}</label>
        <input
          onChange={this.adaptFileEventToValue(onChange)}
          onBlur={this.adaptFileEventToValue(onBlur)}
          type="file"
          {...props.input}
          {...props}
        />
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field
          name="name"
          type="text"
          component={this.renderInput}
          label="Name"
        />
        <Field
          name="age"
          type="number"
          component={this.renderInput}
          label="Age"
        />
        <Field
          name="pic"
          type="file"
          component={this.renderFile}
          label="Profile Picture"
        />
        <br />
        <h4>Working Experiences</h4>
        <hr></hr>
        <Field
          name="start"
          type="text"
          component={this.renderInput}
          placeholder="DD/MM/YYYY"
          label="Start Date"
        />
        <Field
          name="end"
          type="text"
          component={this.renderInput}
          placeholder="DD/MM/YYYY"
          label="End Date"
        />
        <Field
          name="current"
          type="checkbox"
          component={this.renderInput}
          label="current position"
        />
        <Field
          name="job"
          type="text"
          component={this.renderInput}
          label="Job Title"
        />
        <Field
          name="company"
          type="text"
          component={this.renderInput}
          label="Company"
        />
        <Field
          name="logo"
          type="file"
          component={this.renderFile}
          label="Company logo"
        />
        <Field
          name="description"
          component={this.renderTextArea}
          label="Job description"
        />
        <br />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.name) {
    errors.name = "You need to enter a name";
  }

  if (!formValues.age) {
    errors.age = "You need to enter your age";
  }

  if (!formValues.job) {
    errors.job = "You need to enter your job title";
  }

  if (!formValues.company) {
    errors.company = "You need to enter your company";
  }

  return errors;
};

export default reduxForm({
  form: "profileForm",
  validate,
})(ProfileForm);
