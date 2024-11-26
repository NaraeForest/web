import { createPreSignedURL, updateUserProfile, uploadPreSignedURL } from "@/actions";
import {
  Dialog,
  DialogPanel,
  Textarea,
} from "@headlessui/react";
import Image from "next/image";
import {
  Fragment,
  useEffect,
  useState,
} from "react";
import {
  SubmitHandler,
  useForm,
} from "react-hook-form";

type EditProfileForm = {
  profileImage: FileList,
  headerImage: FileList,
  bio: string,
  nickname: string,
};
type EditProfileProps = {
  profileImage: string,
  headerImage: string,
  nickname: string,
  bio: string,
  onComplete: () => void;
};
export function EditProfile(props: EditProfileProps) {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => {
    setIsOpen(true);
  };
  const close = () => {
    setIsOpen(false);
  };
  const [profileImageURL, setProfileImageURL] = useState(props.profileImage);
  const [headerImageURL, setHeaderImageURL] = useState(props.headerImage);

  const { register, watch, handleSubmit, reset } = useForm<EditProfileForm>({
    defaultValues: {
      nickname: props.nickname,
      bio: props.bio,
    },
  });
  const onSubmit: SubmitHandler<EditProfileForm> = async (formdata) => {
    let profileImageFileURL: string | undefined;
    if (formdata.profileImage != null && formdata.profileImage.length === 1) {
      const file = formdata.profileImage.item(0) as File;
      const { data: { key, url: presignedURL } } = await createPreSignedURL(file.name.split(".").pop() || "blob");
      await uploadPreSignedURL(presignedURL, file);
      profileImageFileURL = key;
    }
    let headerImageFileURL: string | undefined;
    if (formdata.headerImage != null && formdata.headerImage.length === 1) {
      const file = formdata.headerImage.item(0) as File;
      const { data: { key, url: presignedURL } } = await createPreSignedURL(file.name.split(".").pop() || "blob");
      await uploadPreSignedURL(presignedURL, file);
      headerImageFileURL = key;
    }
    const { success } = await updateUserProfile(formdata.nickname, formdata.bio, profileImageFileURL, headerImageFileURL);
    if (success) {
      setIsOpen(false);
      props.onComplete();
    }
  };
  const profileImage = watch("profileImage");
  useEffect(() => {
    if (profileImage != null && profileImage.length === 1) {
      const file = profileImage?.item(0);
      if (file != null) {
        setProfileImageURL(URL.createObjectURL(file));
      }
    }
    return () => {
      URL.revokeObjectURL(profileImageURL);
    };
  }, [profileImage]);
  const headerImage = watch("headerImage");
  useEffect(() => {
    if (headerImage != null && headerImage.length === 1) {
      const file = headerImage?.item(0);
      if (file != null) {
        setHeaderImageURL(URL.createObjectURL(file));
      }
    }
    return () => {
      URL.revokeObjectURL(headerImageURL);
    };
  }, [headerImage]);
  return (
    <Fragment>
      <button
        onClick={open}
        className="absolute top-36 right-5 text-[#333333] text-sm leading-4 px-3 py-2 border rounded-full"
      >
        Edit Profile
      </button>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <div
          className="bg-gray-300 blur w-screen h-screen fixed inset-0 opacity-80"
        />
        <div
          className="fixed inset-0 flex w-screen items-center justify-center p-4"
        >
          <DialogPanel
            className="max-w-lg space-y-4 border bg-white p-4 rounded-xl"
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col"
            >
              <label
                className="w-full h-32 border-b"
              >
                <Image
                  alt="profile background image"
                  src={headerImageURL}
                  width={window.innerWidth}
                  height={128}
                  className="max-h-32"
                />
                <input
                  className="hidden"
                  type="file"
                  {...register("headerImage")}
                />
              </label>
              <div
                className="relative h-12"
              >
                <label
                  className="rounded-full absolute left-5 top-0 -translate-y-1/2 border z-10"
                >
                  <Image
                    className="rounded-full"
                    alt="profile image"
                    src={profileImageURL}
                    width={96}
                    height={96}
                  />
                  <input
                    className="hidden"
                    type="file"
                    {...register("profileImage")}
                  />
                </label>
              </div>
              <label htmlFor="nickname">
                nickname
              </label>
              <input
                id="nickname"
                {...register("nickname", { required: true })}
              />
              <label htmlFor="bio">
                bio
              </label>
              <Textarea
                id="bio"
                {...register("bio")}
                name="bio"
              />
              <input type="submit" value={"save"} />
            </form>
          </DialogPanel>
        </div>
      </Dialog>
    </Fragment>
  );
}
