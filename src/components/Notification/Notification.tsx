import { AlterColor } from "@/types/AlterColor";
import React from "react";
import { Alert } from "../Alert/Alert";

type NotificationProps = {
  open: boolean;
  msg: string;
  severity: AlterColor | undefined;
  handleClose: () => void;
};

export const Notification = ({
  open,
  msg,
  severity,
  handleClose,
}: NotificationProps) => {
  setTimeout(() => {
    handleClose();
  }, 3000);
  return (
    <>{open && <Alert severity={severity} msg={msg} onClose={handleClose} />}</>
  );
};
