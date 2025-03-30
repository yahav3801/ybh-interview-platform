"use client";

import { Button } from "@/components/ui/button";
import { auth } from "@/firebase/client";
import { signOut as firebaseSignOut } from "firebase/auth";
import { toast } from "sonner";
import { signOut } from "@/lib/actions/auth.actions";

export default function SignOutButton() {
  const handleSignOut = async () => {
    try {
      await firebaseSignOut(auth);

      const result = await signOut();

      if (result.success) {
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }
      window.location.href = "/sign-in";
    } catch (error) {
      console.error("Error signing out:", error);
      toast.error("Failed to sign out");
    }
  };

  return <Button onClick={handleSignOut}>Sign Out</Button>;
}
