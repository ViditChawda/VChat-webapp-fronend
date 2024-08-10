import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const signUpSchema = z.object({
    fullname: z.string().min(1, 'Full name is required'),
    username: z.string().min(1, 'Username is required'),
    password: z
        .string()
        .min(3, 'Password must be at least 3 characters long')
        .max(20, 'Password must be at most 20 characters long'),
    confirmPassword: z
        .string()
        .min(3, 'Confirm password must be at least 3 characters long')
        .max(20, 'Confirm password must be at most 20 characters long'),
    gender: z.enum(['male', 'female'], {
        errorMap: () => ({ message: 'Gender is required' }),
    }),
});

type SignUpSchemaType = z.infer<typeof signUpSchema>;

function LoginPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignUpSchemaType>({ resolver: zodResolver(signUpSchema) });

    const onSubmit: SubmitHandler<SignUpSchemaType> = (data) => console.log(data);

    return (
        <div className="min-h-[100vh] flex w-full flex-col items-center justify-center py-6">
            <div className="md:w-[35%] w-[90%] border shadow h-fit rounded-xl bg-black flex flex-col items-center py-8">
                <h1 className="text-3xl font-semibold">Sign Up</h1>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-6 w-[80%] justify-center pt-10"
                >
                    <div className="flex flex-col gap-1">
                        <label className="text-lg font-medium" htmlFor="">
                            Full Name :
                        </label>
                        <input
                            type="text"
                            className="bg-transparent border-b text-md focus-visible:outline-none"
                            placeholder="John Doe"
                            {...register('fullname')}
                        />
                        {errors.fullname && (
                            <span className="text-red-400 text-xs">
                                {errors.fullname.message}
                            </span>
                        )}
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-lg font-medium" htmlFor="">
                            Username :
                        </label>
                        <input
                            type="text"
                            className="bg-transparent border-b text-md focus-visible:outline-none"
                            placeholder="Username"
                            {...register('username')}
                        />
                        {errors.username && (
                            <span className="text-red-400 text-xs">
                                {errors.username.message}
                            </span>
                        )}
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-lg font-medium" htmlFor="">
                            Password :
                        </label>
                        <input
                            type="password"
                            className="bg-transparent border-b text-md focus-visible:outline-none"
                            placeholder="Enter Your Password"
                            {...register('password')}
                        />
                        {errors.password && (
                            <span className="text-red-400 text-xs">
                                {errors.password.message}
                            </span>
                        )}
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-lg font-medium" htmlFor="">
                            Confirm Password :
                        </label>
                        <input
                            type="password"
                            className="bg-transparent border-b text-md focus-visible:outline-none"
                            placeholder="Confirm Your Password"
                            {...register('confirmPassword')}
                        />
                        {errors.confirmPassword && (
                            <span className="text-red-400 text-xs">
                                {errors.confirmPassword.message}
                            </span>
                        )}
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-lg font-medium" htmlFor="">
                            Gender :
                        </label>
                        <select
                            className="bg-transparent p-0 border-b text-md focus-visible:outline-none"
                            {...register('gender')}
                            defaultValue=""
                        >
                            <option className='bg-black text-white' value="" disabled>
                                Select your gender
                            </option>
                            <option className='bg-black text-white' value="male">Male</option>
                            <option className='bg-black text-white' value="female">Female</option>
                        </select>
                        {errors.gender && (
                            <span className="text-red-400 text-xs">
                                {errors.gender.message}
                            </span>
                        )}
                    </div>
                    <button
                        className="border rounded p-2 mt-8 transition duration-500 ease-in-out text-xl font-bold hover:bg-white hover:text-black"
                        type="submit"
                    >
                        Sign Up
                    </button>
                    <span className="text-center text-sm text-light -mt-4">
                        Already have an account?{' '}
                        <span className="hover:cursor-pointer font-bold hover:underline">
                            Log in
                        </span>
                    </span>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
