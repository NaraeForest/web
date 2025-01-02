"use client";

import Image from "next/image";
import {
  MouseEvent,
  useEffect,
  useState,
} from "react";
import {
  useRouter,
} from "next/navigation";
import {
  Textarea,
} from "@headlessui/react";
import {
  SubmitHandler,
  useForm,
} from "react-hook-form";
import {
  createChildFeed,
  createGoalFeed,
  createPreSignedURL,
  uploadPreSignedURL,
} from "@/actions";

type FeedFormData = {
  images: FileList,
  content: string,
}
type FeedFormProps = {
  subGoalId: number,
  parentFeedId?: number,
};
export function FeedForm({ subGoalId, parentFeedId }: FeedFormProps) {
  const router = useRouter();
  const [imageURLs, setImageURLs] = useState<string[]>([]);
  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm<FeedFormData>();
  const images = watch("images");
  useEffect(() => {
    if (images == null) {
      return;
    }
    imageURLs.forEach((url) => {
      URL.revokeObjectURL(url);
    });
    const urls: string[] = [];
    for (let i = 0; i < images.length; i++) {
      const image = images.item(i);
      if (image == null) {
        break;
      }
      urls.push(URL.createObjectURL(image));
    }
    setImageURLs([...urls]);
  }, [images]);
  const onRemoveImage = (url: string) => (e: MouseEvent<HTMLButtonElement>) => {
    const idx = imageURLs.findIndex((val) => val === url);
    URL.revokeObjectURL(imageURLs[idx]);
    imageURLs.splice(idx, 1)
    setImageURLs([...imageURLs]);
  };
  const onSubmit: SubmitHandler<FeedFormData> = async (data) => {
    const files: File[] = [];
    for (let i = 0; i < data.images.length; i++) {
      const item = data.images.item(i);
      if (item != null) {
        files.push(item);
      }
    }
    const uploads = await Promise.all(files.map(async (file) => {
      const { key, url: presignedURL } = await createPreSignedURL(file.name.split(".").pop() || "blob");
      await uploadPreSignedURL(presignedURL, file);
      return key;
    }));

    const feed = parentFeedId != null
      ? await createChildFeed(parentFeedId, subGoalId, data.content)
      : await createGoalFeed(subGoalId, data.content);
    router.push(`/feeds/${feed.id}`);
    reset();
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
    >
      <Textarea
        className="border border-solid border-[#E5E7EB] rounded-lg w-full h-auto min-h-32 p-3"
        placeholder="What's happening in your goals?"
        {...register("content", { required: true })}
      />
      <div
        className="w-full flex justify-start items-center overflow-x-scroll"
      >
        {imageURLs.map((imageURL, i) => (
          <div
            key={i}
            className="relative pt-2 pr-2"
          >
            <button
              type="button"
              className="absolute top-0 right-0 bg-[#333333] rounded-full p-1"
              onClick={onRemoveImage(imageURL)}
            >
              <Image
                alt="white x marker"
                width={0}
                height={0}
                className="w-3 h-3"
                src={"/white-x-mark.svg"}
              />
            </button>
            <img
              className="rounded-lg h-32 aspect-square "
              src={imageURL}
            />
          </div>
        ))}
      </div>
      <div
        className="flex justify-between items-center"
      >
        <label>
          <Image
            alt="galary"
            width={0}
            height={0}
            src="/photo.svg"
            className="w-6 h-6"
          />
          <input
            className="hidden"
            type="file"
            accept="image/*"
            {...register("images")}
          />
        </label>
        <input
          type="submit"
          value="send"
          className="rounded-lg bg-[#333333] text-white font-semibold px-4 py-2"
        />
      </div>
    </form>
  );
}
