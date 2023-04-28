export interface ButtonProps {
  type: "button" | "submit" | "reset";
  title: string;
}

export default function Button(props: ButtonProps) {
  const { type, title } = props;
  return (
    <button
      type={type}
      className="btn btn-save fw-medium text-lg text-white rounded-pill"
      role="button"
    >
      {title}
    </button>
  );
}
