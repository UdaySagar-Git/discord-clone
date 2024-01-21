"use client";

import { CreateServerModal } from "@/modals/create-server-modal";
import { EditServerModal } from "@/modals/edit-server-modal";
import { InviteModal } from "@/modals/invite-modal";
import { MembersModal } from "@/modals/members-modal";
import { useEffect, useState } from "react";


export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <CreateServerModal />
      <InviteModal/>
      <EditServerModal/>
      <MembersModal/>
    </>
  )
}