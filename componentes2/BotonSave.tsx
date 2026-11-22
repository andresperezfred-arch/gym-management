import "./BotonSave.css";

export default function BotonSave({ disabled }: { disabled?: boolean }) {
  return (
    <button type="submit" className="atomo-btn-save-svg" disabled={disabled}>
      <img src="/save.svg" alt="Save" style={{ height: "34px", objectFit: "contain" }} />
    </button>
  );
}
