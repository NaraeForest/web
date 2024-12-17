import Image from "next/image";
import {
  SubmitHandler,
  useForm,
} from "react-hook-form";
import {
  MouseEvent,
  useEffect,
  useState,
} from "react";
import {
  createChildFeed,
  createGoalFeed,
  createPreSignedURL,
  uploadPreSignedURL,
} from "@/actions";

type AddGoalFeedForm = {
  content: string,
  images?: FileList,
};
type AddGoalFeedProps = {
  subGoalId: number,
  parentId?: number,
  onComplete: (feedId: number) => void,
};
export function AddGoalFeed({ parentId, subGoalId, onComplete }: AddGoalFeedProps) {
  const [imageULRs, setImageURLs] = useState<string[]>([]);
  const { register, handleSubmit, watch, reset } = useForm<AddGoalFeedForm>();
  const images = watch("images");
  useEffect(() => {
    imageULRs.forEach((url) => {
      URL.revokeObjectURL(url);
    });
    if (images == null) {
      return;
    }
    const urls: string[] = [];
    for (let i = 0; i < images.length; i++) {
      const file = images.item(i);
      if (file == null) {
        break;
      }
      urls.push(URL.createObjectURL(file));
    }
    setImageURLs([...urls]);
  }, [images]);
  const onSubmit: SubmitHandler<AddGoalFeedForm> = async (formdata) => {
    let fileUrl: string | undefined = undefined;
    const file = formdata.images?.item(0);
    if (file != null) {
      const { data: { key, url: presignedURL } } = await createPreSignedURL(file.name.split(".").pop() || "blob");
      await uploadPreSignedURL(presignedURL, file);
      fileUrl = key
    }
    if (parentId != null) {
      const { data, success } = await createChildFeed(parentId, subGoalId, formdata.content, fileUrl);
      if (success) {
        onComplete(data.id);
        reset();
      }
      return;
    }
    const { data, success } = await createGoalFeed(subGoalId, formdata.content, fileUrl);
    if (success) {
      onComplete(data.id);
    }
  };
  const onRemoveImage = (url: string) => (e: MouseEvent<HTMLButtonElement>) => {
    const idx = imageULRs.findIndex((val) => val === url);
    URL.revokeObjectURL(imageULRs[idx]);
    imageULRs.splice(idx, 1)
    setImageURLs([...imageULRs]);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
    >
      {imageULRs.length > 0 && <div className="flex">
        {imageULRs.map((url) => (
          <div
            className="mt-4 aspect-square max-w-24 max-h-24 relative rounded-lg"
            key={url}
          >
            <button
              type="button"
              className="absolute right-0 translate-x-1/2 top-0 -translate-y-1/2"
              onClick={onRemoveImage(url)}
            >
              <Image
                src="/x-circle.svg"
                width={24}
                height={24}
                alt="remove image"
              />
            </button>
            <img
              src={url}
              className="rounded-lg"
            />
          </div>
        ))}
      </div>}
      <div className="pt-4 pb-1">
        <textarea
          {...register("content", { required: true })}
          className="h-32 w-full p-3 rounded border border-[#E5E7EB]"
          placeholder="What's happening in your goals"
        />
      </div>
      <div className="flex justify-between items-center">
        <label>
          <Image
            src={"/photo.svg"}
            width={16}
            height={16}
            alt="add task"
          />
          <input
            className="hidden"
            type="file"
            {...register("images")}
          />
        </label>
        <button
          type="submit"
          className="bg-[#333] text-xs rounded-lg px-4 py-2 text-white font-semibold"
        >
          Send
        </button>
      </div>
    </form>
  );
}
