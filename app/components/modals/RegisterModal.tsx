'use client'
import Modal from "./Modal"
import axios from 'axios';
import {AiFillGithub} from "react-icons/ai";
import {FcGoogle} from "react-icons/fc";
import { useCallback,useState } from 'react';
import { 
    FieldValues,
    SubmitHandler,
    useForm
} from "react-hook-form";
import Heading from "../Headings";
import Input from "../Inputs/Input";
import {toast} from "react-hot-toast";

import useRegisterModal from '@/app/hooks/useRegisterModal';
import Button from "../Button";
const RegisterModal = () => {

    const registerModal = useRegisterModal();
    const [isLoading, setIsLoading]= useState(false);
    const { register,
        handleSubmit,
        formState:{
            errors,
        }
    }= useForm<FieldValues>({
        defaultValues:{
            name:"",
            email:"",
            password:""
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        try {
            setIsLoading(true);
            await axios.post('/api/register', data);
            registerModal.onClose();
        } catch (error) {
            toast.error('Something Went Wrong');
        } finally {
            setIsLoading(false);
        }
    }

    const bodyContent = (
        <div
        className="
        flex 
        flex-col
        gap-4

        
        "
        >
           <Heading
           title="Welcome to Airbnb"
           subtitle=" Create an Account"
           center
           />

           <Input
           id="email"
           label="Email"
           disabled={isLoading}
           register={register}
           errors={errors}
           required
           />

<Input
           id="name"
           label="Name"
           disabled={isLoading}
           register={register}
           errors={errors}
           required
           />

<Input
           id="password"
           label="Password"
           type="password"
           disabled={isLoading}
           register={register}
           errors={errors}
           required
           />

        </div>
    );

    const footerContent=(
        <div
        className="flex flex-col gap-4 mt-3 "
        >
            <hr/>
            <Button
            outline
            label="Continue with Google"
            icon={FcGoogle}
            onClick={()=>{}}
            />

<Button
            outline
            label="Continue with Github"
            icon={AiFillGithub}
            onClick={()=>{}}
            />

            <div
            className="
            text-neutral-500
            text-center
            mt-4
            font-light
            "
            >
                <div className="  justify-center flex flex-row item-center gap-2">
                    <div>
                    Already Have an Account ?

                    </div>

                    <div
                    onClick={registerModal.onClose}
                    className="
                    text-neutral-800 cursor-pointer hover:underline
                    "
                     >
                   Log In

                    </div>
                </div>
            </div>

        </div>
    )


    return (
        <Modal
        disabled={isLoading}
        isOpen={registerModal.isOpen}
        title="Register"
        actionlabel="Continue"
        onClose={registerModal.onClose}
        onSubmit={handleSubmit(onSubmit)}
        body={bodyContent}
        footer={footerContent}
        />
    );
}

export default RegisterModal;