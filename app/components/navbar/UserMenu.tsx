'use client';

import { AiOutlineMenu } from 'react-icons/ai';
import Avatar from '../Avatar';
import { useState, useCallback } from 'react';
import MenuItem from './MenuItems'; // Ensure this component exists or create it.
import useRegisterModal from '@/app/hooks/useRegisterModal';

const UserMenu = () => {
    const registerModal = useRegisterModal();
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, []);

    return (
        <div className="relative">
            {/* Main container for the user menu */}
            <div className="flex flex-row items-center gap-3">
                {/* Airbnb your home button */}
                <div
                    onClick={() => console.log("Airbnb your home clicked!")}
                    className="
                        hidden md:block
                        text-sm font-semibold
                        py-3 px-4
                        rounded-full
                        hover:bg-neutral-100
                        transition cursor-pointer
                    "
                >
                    Airbnb your home
                </div>

                {/* User avatar and menu button */}
                <div
                    onClick={toggleOpen}
                    className="
                        p-4
                        md:py-1 md:px-2
                        border-[1px] border-neutral-200
                        flex flex-row items-center gap-3
                        rounded-full
                        hover:shadow-md
                        transition cursor-pointer
                    "
                >
                    <AiOutlineMenu />
                    <div className="hidden md:block">
                        <Avatar />
                    </div>
                </div>
            </div>

            {/* Dropdown menu */}
            {isOpen && (
                <div
                    className="
                        absolute
                        rounded-xl
                        shadow-md
                        w-[40vw]
                        md:w-3/4
                        bg-white
                        overflow-hidden
                        right-0
                        top-12
                        text-sm
                    "
                >
                    <div className="flex flex-col cursor-pointer">
                        {/* Add your menu items here */}
                        <MenuItem

                            onClick={() => { }}
                            label="Login"


                        />

                        <MenuItem

                            onClick={registerModal.onOpen}
                            label="Signup"


                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserMenu;
