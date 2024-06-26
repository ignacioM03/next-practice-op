import { Notification } from "@/components/Notification/Notification";
import { AlterColor } from "@/types/AlterColor";
import { createContext, useContext, useState } from "react";

type ContextProps = {
  getError: (msg: string) => void;
  getSuccess: (msg: string) => void;
};

type Props = {
  children: React.ReactNode;
};

const NotificationContext = createContext<ContextProps | null>(null);

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      "useNotification must be used within a NotificationProvider"
    );
  }
  return context;
};

export const NotificationProvider = ({ children }: Props) => {
  const [msg, setMsg] = useState("");
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState<AlterColor | undefined>(undefined);

  const handleClose = () => {
    setOpen(false);
  };

  const getError = (msg: string) => {
    setOpen(true);
    setSeverity("error");
    setMsg(msg);
  };

  const getSuccess = (msg: string) => {
    setOpen(true);
    setSeverity("success");
    setMsg(msg);
  };

  const values = {
    getError,
    getSuccess,
  };

  return (
    <NotificationContext.Provider value={values}>
      <Notification
        open={open}
        msg={msg}
        severity={severity}
        handleClose={handleClose}
      />
      {children}
    </NotificationContext.Provider>
  );
};
