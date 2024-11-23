import  { useId, useState } from 'react'
import Container from '../../Components/container/Container'
import { useForm } from 'react-hook-form'
import { registerSchema } from '../../Validations/Register'
import { yupResolver } from '@hookform/resolvers/yup';
import { useLoginContext } from '../../Context/LoginContext';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';
import { IoMdEye ,IoMdEyeOff } from "react-icons/io";
function LogIn() {
    const {handleSubmit,register,formState: {errors}} = useForm({defaultValues: {name : "",password: ""},resolver:yupResolver(registerSchema)})
    const {handleLogin}  = useLoginContext()
    const [showPassword,setShowPassword] = useState<boolean>(false)
    const id = useId()
    const {t} = useTranslation()
  return (
    <>
        <Container className='h-[70vh] flex items-center justify-center'>
          
            <form onSubmit={handleSubmit((data) =>  handleLogin(data.name,data.password))}  className={`bg-primery--color transition-all translate-x-0  overflow-hidden relative items-center  ${i18n.language === 'en' ? 'ltr' : ''} flex justify-center flex-col gap-5 p-5 rounded-sm lg:w-[45%] md:w-[60%] sm:w-[80%] lg:h-[70%] md:h-[70%] sm:h-[70%]`}>
                <div className='flex gap-2  w-[80%] flex-col'>
                    <label className='text-white  font-semibold'  htmlFor={id + '1020'}>{t('username')}:</label>
                    <input id={id + '1020'} {...register('name')} 
                    className=' placeholder:text-gray-700 p-2 font-semibold  bg-black outline-none  focus:placeholder:text-gray-500 rounded-2xl'  placeholder={t('placeholderu')} type="text"  />
                    {errors.name?.message && <span className='text-red-700 text-sm'>{errors.name.message}</span>}
                </div> 
                <div className='flex gap-2 w-[80%] relative flex-col'>
                <label  className='text-white font-semibold' htmlFor={id + '2020'}>{t('password')}:</label>
                <input  {...register('password')}  className='placeholder:text-gray-700 p-2 font-semibold focus:placeholder:text-gray-500  group-focus:translate-y-[-10%]  bg-black  outline-none rounded-2xl' placeholder={t('placeholderp')} type={showPassword ? 'text' : 'password'}  id={id + '2020'}  />
                {showPassword ? <IoMdEye className={`cursor-pointer absolute top-[60%] ${i18n.language === 'en' ? 'right-[5%]' : 'left-[5%]'}`} fontSize={20} onClick={() => setShowPassword(false)}/> : <IoMdEyeOff className={`cursor-pointer absolute top-[60%] ${i18n.language === 'en' ? 'right-[5%]' : 'left-[5%]'}`} fontSize={20} onClick={() => setShowPassword(true)}/>}
                {errors.password?.message && <span  className='text-red-700 text-sm'>{errors.password.message}</span>}
                </div>
                <div className='text-center w-full mt-6'>
                    <button className='cursor-pointer w-[80%] font-semibold p-2 transition-transform duration-[0.3s] hover:translate-y-[-3px] bg-secondery--color text-black rounded-2xl'>{t('Login')}</button>
                </div>
            </form>
        </Container>
    </>
  )
}

export default LogIn