import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";


const loginSchema = z.object({
    username: z.string().min(1, "Username is required"),
    password: z.string().min(3).max(20)
})

type LoginSchemaType = z.infer<typeof loginSchema>;

function LoginPage() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<LoginSchemaType>({ resolver: zodResolver(loginSchema) })

    const onSubmit: SubmitHandler<LoginSchemaType> = (data) => console.log(data)

    return (
        <div className='h-[100vh] flex w-full flex-col items-center justify-center'>
            <div className='md:w-[35%] w-[90%] border shadow h-fit rounded-xl bg-black flex flex-col items-center py-8'>
                <h1 className='text-3xl font-semibold'>Login</h1>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-6 w-[80%] justify-center pt-10'>
                    <div className='flex flex-col gap-1'>
                        <label className='text-lg font-medium' htmlFor="">Username :</label>
                        <input
                            type=""
                            className='bg-transparent border-b text-md focus-visible:outline-none'
                            placeholder='John Doe'
                            {...register("username")}
                        />
                        {errors.username && <span className='text-red-400 text-xs'>{errors.username.message}</span>}
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label className='text-lg font-medium' htmlFor="">Password :</label>
                        <input
                            className="bg-transparent border-b text-md focus-visible:outline-none"
                            placeholder="Enter Your Password"
                            {...register("password")}
                        />
                        {errors.password && <span className='text-red-400 text-xs'>{errors.password.message}</span>}
                    </div>

                    <button className='border rounded p-2 mt-8 transition duration-500 ease-in-out text-xl font-bold hover:bg-white hover:text-black' type="submit">Log in</button>
                    <span className='text-center text-sm text-light -mt-4'>Don't have an account? <span className='hover:cursor-pointer font-bold hover:underline'>Sign in</span></span>
                </form>
            </div>
        </div>
    )
}

export default LoginPage