import Button from "../components/Button";
import { IoMdHome } from "react-icons/io";

const NotFound = () => {
  return (
    <div className='w-full h-screen flex text-center justify-center items-center gap-3 text-[20px] '>
      <div className='w-1/2 h-fit flex flex-col text-left m-auto pl-4 md:pr-[100px] py-4 gap-2'>
        <p className='text-[100px]'>Page Not Found</p>
        <p>
          It seems like this page is currently unavailiable. Please check back
          later.
        </p>
        <Button href='/' type='button' disabled={false}>
          <span className='flex gap-1 items-center'>
            Go Home <IoMdHome size={15} />
          </span>
        </Button>
      </div>
      <div className='w-1/2 h-fit bg-red-600'></div>
    </div>
  );
};

export default NotFound;
