import "./Avatar.css";

interface AvatarProps {
  src: string;
  alt: string;
}

export default function Avatar({ src, alt }: AvatarProps) {
  const imagenValida =
    src && (src.startsWith("http") || src.startsWith("/"))
      ? src
      : "https://pravatar.cc";

  return <img src={imagenValida} alt={alt} className="atomo-avatar" />;
}
