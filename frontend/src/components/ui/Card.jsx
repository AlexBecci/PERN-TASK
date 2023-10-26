export function Card({ children,className }) {
  return <div className={`bg-zinc-900 p-8 rounded-md ${className}`}>{children}</div>;
}

export default Card;
