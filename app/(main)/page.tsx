import Homepage from '@/app/components/Home/Homepage';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Homepage /> 
    </div>
  );
}
