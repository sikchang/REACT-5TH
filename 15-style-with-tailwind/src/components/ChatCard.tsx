function ChatCard() {
  return (
    <div className='flex items-center max-w-sm mx-auto p-6 outline-1
    gap-x-4 bg-white dark:bg-slate-800 shadow-lg dark:shadow-none rounded-xl outline-black/5 dark:outline-white/20'>
      <img className='size-12' src="/vite.svg" alt="vite logo" />
      <div>
        <strong className='text-lg font-medium text-black'>ChitChat</strong>
        <p className='text-gray-500'>you have a new message!</p>

      </div>
    </div>
  )
}
export default ChatCard
