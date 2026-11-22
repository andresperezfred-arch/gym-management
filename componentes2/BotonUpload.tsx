import "./BotonUpload.css";

export default function BotonUpload({ onClick }: { onClick: () => void }) {
  return (
    <button type="button" className="atomo-btn-upload" onClick={onClick}>
      <img src="/update.svg" alt="Upload" style={{ width: "14px", height: "14px" }} />
      <span>Upload</span>
    </button>
  );
}
