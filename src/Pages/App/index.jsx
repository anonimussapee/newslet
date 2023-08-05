import './App.css'


const App = () => {

  return (
    <section className='w-full h-auto flex flex-col items-center pb-20'>
      <div className='header-ilustration w-full h-[25rem] img'></div>
      <div className='w-[90%] text-[1.6rem] flex flex-col gap-7 gray'>
        <h1 className='pt-5  roboto_bold text-[3.5rem] font-extrabold '>Stay Update!</h1>
        <p>Join 60,000+ product managers receiving monthly update on:</p>
        <ol className='flex flex-col gap-5 '>
          <li className='flex'><span className="icon_list"></span><p>Product discovery and building what matters</p></li>
          <li className='flex'><span className="icon_list"></span><p>Measuring to ensure updates are a success</p></li>
          <li className='flex'><span className="icon_list"></span><p>And much more!</p></li>
        </ol>
        <form onSubmit={''} className='w-[90%] flex flex-col gap-10'>
          <label htmlFor="email_feedback" className='flex flex-col gap-3'>
            <span>Email adress</span>
            <input type="text" className='p-5 border-[#c7c7c7] border-[.1rem] rounded-xl w-[90vw] ' placeholder='email@company.com'/>
          </label>
          <button className='bg-[#121835] py-7  font-semibold text-white w-[90vw] rounded-xl'>Subscribe to monthly newsletter</button>
        </form>
      </div>
    </section>
  )
}

export {App}
