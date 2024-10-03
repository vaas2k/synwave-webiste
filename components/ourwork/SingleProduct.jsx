'use client'
import React, { useState } from 'react'
import { products } from './products';
import { motion } from 'framer-motion';
import { Dot, DotIcon } from 'lucide-react';
import Label from "../ui/Ace-label";
import Input from "../ui/Ace-input";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";
import z, { ZodError } from 'zod';
import axios, { AxiosError } from 'axios';
import { Loader } from 'lucide-react';
import FeaturesSectionDemo1 from '../ui/features-section-demo-1'
import { toast, Toaster } from 'sonner';

const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const productVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};


const SingleProduct = ({ id }) => {
    const product = products.find(product => product.id == id);
    const [emailError, setEmailError] = useState('');
    const [subError, setSubError] = useState(false);
    const [rateError, setRateError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [showList, setShowList] = useState('');
    const [done , setDone] = useState(false);

    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        project_name: product.title
    });

    const schema = z.object({
        first_name: z.string(),
        last_name: z.string(),
        email: z.string().email(),
    })
    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubError(false);
        setLoading(true);
        setRateError(false);
        try {

            schema.parse(formData);
            const req = await axios.post('/api/projectaccess', formData);
            if (req.status == 200) {
                console.log(req.status);
                setLoading(false);
                toast('Request Sent Successfully');
            }
        } catch (error) {
            setLoading(false);
            if (error instanceof ZodError) {
                setEmailError(error.errors[0].message);
            } else {
                console.error(error);
            }
            if (error instanceof AxiosError) {
                console.log(error.response.data);
                if (error.response.data.msg == 'Email limit exceeded') {
                    setRateError(true);
                }
            }
            toast('Request Failed, Try Again Later',{
                className:"bg-rose-600"
            });
        }
    }

    function collectData(event) {
        setEmailError('')
        setSubError(false)
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }


    return (
        <div className='flex flex-col'>
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={textVariants}
                className={`flex flex-col md:flex-col lg:flex-row items-center justify-center bg-cover h-screen rounded-2xl w-full`}
                style={{
                    backgroundRepeat:"no-repeat",
                    backgroundPosition:"center",
                    backgroundImage:`url("https://images.unsplash.com/photo-1604238376153-c7dfd9522fa7?q=80&w=1995&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`
                }}
                >

                <div className="flex mt-[20px] sm:mt-0 flex-col justify-center font-bold text-white gap-y-[20px]  mx-[20px] sm:mx-[100px]">
                    <h1 className='text-rose-600 font-normal ml-1 my-2 text-[12px]'> {product.industry}</h1>
                    <h className="text-rose-600 text-center sm:text-start text-2xl sm:text-4xl font-bold">{product.title}</h>
                    <p className='font-normal text-center sm:text-start text-[12px] sm:text-md text-zinc-600 my-4 '>{product.description}</p>
                    
                        {/**Socials logo from lucide react */}
                        <div className='flex justify-center sm:justify-start gap-x-[20px] mb-8 sm:mb-1'>
                        <img src={`https://skillicons.dev/icons?i=github&theme=light`}  className='w-[30px] h-auto'/>
                        <img src={`https://skillicons.dev/icons?i=stackoverflow&theme=light`} className='w-[30px] h-auto' />
                        </div>

                </div>
                <motion.img
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    src={product.thumbnail2}
                    alt={product.title}
                    className="w-[400px] sm:w-[650px] h-auto rounded-xl mr-1 sm:mr-[40px]" />

            </motion.div>



            {/**Some thing related to challenges we faced */}
            <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={textVariants}
            className=' py-[40px] flex flex-col lg:flex-row items-center justify-center gap-[10px] lg:gap-[300px] px-[20px] lg:px-[100px] min-h-[250px] bg-slate-50 mb-2 sm:mb-[50px] '>
                <h1 className=' sm:text-xl  md:text-lg lg:text-xl font-bold lg:w-[50%]'>{product.do[0]}</h1>
                <h1 className='text-sm opacity-80 lg:w-[50%]'>{product.do[1]}</h1>
            </motion.div>

            <div>
                <FeaturesSectionDemo1 grid={product.features} />
            </div>




            {/* <h1 className="text-3xl font-bold text-rose-600 dark:text-white ml-[20px] sm:ml-[100px]">Technical Challenges</h1>
            <div className='flex mx-[100px] flex-col my-[40px] gap-y-[40px]'>
                <div className='w-full flex items-start justify-start'>
                    <DotIcon size={25}/> <h1>some thing that we faced during the project</h1>
                </div>
                <div className='w-full flex items-center justify-center'>
                    <DotIcon size={25}/> <h1>some thing that we faced during the project</h1>
                </div>
                <div className='w-full flex items-end justify-end'>
                    <DotIcon size={25}/><h1>some thing that we faced during the project</h1>
                </div>
            </div> */}



            {/**Tech Stack*/}
            <div className='flex flex-col items-center justify-center p-8 mt-[80px] mb-[150px]'>
                <motion.div 
                initial="hidden"
                whileInView="visible"
                variants={textVariants}
                className='flex flex-col items-center justify-center gap-y-4'>
                    <h1 className='font-bold text-3xl text-rose-600'>Tech Stack</h1>
                    <p className='text-md opacity-75 sm:mx-10 md:mx-[50px] lg:mx-[350px] text-center mb-[30px]'>
                        Our battle-tested developers specialize in a wide range
                        of technologies and use the best-suitable tools and
                        techniques according to your business requirements.
                    </p>
                </motion.div>

                <motion.div
                initial="hidden"
                whileInView="visible"
                variants={textVariants}
                className='flex items-center justify-center gap-[50px] flex-wrap'>
                    {product.tech.map((item, index) => {
                        return (
                            <div key={index} className='flex items-center justify-center bg-zinc-100 shadow-lg rounded-xl p-[20px]'>
                                <img src={`https://skillicons.dev/icons?i=${item}`} />
                            </div>
                        )
                    })}
                </motion.div>
            </div>


            
            <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={productVariants}
            className='flex flex-col items-center justify-center bg-slate-50 md:mx-[50px] lg:mx-[100px] rounded-xl py-[50px]'>
                <h1 className='mx-[40px] text-3xl text-rose-500 font-bold text-center'>Unlock Full Access to Our Case Studies</h1>

                <div className='flex items-center justify-center'>
                    <div className="my-8 text-start" >
                        <div
                            className="flex flex-col md:flex-row  space-y-2 md:space-y-0 md:space-x-2 mb-4">
                            <LabelInputContainer>
                                <Label htmlFor="firstname" className="font-bold">First name</Label>
                                <Input className="w-[250px]" name='first_name' value={formData.first_name} onChange={collectData} id="firstname" placeholder="Tyler" type="text" />
                            </LabelInputContainer>
                            <LabelInputContainer>
                                <Label htmlFor="lastname" className="font-bold">Last name</Label>
                                <Input className="w-[250px]" name='last_name' value={formData.last_name} onChange={collectData} id="lastname" placeholder="Smith" type="text" />
                            </LabelInputContainer>
                        </div>

                        <LabelInputContainer className="mb-4">

                            <div className="flex justify-between items-center">
                                <Label htmlFor="email" className="font-bold">Email Address</Label>
                                <p className="text-rose-600">{emailError}</p>
                            </div>
                            <Input name='email' value={formData.email} onChange={collectData} id="email" placeholder="abc@mail.com" type="email" />
                        </LabelInputContainer>

                        {subError && <p className="text-rose-600 text-center my-[20px]">Server Error</p>}
                        {rateError && <p className="text-rose-600 text-center my-[20px]">Email limit exceeded</p>}

                        <Button
                            className="bg-gradient-to-br relative group/btn from-zinc-950 dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                            onClick={handleSubmit}>
                            {loading ? <h className="animate-spin flex justify-center"><Loader /></h> : 'Unlock'}
                            <BottomGradient />
                        </Button>

                    </div>

                </div>

            </motion.div>

        </div>
    )
}

