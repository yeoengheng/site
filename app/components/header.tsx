'use client'
import { useRouter } from "next/navigation"

import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import SocialItem from "./SociaItems";

interface headerProps {
    logo: string,
}

export const socials =[
    {
        name: 'LinkedIn',
        url:'https://www.linkedin.com/in/yeoengheng/',
        icon:FaLinkedin
    },
    {
        name: 'X',
        url:'https://twitter.com/YeoEngHeng',
        icon:FaSquareXTwitter
    },
    {
        name: 'GitHub',
        url:'https://github.com/yeoengheng',
        icon:FaGithubSquare
    }
]

const Header : React.FC<headerProps> =({
    logo
}) =>{
    const router = useRouter();
    return(
        <header className="flex row w-full  justify-between relative w-full px-8 py-6">
            <div className="text-zinc-500 text-xl font-normal font-['DM Sans'] cursor-pointer" onClick={()=>router.push('/')}>
                {logo} 
            </div>
            <div className="flex flex-row gap-2"> 
                {socials.map((item)=>(
                    <SocialItem
                        key={item.url}
                        icon={item.icon}
                        url={item.url}
                    />
                ))}
            </div>
        </header>
    )
}

export default Header;

