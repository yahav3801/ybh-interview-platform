import Agent from "@/components/Agent";
import { getCurrentUser } from "@/lib/actions/auth.actions";
import React from "react";

const Page = async () => {
  const user = await getCurrentUser();
  return (
    <>
      <h3>interview generation</h3>
      <Agent userName={user?.name || ""} userId={user?.id} type="generate" />
    </>
  );
};

export default Page;
