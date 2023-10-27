export function Card({ children,className }) {
  return <div className={`p-8 rounded-md ${className}`}>{children}</div>;
}

export default Card;
