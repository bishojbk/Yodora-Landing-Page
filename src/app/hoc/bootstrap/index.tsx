import { useEffect, useState, FC, PropsWithChildren } from "react";

export const isClient = (): boolean => {
  return (
    typeof window !== "undefined" &&
    typeof localStorage !== "undefined" &&
    typeof document !== "undefined"
  );
};

const Bootstrap: FC<PropsWithChildren<{}>> = (props) => {
  const { children } = props;
  const [booted, setBooted] = useState<boolean>(false);

  useEffect(() => {
    if (isClient()) {
      setBooted(true);
    }
  }, []);

  return <>{booted ? children : null}</>;
};

export default Bootstrap;
