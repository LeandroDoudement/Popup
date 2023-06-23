const EmailField = () => (
  <input
    type="email"
    id="email"
    name="email"
    className="form__input"
    required
    placeholder="Seu email"
  />
);

const NameField = () => (
  <input
    type="text"
    id="name"
    name="name"
    className="form__input"
    required
    placeholder="Seu Nome"
  />
);

const PhoneField = () => (
  <input
    type="tel"
    id="phone"
    name="phone"
    className="form__input"
    required
    placeholder="Seu celular"
  />
);

const GenderField = () => (
  <select id="gender" name="gender" className="form__select" required>
    <option value="" disabled selected>
      Seu Gênero
    </option>
    <option value="Masculino">Masculino</option>
    <option value="Feminino">Feminino</option>
    <option value="Prefiro não informar">Prefiro não informar</option>
  </select>
);

export const formFields = {
  email: EmailField,
  name: NameField,
  phone: PhoneField,
  gender: GenderField,
};
