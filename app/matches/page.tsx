import heart from "../resources/images/heart.png";;
import arrow from "../resources/images/right-arrow.png";
import catTinder from "../resources/images/cat-tinder.png";
import close from "../resources/images/Close.png";
import Avatar from "../components/Avatar";
import getCurrentUser from "../actions/getCurrentUser";
import Link from 'next/link'

const HomeRegister = async () => {
  const currentUser = await getCurrentUser();
  return (
    <main className="flex justify-center flex-col my-[17px] mx-[20px] text-left">
      <div className="flex justify-between">
        <div className="flex space-x-2 justify-start items-center">
          <Avatar src={currentUser?.image} />
          <h2>{currentUser?.name}</h2>
        </div>
        <Link href={`/matches/${1}`}><img src={arrow.src} alt="next" className="full-black px-[8px] py-[8px] w-[40px] h-[40px]" /></Link>
      </div>
      <div className="w-full my-[16px] relative flex items-center justify-center rounded-[16px]">
        <img src={catTinder.src} alt="cat" className="w-full h-[576px]" />
        <p className="absolute bottom-[16px] mx-[16px]">
          <span className="card-title block mb-[8px]">Juan<span className='text-[#6262DB] mx-[4px]'>~</span><span className="card-subtitle">1 año</span></span>
          <span className="card-text ">Gato copo de nieve amoroso curioso jugueton ideal para cualquiera</span>
        </p>
      </div>
      <div className="flex mx-[84px]">
        <button className="bg-black text-white px-6 py-2 mr-[24px]" type="submit"> <img src={close.src} alt="not match" /> </button>
        <button className="bg-primary text-white px-6 py-2 w-[112px]" type="submit"> <img src={heart.src} alt="match" /> </button>
      </div>
    </main>
  );
};

export default HomeRegister;
