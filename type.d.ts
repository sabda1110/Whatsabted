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

interface NotedState {
  notes: NotedItem[];
  isLoading: boolean;
}

interface ModalFolderProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  children: React.ReactNode;
}
