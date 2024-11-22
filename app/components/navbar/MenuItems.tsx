'use client';

interface MenuItemProps{
    onClick:()=> void;
    label: string;
    
}

const MenuItems:React.FC<MenuItemProps> =({
    onClick,
    label
})=>{
    
    return(
        <div
        onClick={onClick}
        className="
        px-4
        py-3
        hover:big-neutral-100
        transition
        font-semibold
        "
        >
            {label}
        </div>
    )
}
export default MenuItems;