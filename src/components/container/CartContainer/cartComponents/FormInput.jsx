import "./FormInput.css";

export const FormInput = ({
  placeHolder,
  name,
  type,
  value,
  onChange,
  errorMessage,
}) => {
  return (
    <div className="form-input">
      <input
        type={type}
        name={name}
        required={false}
        placeholder={placeHolder}
        value={value}
        onChange={onChange}
      />
      {errorMessage ? (
        <div className={"d-block invalid-feedback text-start"}>
          {errorMessage}
        </div>
      ) : null}
    </div>
  );
};
