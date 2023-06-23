import React from 'react';
import './styles.css';
import { useConfiguration } from '../../lib/configuration';
import { formFields } from './fragments';

const Form = () => {
  const { consentCheckbox, activatedFields, title, subtitle } =
    useConfiguration();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const fields = Object.keys(activatedFields).map((key) => {
    const Field = formFields[key];

    return (
      <div className="form__field">
        <Field key={key} />
      </div>
    );
  });

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2 className="popup__title">{title}</h2>
      <h3 className="popup__subtitle">{subtitle}</h3>
      {fields}
      {consentCheckbox && (
        <div className="form__field">
          <label htmlFor="consentCheckbox" className="form__label">
            <input
              type="checkbox"
              id="consentCheckbox"
              name="consentCheckbox"
              className="form__checkbox"
              required
            />
            Eu concordo com a coleta de dados.
          </label>
        </div>
      )}
      <button type="submit" className="form__submit">
        Enviar
      </button>
    </form>
  );
};

export default Form;
