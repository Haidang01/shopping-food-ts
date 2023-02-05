import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  title: string;
};

const Helmet = ({ children, title }: Props) => {
  document.title = title;
  return <div className="w-100">{children}</div>;
};

export default Helmet;
