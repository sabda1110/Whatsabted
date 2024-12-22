interface RecentItemProps {
  title: string;
  icon: React.ElementType;
  colorText: string;
  opacity: string;
}

interface NotedItem {
  id: string;
  title: string;
  createDate: string;
  updateDate: string;
  desc: string;
  folder: string;
  idUser: string;
}

interface FolderItem {
  id: string;
  title: string;
  createDate: string;
}

interface NotedState {
  notes: NotedItem[];
  folders: FolderItem[];
  isOpenModalFolder: boolean;
  isLoading: boolean;
}

interface ModalFolderProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  children: React.ReactNode;
}

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  onClick?: () => void;
  className?: string;
}
