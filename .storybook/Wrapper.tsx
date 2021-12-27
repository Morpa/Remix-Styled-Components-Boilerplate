import { globalStyles } from "../app/styles/stitches.config";

export const Wrapper = ({ children }) => {
  globalStyles();
  return (
    <>
      {children}
    </>
  );
};
