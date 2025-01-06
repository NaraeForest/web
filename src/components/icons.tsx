import Image from "next/image";

export function PlusIcon() {
  return (
    <Image
      alt="plus icon"
      width={0}
      height={0}
      src={"/plus.svg"}
      className="w-6 h-6"
    />
  );
}

export function WhitePlusIcon() {
  return (
    <Image
      alt="plus icon"
      width={0}
      height={0}
      src={"/white-plus.svg"}
      className="w-6 h-6"
    />
  )
}

export function XMarkIcon() {
  return (
    <Image
      alt="x-mark icon"
      width={0}
      height={0}
      src={"/x-mark.svg"}
      className="w-6 h-6"
    />
  );
}
