'use client';
import dynamic from 'next/dynamic';
import RecentItem from '../elements/RecentItem';

const PencilIcon = dynamic(() => import('@/app/Icons/Pencil'), { ssr: false });
const SearchIcon = dynamic(() => import('@/app/Icons/Search'), { ssr: false });
const FileIcon = dynamic(() => import('@/app/Icons/File'), { ssr: false });
const FolderMainIcon = dynamic(() => import('@/app/Icons/FolderMain'), {
  ssr: false
});
const FolderItemIcon = dynamic(() => import('@/app/Icons/FolderItem'), {
  ssr: false
});
const AddFolderIcon = dynamic(() => import('@/app/Icons/AddFolder'), {
  ssr: false
});
const StartIcon = dynamic(() => import('@/app/Icons/Start'), { ssr: false });
const TrashIcon = dynamic(() => import('@/app/Icons/Trash'), { ssr: false });
const ArchiveIcon = dynamic(() => import('@/app/Icons/Archive'), {
  ssr: false
});

const Sidebar = () => {
  return (
    <div className=" w-full h-screen hidden md:block bg-customBg px-[20px] py-[30px]">
      <section className="header flex justify-between items-center">
        <h2 className=" italic text-[22px] flex gap-2  ">
          Whatsabted
          <PencilIcon />
        </h2>
        <SearchIcon />
      </section>

      <section className="addNoted w-full h-[40px] font-semibold rounded-[3px] bg-[#fff] bg-opacity-5 hover:bg-opacity-[2%] cursor-pointer flex items-center justify-center gap-3 text-[0.875rem] my-[40px]">
        <span className=" text-[1.5rem]">+</span>
        <span>New Note</span>
      </section>

      <section className="menu flex flex-col gap-[30px]">
        <div className="menu-recents">
          <h3 className=" text-[14px] opacity-[60%]">Recents</h3>
          <div className="content  flex flex-col gap-y-4 mt-3">
            <RecentItem
              title="Reflection on the Month of June"
              icon={FileIcon}
              colorText="#fff"
              opacity="100%"
            />
            <RecentItem
              title="Reflection on the Month of June"
              icon={FileIcon}
              colorText="#fff"
              opacity="100%"
            />
            <RecentItem
              title="Reflection on the Month of June"
              icon={FileIcon}
              colorText="#fff"
              opacity="100%"
            />
          </div>
        </div>
        <div className="menu-folders">
          <section className="menu-item-header flex items-center justify-between">
            <h3 className=" text-[14px] opacity-[60%]">Folders</h3>
            <AddFolderIcon />
          </section>
          <section className="content">
            <section className="contet-sub mt-3 flex flex-col gap-4">
              <RecentItem
                title="Personal"
                icon={FolderMainIcon}
                colorText="#fff"
                opacity="100%"
              />
              <RecentItem
                title="Work"
                icon={FolderItemIcon}
                colorText="#fff"
                opacity="60%"
              />
              <RecentItem
                title="Travel"
                icon={FolderItemIcon}
                colorText="#fff"
                opacity="60%"
              />
            </section>
          </section>
        </div>
        <div className="menu-more">
          <h3 className=" text-[14px] opacity-[60%]">More</h3>
          <div className="content  flex flex-col gap-y-4 mt-3">
            <RecentItem
              title="Favorites"
              icon={StartIcon}
              colorText="#fff"
              opacity="60%"
            />
            <RecentItem
              title="Trash"
              icon={TrashIcon}
              colorText="#fff"
              opacity="60%"
            />
            <RecentItem
              title="Archived Notes"
              icon={ArchiveIcon}
              colorText="#fff"
              opacity="60%"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
