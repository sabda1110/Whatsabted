const RecentItem: React.FC<RecentItemProps> = (props) => {
  return (
    <div className="flex items-center gap-4 w-full text-ellipsis cursor-pointer">
      <props.icon />
      <span
        className={` text-[1rem] truncate text-[${props.colorText}] opacity-[${props.opacity}]`}
      >
        {props.title}
      </span>
    </div>
  );
};

export default RecentItem;
