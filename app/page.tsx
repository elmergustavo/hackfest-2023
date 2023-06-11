import Header from './components/Header'
import Button from './components/Button'
import dog from './resources/images/dog.png'
export default function Home() {
  return (
    <main className="mx-[20px]">
      <Header />
      <div className='flex justify-center mt-[56px] flex-col items-center'>
        <h1>
          Encuentros cercanos del tipo ~peludo
        </h1>
        <p className='mt-[32px]'>
          Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.
        </p>
        <Button {...{ text: "Empecemos →", image: "", colorOfButton: "orange", classes: "px-[20px] py-[16px] w-[161px] h-[45px] my-[32px]" }} />
        <img src={dog.src} alt="Image of a dog" />
      </div>
    </main>
  )
}
