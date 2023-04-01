import StartButton from '@/components/StartButton'

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-brand-100">
      <h1 className="text-brand-300 font-serif">
        Horse Race Prediction AI（仮）
      </h1>
      <StartButton />
    </div>
  )
}
