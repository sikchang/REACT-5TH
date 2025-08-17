function ProfileCard() {
  return (
    <div className='flex flex-col sm:flex-row sm:items-center sm:gap-6 gap-2 p-8 bg-[#ff9584] rounded-xl m-5 min-w-[200px]'>
      <img className='size-30 mx-auto block rounded-full sm:mx-0 sm:shrink-0' src="/visual.jpg" alt="" />
      <div className='text-center sm:text-left'>
        <div className='space-y-0.5'>
          <p className='text-lg font-semibold text-black'>돈땃쥐</p>
        <p className='font-medium text-gray-500'>내가 화나면 돈땃쥐~</p>
        </div>
        <button className='transition border-purple-200 text-purple-600 outline-1 px-3 py-1 m-1 rounded-full hover:text-white hover:bg-purple-800 cursor-pointer'
        >Message</button>
      </div>
    </div>
  )
}
export default ProfileCard
