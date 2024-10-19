interface Props {
  text: string;
}

export const Button = (p: Props) => {
  return <button className="font-medium bg-primary py-[11.5px] px-[38px] rounded-xl">{p.text}</button>;
};
