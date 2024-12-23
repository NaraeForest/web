type Heading1Props = {
  text: string
}
export function Heading1({ text }: Heading1Props) {
  return (
    <h1
      className="text-[2rem] leading-8 font-medium"
    >
      {text}
    </h1>
  );
}

type Heading2Props = {
  text: string
}
export function Heading2({ text }: Heading2Props) {
  return (
    <h2
      className="text-2xl leading-6"
    >
      {text}
    </h2>
  );
}