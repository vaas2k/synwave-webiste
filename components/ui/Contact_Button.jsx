import React from 'react'
import {
    Modal,
    ModalTrigger,
} from "../ui/Contact";

import { Mail } from 'lucide-react';

const Contact_Button = ({color,word,bg}) => {
    return (
        <Modal>
            <ModalTrigger className={`bg-${bg} dark:bg-${bg}  dark:text-${color} text-white flex justify-center group/modal-btn`}>
                <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                    {word}
                </span>
                <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                  <Mail color={color} size={'18px'}/>
                </div>
            </ModalTrigger>
        </Modal>
    )
}

export default Contact_Button