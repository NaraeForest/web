"use client";

import {
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";

type BigProgressBarProps = {
  progress: number,
};
export function BigProgressBar({ progress }: BigProgressBarProps) {
  const [currentProgress, setProgress] = useState<number>(0);
  const rafRef: MutableRefObject<number | undefined> = useRef<number>();
  const animation = () => {
    setProgress((prev) => {
      const nextValue = prev + (progress - prev) * 0.1;
      if (Math.abs(nextValue - progress) < 0.5) {
        cancelAnimationFrame(rafRef.current!);
        return progress;
      }
      return nextValue;
    });
    rafRef.current = requestAnimationFrame(animation);
  };
  useEffect(() => {
    if (rafRef.current != null) {
      cancelAnimationFrame(rafRef.current);
    }
    rafRef.current = requestAnimationFrame(animation);
    return () => {
      if (rafRef.current != null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [progress]);
  return (
    <div
      className="rounded-full w-full h-5 bg-[#F4F4F5]"
    >
      <div
        className="rounded-full h-5 bg-[#333333]"
        style={{ width: `${currentProgress}%` }}
      />
    </div>
  );
}

type SmallProgressBarProps = {
  progress: number,
};
export function SmallProgressBar({ progress }: SmallProgressBarProps) {
  const [currentProgress, setProgress] = useState<number>(0);
  const rafRef: MutableRefObject<number | undefined> = useRef<number>();
  const animation = () => {
    setProgress((prev) => {
      const nextValue = prev + (progress - prev) * 0.1;
      if (Math.abs(nextValue - progress) < 0.5) {
        cancelAnimationFrame(rafRef.current!);
        return progress;
      }
      return nextValue;
    });
    rafRef.current = requestAnimationFrame(animation);
  };
  useEffect(() => {
    if (rafRef.current != null) {
      cancelAnimationFrame(rafRef.current);
    }
    rafRef.current = requestAnimationFrame(animation);
    return () => {
      if (rafRef.current != null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [progress]);
  return (
    <div
      className="rounded-full w-full h-3 bg-[#F4F4F5]"
    >
      <div
        className="rounded-full h-3 bg-[#333333]"
        style={{ width: `${currentProgress}%` }}
      />
    </div>
  );
}
