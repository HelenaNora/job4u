
import Bg from '../Pages/img/login-logo.png';
export default function Guest({ children }) {

  return (
    <div>
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-[#EEE2DC]">
            <div className='w-56'>
                  <img src={Bg} />
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4   overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    </div>
  );
}
