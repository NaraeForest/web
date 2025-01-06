"use client";

import {
  Dispatch,
  Fragment,
  PropsWithChildren,
  ReactElement,
  SetStateAction,
  useCallback,
} from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
} from "@headlessui/react";
import {
  XMarkIcon,
} from "./icons";

type BaseDialogProps = {
  clickElement: ReactElement,
  className?: string
  title: string
  state: boolean,
  dispatch: Dispatch<SetStateAction<boolean>>,
}
export function BaseDialog({ clickElement, className, title, state, dispatch, children }: PropsWithChildren<BaseDialogProps>) {
  const onOpen = useCallback(() => {
    dispatch(true);
  }, []);
  const onClose = useCallback(() => {
    dispatch(false);
  }, []);
  return (
    <Fragment>
      <button
        type="button"
        onClick={onOpen}
        className={className}
      >
        {clickElement}
      </button>
      <Dialog
        open={state}
        onClose={onClose}
        className="relative z-50"
      >
        <DialogBackdrop
          className="fixed inset-0 bg-black/40"
        />
        <div
          className="fixed inset-0 flex w-screen items-center justify-center px-5"
        >
          <DialogPanel
            className="max-w-lg min-w-64 w-full space-y-4 bg-white rounded-lg p-4"
          >
            <div
              className="flex justify-between items-center"
            >
              <p
                className="text-2xl"
              >
                {title}
              </p>
              <button
                type="button"
                onClick={onClose}
                className=""
              >
                <XMarkIcon />
              </button>
            </div>
            {children}
          </DialogPanel>
        </div>
      </Dialog>
    </Fragment>
  );
}
