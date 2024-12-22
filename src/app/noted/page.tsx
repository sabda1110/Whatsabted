'use client';
import dynamic from 'next/dynamic';
import CalenderIcon from '../Icons/Calender';
import FolderItem from '../Icons/FolderItem';
import { ForwardRefEditor } from '../components/hooks/ForwardRefEditor';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { updateNoted as updateNotedAction } from '../model/slices/noted';
import ModalFolder from '../components/fragments/ModalFolder';
import { TextField, Button } from '@mui/material';
import { ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#A0AAB4'
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#6F7E8C'
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#D1D1D1',
      borderRadius: '8px'
    },
    '&:hover fieldset': {
      borderColor: '#D1D1D1'
    },
    '&.Mui-focused fieldset': {
      borderColor: '#D1D1D1'
    }
  }
});

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: '#F5F5F5',
  border: 'none',
  backgroundColor: '#4F4F4F',
  paddingTop: '13.5px',
  paddingBottom: '13.5px',
  fontSize: '14px',
  borderRadius: '8px',
  // fontWeight: '600',
  marginTop: '1rem',
  '&:hover': {
    backgroundColor: '#333333'
  },
  '&[disabled]': {
    backgroundColor: grey[400],
    cursor: 'not-allowed'
  }
}));

const FormatDate = (): string => {
  const date = new Date();
  const hari = date.getDate();
  const bulan = date.getMonth() + 1;
  const tahun = date.getFullYear();
  return `${hari}/${bulan}/${tahun}`;
};

const NotedPage = () => {
  const [notedState, setNotedState] = useState<NotedItem>({
    id: 'Sabda123',
    title: 'Bisa apa saja',
    createDate: FormatDate(),
    folder: 'Personal',
    updateDate: '',
    desc: 'Tulisakan Sesuatu',
    idUser: ''
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const noteds = useSelector((state: any) => state.noted.notes);
  console.log(noteds, 'noteds');

  const updateNoted = () => {
    dispatch(updateNotedAction(notedState));
  };
  return (
    <div className="grid grid-cols-custom-3 h-screen">
      <section className=" px-[20px] py-[30px] bg-[#1C1C1C]">
        <h2 className=" text-[20px] font-semibold mb-[30px]">Personal</h2>
        <div className="content flex flex-col gap-y-4">
          <section className="content-item cursor-pointer p-[20px] bg-white bg-opacity-[3%] rounded-[3px]">
            <p className="title font-semibold mb-[10px] text-[16px]">
              My Goals for the Next Year
            </p>
            <div className="desc flex items-center gap-x-3 text-ellipsis text-[16px]">
              <span className=" opacity-[40%]">31/12/2024</span>
              <span className="truncate opacity-[60%]">
                As the year comes to a ...
              </span>
            </div>
          </section>
          <section className="content-item cursor-pointer p-[20px] bg-white bg-opacity-[3%] rounded-[3px]">
            <p className="title font-semibold mb-[10px] text-[16px]">
              My Goals for the Next Year
            </p>
            <div className="desc flex items-center gap-x-3 text-ellipsis text-[16px]">
              <span className=" opacity-[40%]">31/12/2024</span>
              <span className="truncate opacity-[60%]">
                As the year comes to a ...
              </span>
            </div>
          </section>
        </div>
      </section>
      <section className=" px-[50px] pt-[50px]">
        <input
          placeholder="Masukan judul"
          className=" w-full h-[50px] text-3xl font-semibold bg-transparent outline-none"
          value={notedState.title}
          onChange={(e) =>
            setNotedState({ ...notedState, title: e.target.value })
          }
        />
        {/* <h2 className=" text-3xl font-semibold">{notedState.title}</h2> */}
        <div className="header-title my-[30px]">
          <section className="grid grid-cols-custom-1 items-center  py-[15px] border-b border-white border-opacity-[10%]">
            <div className="flex items-center gap-x-5">
              <CalenderIcon />
              <span className=" font-semibold opacity-[60%] text-[14px]">
                Create Date
              </span>
            </div>
            <span className=" underline text-[14px]">
              {notedState.createDate}
            </span>
          </section>
          <section className="grid grid-cols-custom-1 items-center  py-[15px] border-b border-white border-opacity-[10%]">
            <div className="flex items-center gap-x-5">
              <CalenderIcon />
              <span className=" font-semibold opacity-[60%] text-[14px]">
                Update Date
              </span>
            </div>
            <span className=" underline text-[14px]">
              {notedState.createDate}
            </span>
          </section>
          <section className="grid grid-cols-custom-1 items-center  py-[15px] border-b border-white border-opacity-[10%]">
            <div className="flex items-center gap-x-5">
              <FolderItem />
              <span className=" font-semibold opacity-[60%] text-[14px]">
                Folder
              </span>
            </div>
            <span className=" underline text-[14px]">{notedState.folder}</span>
          </section>
        </div>
        <div className="editor h-[50%] ">
          {/* <EditorComponent /> */}
          <ForwardRefEditor markdown={notedState.desc} />
        </div>
        <button onClick={() => setIsModalOpen(true)}>Simpan</button>
      </section>
      <ModalFolder
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={updateNoted}
      >
        <h2 className=" font-semibold text-[20px] text-[#54595E]">
          Subscribe to our Newsletter
        </h2>
        <p className=" mt-[8px] text-[14px] text-[#54595E]/60 ">
          Join thousands getting emails in their inbox.
        </p>
        <CssTextField
          id="outlined-basic"
          label="Folders"
          variant="outlined"
          placeholder="Masukan judul"
          sx={{
            // marginTop: '10px',
            outlineColor: '#fff',
            borderColor: '#fff !important'
          }}
          fullWidth
          margin="normal"
          // size="small"
          // className=" mt-3 w-56"
        />
        <ColorButton variant="outlined" fullWidth>
          Yeah, Create Folder
        </ColorButton>
      </ModalFolder>
    </div>
  );
};

export default NotedPage;
