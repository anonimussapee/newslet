import successIcon from '../../assets/icon-success.svg'

const Success = (props) => {
  return (
    <div className='w-[90%] h-[80vh] flex flex-col sm:bg-white sm:w-[450px] sm:h-[450px] justify-between sm:justify-center sm:items-center gap-20 sm:p-10 sm:rounded-3xl sm:gap-14  '>
      <div className='flex flex-col gap-10  text-[1.6rem] gray sm:w-[90%]'>
        <img src={successIcon} className='w-[7rem]' alt="icon success." />
        <h1 className='pt-5  roboto_bold text-[3.5rem] sm:text-[5rem] font-extrabold '>Thanks for subscribing!</h1>
        <p className='sm:w-[90%]'>A confirmation email has been sent to <strong>{props.email}.</strong> Please open click the button inside to confirm your subscription</p>
      </div>
       <button className='btnActive bg-[#121835]  py-7 text-[1.6rem] font-semibold text-white w-[90vw] sm:w-[90%] rounded-xl' onClick={()=>{
        props.btn()
        props.setEmail('')
        }}>Dismiss message</button>
    </div>
  )
}

export {Success}