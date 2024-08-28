"use client";
import React, { useState } from "react";
import Label from "../ui/Ace-label";
import Input from "../ui/Ace-input";
import TextArea from "../ui/Ace-textarea";
import Select from "../ui/Ace-select";
import { cn } from "../../lib/utils";
import { z, ZodError } from 'zod'

export function ContactForm() {

    const [formData,  setFormData ] = useState({
        first_name : "",
        last_name :"",
        email : "",
        phone_no : '',
        region : "",
        service : "",
        project_details : ""
    })

    const [emailError , setEmailError] = useState('');

    const schema = z.object({
        first_name : z.string(),
        last_name : z.string(),
        email : z.string().email(),
        phone_no : z.string().optional(),
        region : z.string(),
        service : z.string(),
        project_details : z.string()
    })

    console.log(formData);

    const collectData = (event) => {
        setEmailError('')
        setFormData({ ...formData, [event.target.name]: event.target.value });
     }

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            schema.parse(formData);
            console.log("Form submitted");
        } catch (error) { 
            if (error instanceof ZodError) {
                setEmailError(error.errors[0].message);
            } else {
                console.error(error);
            }
        }
    };




    return (
        (<div
            className="max-w-xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8  bg-white dark:bg-black">
            <form className="my-8 text-start" onSubmit={handleSubmit}>
                <div
                    className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                    <LabelInputContainer>
                        <Label htmlFor="firstname" className="font-bold">First name</Label>
                        <Input name='first_name' value={formData.first_name} onChange={collectData} id="firstname" placeholder="Tyler" type="text" />
                    </LabelInputContainer>
                    <LabelInputContainer>
                        <Label htmlFor="lastname" className="font-bold">Last name</Label>
                        <Input name='last_name' value={formData.last_name} onChange={collectData} id="lastname" placeholder="Durden" type="text" />
                    </LabelInputContainer>
                </div>

                <LabelInputContainer className="mb-4">
                    
                    <div className="flex justify-between items-center">
                    <Label htmlFor="email" className="font-bold">Email Address</Label>
                    <p className="text-rose-600">{emailError}</p>
                    </div>
                    <Input name='email' value={formData.email} onChange={collectData} id="email" placeholder="projectmayhem@fc.com" type="email" />
                </LabelInputContainer>


                <div className="mb-4 flex gap-[20px]">
                    <LabelInputContainer >
                        <Label htmlFor="phoneNumber" className="font-bold">Phone Number</Label>
                        <Input name='phone_no' value={formData.phone_no} onChange={collectData} id="phoneNumber" placeholder="123-456-7890" type={'tel'} />
                    </LabelInputContainer>
                </div>

                <LabelInputContainer className="mb-8">
                    <Label htmlFor="company" className="font-bold">Company Name</Label>
                    <Input name='company' value={formData.company} onChange={collectData} id="company" placeholder="tech-etc" type="text" />
                </LabelInputContainer>

                <LabelInputContainer className="mb-8">
                    <Label htmlFor="Region" className="font-bold">Region</Label>
                    <Select reg name='region' value={formData.region} onChange={collectData}  className="" id="Region" placeholder="tech-etc" type="textarea" />
                </LabelInputContainer>

                <LabelInputContainer className="mb-8">
                    <Label htmlFor="Service" className="font-bold">Service</Label>
                    <Select serType name='service' value={formData.service} onChange={collectData} className="" id="Service" placeholder="tech-etc" type="textarea" />
                </LabelInputContainer>

                <LabelInputContainer className="mb-8">
                    <Label htmlFor="project" className="font-bold">Project Details</Label>
                    <TextArea name='project_details' value={formData.project_details} onChange={collectData} className="h-[90px]" id="project" placeholder="..." type="textarea" />
                </LabelInputContainer>

                <button
                    className="bg-gradient-to-br relative group/btn from-zinc-950 dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                    type="submit">
                    Submit &rarr;
                    <BottomGradient />
                </button>

            </form>
        </div>)
    );
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
