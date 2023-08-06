import { useState } from 'react'
import './App.css'
import { Modal } from '../../Components/Modal'
import { Success } from '../../Components/Success'



const App = () => {

  const [email,setEmail] = useState('')
  const [state,setState] = useState({success:false, error:false})

  const handleSubmit = (e) =>{
    e.preventDefault()
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/
    if(!emailPattern.test(email)){
      console.log(email, 'is not email')
      setState({...state,error:true})
    }else{
      console.log('correct')
      onSuccess()
    }
  }
  const onSuccess = () =>{
    setState({...state, success:!state.success})
  } 
  return (
    <>
    <section className='w-full sm:bg-[#46435b] sm:h-[100vh] flex  items-center justify-center'>
      <div className='sm:bg-white sm:rounded-3xl w-full sm:w-[700px] sm:h-[550px] flex smMax:flex-col sm:flex-row-reverse items-center  justify-center smMax:pb-16'>
        <div className='header-ilustration sm:w-[40%] smMax:w-full h-[25rem] sm:h-[470px] sm:rounded-3xl img'></div>
        <div className='smMax:w-[90%] sm:w-[55%] text-[1.6rem] flex flex-col justify-start gap-7 gray'>
          <h1 className='pt-10  roboto_bold text-[3.5rem] font-extrabold '>Stay Update!</h1>
          <p>Join 60,000+ product managers receiving monthly update on:</p>
          <ol className='flex flex-col gap-5 sm:w-[98%]'>
            <li className='flex'><span className="icon_list"></span><p>Product discovery and building what matters</p></li>
            <li className='flex'><span className="icon_list"></span><p>Measuring to ensure updates are a success</p></li>
            <li className='flex'><span className="icon_list"></span><p>And much more!</p></li>
          </ol>
          <form onSubmit={handleSubmit} className='w-[90%] sm:w-[340px] flex flex-col gap-10'>
            <label htmlFor="email_feedback" className='flex flex-col gap-1 relative'>
              <div className='flex justify-between w-[88vw] sm:w-auto'>
                <span className='roboto_bold text-[1.4rem]'>Email adress</span>
                {state.error && <span className=' roboto_bold text-[1.4rem]'>Valid email required</span>}
              </div>
              <input type="text" className={`${state.error && 'border-[1px] border-[#ff6257] bg-[#ff625735] text-[#ff6257] focus:outline-[#fb3325]'} p-5 border-[#c7c7c7] border-[.1rem] rounded-xl w-[90vw] sm:w-full` } placeholder='email@company.com' value={email} onChange={e=>{
                setState({...state,error:false})
                setEmail(e.target.value)
              }}/>
            </label>
            <button className='btnActive bg-[#121835] py-7  font-semibold text-white w-[90vw] sm:w-full  rounded-xl'>Subscribe to monthly newsletter</button>
          </form>
        </div>
      </div>

    </section>
    {state.success && <Modal><Success email={email} setEmail={setEmail} btn={onSuccess}/></Modal>}
    </>
  )
}
export {App}
