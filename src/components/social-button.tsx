import Image from "next/image";

type SocialButtonProps = {
  social: string,
  redirect: string,
  icon: string,
  backgroundColor: string,
  backgroundHoverColor: string,
};
export function SocialButton({ social, redirect, icon, backgroundColor, backgroundHoverColor }: SocialButtonProps) {
  return (
    <a
      href={redirect}
      className={`w-full flex items-center justify-center h-10 ${backgroundColor} border border-gray-300 rounded-md shadow-sm hover:bg-gray-50`}
    >
      <Image src={icon} alt={`${social}'s logo`} width={18} height={18} />
      <span className='ml-2 text-[#333333] font-medium'>Continue with {social}</span>
    </a>
  );
}
type Social = "google" | "naver" | "kakao";

const socialBackgroundColor = {
  "google": "" 
};