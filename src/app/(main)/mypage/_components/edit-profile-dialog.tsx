"use client";

import Image from "next/image";
import {
  Fragment,
  useEffect,
  useState,
} from "react";
import {
  useRouter,
} from "next/navigation";
import {
  SubmitHandler,
  useForm,
} from "react-hook-form";
import {
  Field,
  Input,
  Label,
} from "@headlessui/react";
import {
  BaseDialog,
} from "@/components";
import {
  createPreSignedURL,
  updateMyProfile,
  uploadPreSignedURL,
} from "@/actions";

type EditProfileDialogForm = {
  nickname: string,
  bio: string,
  profileImage: FileList,
  headerImage: FileList,
};
type EditProfileDialogProps = {
  nickname: string,
  bio: string,
  profileImage: string,
  headerImage: string,
};
export function EditProfileDialog(props: EditProfileDialogProps) {
  const router = useRouter();
  const [profileImageURL, setProfileImageURL] = useState<string>(props.profileImage);
  const [headerImageURL, setHeaderImageURL] = useState<string>(props.headerImage);
  const [isOpen, setOpen] = useState<boolean>(false);
  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm<EditProfileDialogForm>({ defaultValues: { nickname: props.nickname, bio: props.bio } });
  const onSubmit: SubmitHandler<EditProfileDialogForm> = async (data) => {
    let profileImageFileURL: string | undefined;
    if (data.profileImage != null && data.profileImage.length === 1) {
      const file = data.profileImage.item(0) as File;
      const { key, url: presignedURL } = await createPreSignedURL(file.name.split(".").pop() || "blob");
      await uploadPreSignedURL(presignedURL, file);
      profileImageFileURL = key;
    }
    let headerImageFileURL: string | undefined;
    if (data.headerImage != null && data.headerImage.length === 1) {
      const file = data.headerImage.item(0) as File;
      const { key, url: presignedURL } = await createPreSignedURL(file.name.split(".").pop() || "blob");
      await uploadPreSignedURL(presignedURL, file);
      headerImageFileURL = key;
    }
    await updateMyProfile(data.nickname, data.bio, profileImageFileURL, headerImageFileURL);
    setOpen(false);
    reset();
    router.refresh();
  };
  const profileImage = watch("profileImage");
  useEffect(() => {
    if (profileImage == null) {
      return;
    }
    const files: File[] = [];
    for (let i = 0; i < profileImage.length; i++) {
      const item = profileImage.item(i);
      if (item != null) {
        files.push(item);
      }
    }
    if (files.length === 1) {
      setProfileImageURL(URL.createObjectURL(files[0]));
    }
    return () => {
      URL.revokeObjectURL(profileImageURL);
    };
  }, [profileImage]);
  const headerImage = watch("headerImage");
  useEffect(() => {
    if (headerImage == null) {
      return;
    }
    const files: File[] = [];
    for (let i = 0; i < headerImage.length; i++) {
      const item = headerImage.item(i);
      if (item != null) {
        files.push(item);
      }
    }
    if (files.length === 1) {
      setHeaderImageURL(URL.createObjectURL(files[0]));
    }
    return () => {
      URL.revokeObjectURL(profileImageURL);
    };
  }, [headerImage]);
  return (
    <BaseDialog
      state={isOpen}
      title="EditProfile"
      dispatch={setOpen}
      className="self-end border border-solid border-[#E5E7EB] rounded-full text-sm px-3 py-2 mt-2"
      clickElement={<Fragment>Edit Profile</Fragment>}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
      >
        <div
          className="relative mb-11"
        >
          <label
            className="w-full h-32"
          >
            <Image
              alt="user's header image"
              width={0}
              height={0}
              src={headerImageURL}
              className="w-full h-32"
            />
            <input
              className="hidden"
              type="file"
              {...register("headerImage")}
            />
          </label>
          <label>
            <Image
              alt="user's profile image"
              width={0}
              height={0}
              src={profileImageURL}
              className="absolute bottom-0 translate-y-1/2 left-7 w-20 h-20 rounded-full border-2 border-solid border-[#E5E7EB]"
            />
            <input
              className="hidden"
              type="file"
              {...register("profileImage")}
            />
          </label>
        </div>
        <Field
          className="mb-2"
        >
          <Label
            className="text-sm font-medium"
          >
            Nickname
          </Label>
          <Input
            className="block max-w-full w-full border border-[#E5E7EB] border-solid rounded-lg py-1 px-3"
            placeholder="enter nickname"
            type="text"
            {...register("nickname", { required: "Please enter nickname." })}
          />
          {errors.nickname && <p
            className="text-red-600 text-[0.625rem]"
          >
            {errors.nickname.message}
          </p>}
        </Field>
        <Field
          className="mb-2"
        >
          <Label
            className="text-sm font-medium"
          >
            bio
          </Label>
          <Input
            className="block max-w-full w-full border border-[#E5E7EB] border-solid rounded-lg py-1 px-3"
            placeholder="enter bio"
            type="text"
            {...register("bio", { required: "Please enter bio." })}
          />
          {errors.bio && <p
            className="text-red-600 text-[0.625rem]"
          >
            {errors.bio.message}
          </p>}
        </Field>
        <Input
          type="submit"
          value={"save"}
          className="w-full h-9 rounded-lg bg-[#333333] text-white font-semibold"
        />
      </form>
    </BaseDialog>
  );
}
