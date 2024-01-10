'use client'
import { IconType } from "react-icons"

interface socialProps{
    url:string,
    icon:IconType
}

const SocialItem : React.FC<socialProps> = ({
    url,
    icon:Icon
}) =>{
    const handleClick = ()=>{
        window.open(url, '_blank', 'noopener,noreferrer')
    }

    return(
        <div 
            className="w-full cursor-pointer"
            onClick={handleClick}
        >
            <Icon size={24} color="#828282"/>
        </div>
    )
}

export default SocialItem