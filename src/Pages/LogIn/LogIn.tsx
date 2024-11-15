import React, { useId } from 'react'
import Container from '../../Components/container/Container'
import { useForm } from 'react-hook-form'
import { registerSchema } from '../../Validations/Register'
import { yupResolver } from '@hookform/resolvers/yup';

function LogIn() {
    const {handleSubmit,register,formState: {errors}} = useForm({defaultValues: {name : "",password: ""},resolver:yupResolver(registerSchema)})

    const id = useId()
  return (
    <>
        <Container className='h-[70vh] flex items-center justify-center'>
          
            <form onSubmit={handleSubmit((data) => console.log(data))}  className='bg-primery--color  overflow-hidden relative items-center flex justify-center flex-col gap-5 p-5 rounded-sm w-[40%] h-[70%]'>
                <div className='flex gap-2 w-[80%] flex-col'>
                    <label className='text-white  font-semibold'  htmlFor={id + '1020'}>Username:</label>
                    <input id={id + '1020'} {...register('name')} 
                    className=' placeholder:text-gray-700 p-2 font-semibold  bg-black outline-none  focus:placeholder:text-gray-500 rounded-2xl'  placeholder='username' type="text"  />
                    {errors.name?.message && <span className='text-red-700 text-sm'>{errors.name.message}</span>}
                </div> 
                <div className='flex gap-2 w-[80%] flex-col'>
                <label  className='text-white font-semibold' htmlFor={id + '2020'}>Password:</label>
                <input  {...register('password')}  className='placeholder:text-gray-700 p-2 font-semibold focus:placeholder:text-gray-500  group-focus:translate-y-[-10%]  bg-black  outline-none rounded-2xl' placeholder='password' type="text"  id={id + '2020'}  />
                {errors.password?.message && <span  className='text-red-700 text-sm'>{errors.password.message}</span>}
                </div>
                <div className='text-center w-full mt-6'>
                    <button className='cursor-pointer w-[80%] font-semibold p-2 transition-transform duration-[0.3s] hover:translate-y-[-3px] bg-secondery--color text-black rounded-2xl'>LogIn</button>
                </div>
            </form>
        </Container>
    </>
  )
}

export default LogIn