import React from "react";

interface TextButtonProps {
    text: string
    handleClick: React.MouseEventHandler<HTMLButtonElement>
}

const TextButton: React.FC<TextButtonProps> = ({text, handleClick}) => {
    return (
        <div>
            <button className="text-white bg-slate-800/0 " onClick={handleClick}>{text}</button>
        </div>
    )
}

export default TextButton;