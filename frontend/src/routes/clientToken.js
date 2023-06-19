import { Outlet } from "react-router-dom";
import { getClientToken } from "../services/storage/ClientStorage";
import { registerToken } from "../services/ClientService";
import { useEffect } from "react";

// Register client token
export function ClientToken({ isLoading, setIsLoading }) {
  useEffect(() => {
    const fetch = async () => {
      if (!getClientToken()) {
        await registerToken().then(() => {
          setIsLoading(false);
        });
      } else {
        setIsLoading(false);
      }
    };
    fetch();
  }, [setIsLoading, isLoading]);
  return !isLoading ? <Outlet /> : null;
}
