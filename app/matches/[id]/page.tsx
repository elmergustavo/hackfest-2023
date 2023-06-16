
import arrow from "../../resources/images/right-arrow.png";
import Link from 'next/link'

const MatchesId = async () => {

    return (
        <main className="flex justify-center flex-col my-[17px] mx-[20px] text-left">
            <Link href={`/matches`}><img src={arrow.src} alt="next" className="full-black px-[8px] py-[8px] w-[40px] h-[40px] rotate-180" /></Link>
        </main>
    );
};

export default MatchesId;
