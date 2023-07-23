
import { Metadata } from 'next'
import Banner from './components/Banner/page'
import Nav from './components/Nav/page'
import Card from './components/Card/page'


export const metadata: Metadata = {
  title: 'nextflix',
  description: 'movie app',
}
export default function Home() {
  return (
    <main>
<div>
<Nav userName="jewelrakib@gmail.com"/>
<Banner title="Clifford the red dog" subtitle="a very good dog" imgUrl="./static/clifford.webp"/>
<Card/>
</div>
    </main>
  )
}
