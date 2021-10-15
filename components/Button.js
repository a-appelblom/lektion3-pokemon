export default function Button({ children }) {
  return (
    <button style={{ borderRadius: "25%", minWidth: "8rem" }}>
      {children}
    </button>
  );
}
