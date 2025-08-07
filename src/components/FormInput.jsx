function FormInput({ label, type, name }) {
  return (
    <fieldset className="fieldset">
      <legend className="fieldset-legend">{label}</legend>
      <input
        type={type}
        name={name}
        className="input w-full text-xl font-bold"
        placeholder="Type here"
      />
    </fieldset>
  );
}

export default FormInput