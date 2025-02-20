const TextField = () => {
  return (
    <input 
        type="text" 
        className="w-64 text-primary border border-transparent bg-primaryForeground text-sm font-sans placeholder:text-textMuted py-[0.35rem] px-3 rounded-md outline-none placeholder:font-"
        placeholder="Search for product..."
        />
  )
}

export default TextField