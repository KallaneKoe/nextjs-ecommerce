"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("26f9e939-6298-40d0-8c07-13ab20110f3b");
  });

  return null;
};

export default CrispChat;
