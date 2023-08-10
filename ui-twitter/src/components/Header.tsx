import { Sparkle } from "@phosphor-icons/react";
import './Header.css'

interface HeaderProps {
  tittle: string
}

export function Header(props: HeaderProps){
  return(
    <div className='timeline-header'>
    {props.tittle}
    <Sparkle />
  </div>
  )
}