import Image from 'next/image'
import Header from './components/Header'
export default function Home() {
  return (
    <main className="mx-[20px]">
      <Header />
      <div className='flex justify-center mt-[56px]'>
        <h1>
          Encuentros cercanos del tipo ~peludo
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>
    </main>
  )
}