const BottomGradient = () => {
    return (<>
        <span
            className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        <span
            className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>);
};

const LabelInputContainer = ({
    children,
    className
}) => {
    return (
        (<div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>)
    );
};

export default SingleProduct


{/* <div className="flex flex-col md:flex-col lg:flex-row items-center justify-center gap-x-[150px] mt-[40px] ">
<motion.div className="flex items-center justify-start  h-[200px] border-white border-t-[1px] border-x-[1px] rounded-t-2xl lg:shadow-2xl">
    <ul className="mx-[30px]">
        <li className="my-3 flex items-center text-white"><Dot size={30} color="white" /> {product.features[0]}</li>
        <li className="my-3 flex items-center text-white"><Dot size={30} color="white" /> {product.features[1]}</li>
        <li className="my-3 flex items-center text-white"><Dot size={30} color="white" /> {product.features[2]}</li>
        <li className="my-3 flex items-center text-white"><Dot size={30} color="white" /> {product.features[3]}</li>
    </ul>
</motion.div>
<motion.div className="flex items-center justify-start  h-[200px] border-white lg:border-t-[1px] border-x-[1px] lg:rounded-t-2xl shadow-2xl">
    <ul className="mx-[30px]">
        <li className="my-3 flex items-center text-white"><Dot size={30} color="white" /> {product.features[4]}</li>
        <li className="my-3 flex items-center text-white"><Dot size={30} color="white" /> {product.features[5]}</li>
        <li className="my-3 flex items-center text-white"><Dot size={30} color="white" /> {product.features[6]}</li>
        <li className="my-3 flex items-center text-white"><Dot size={30} color="white" /> {product.features[7]}</li>
    </ul>
</motion.div>
</div> */}