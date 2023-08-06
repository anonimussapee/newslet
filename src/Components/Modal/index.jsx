import { createPortal } from 'react-dom';

const Modal = ({children})=>{

  return createPortal(
    <div className='fixed bg-white sm:bg-[#46435b] top-0 right-0 left-0 bottom-0 flex flex-col items-center justify-center'>
      {children}
    </div>,document.getElementById('modal')
  )
}
export {Modal}