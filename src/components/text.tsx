import { PropsWithChildren } from "react";



type PlaneTextProps = {
    text: string;
}
export function PlaneText({ text, children }: PropsWithChildren<PlaneTextProps>) {
    return (
        <div>
            <p>{text}</p>
            {children}

        </div>
    );
}
