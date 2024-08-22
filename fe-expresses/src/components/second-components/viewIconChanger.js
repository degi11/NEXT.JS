import { Viewed, ViewHide } from "../View";

export const ViewIconChanger = ({ select }) => {
  return <div>{select ? <Viewed /> : <ViewHide />}</div>;
};
