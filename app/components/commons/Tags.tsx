interface TagsProps {
  color?: string;
  background?: string;
  title: string;
}

const Tags = ({ color, background, title }: TagsProps) => {
  return (
    <p
      className={`${background ? background : "bg-[green]"} ${
        color ? color : "text-white"
      } inline-block px-3 rounded-sm`}
    >
      {title}
    </p>
  );
};

export default Tags;
