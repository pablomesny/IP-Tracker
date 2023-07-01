import { IPInfo, Search } from "./components"

export const Header = () => {
  return (
    <header className='bg-blue-pattern h-52 w-100'>
        <div className='flex flex-col items-center pt-5'>
            <h1 className='font-rubik text-white text-2xl text-center'>
                IP Address Tracker
            </h1>

            <Search />

            <IPInfo />
        </div>
    </header>
  )
}
