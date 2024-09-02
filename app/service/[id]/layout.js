export async function generateMetadata({ params }) {

    const descriptions = [
        'Our custom software development service transforms your unique requirements into robust, scalable, and user-friendly applications. We deliver tailored solutions that drive efficiency and innovation, empowering your business to succeed.',
        'At Synwave, we create intuitive and high-performance mobile apps across platforms. Our solutions are designed to enhance user engagement and meet the evolving demands of the global digital landscape.',
        'Our web development expertise ensures that your online presence is dynamic, responsive, and user-centric. We build scalable websites and web apps that drive traffic, engagement, and business growth.',
        'Unlock innovative possibilities with Synwaves generative AI services. We harness the power of AI to create unique, data-driven solutions that drive creativity, enhance user experiences, and solve complex business challenges.',
        'Synwaves DevOps services streamline your software development lifecycle, ensuring faster deployment, enhanced collaboration, and optimized performance. We integrate automation and continuous delivery for seamless operations.',
        'Keep your applications running smoothly with Synwave’s app maintenance services. We provide ongoing support, updates, and optimization to ensure your software remains secure, efficient, and up-to-date',
        'Transform your raw footage into captivating visual stories with Synwaves professional video editing services. We craft polished, high-quality videos that resonate with your audience and elevate your brand.'
    ]

    const title = decodeURIComponent(params.id);
    const desc = () => {
        if(title == 'Custom Software Development') { 
            return descriptions[0];
        }
        else if(title == 'Mobile App Development') {
            return descriptions[1];
        }
        else if(title == 'Web Development') {
            return descriptions[2];
        }
        else if(title == 'Generative AI') {
            return descriptions[3];
        }
        else if(title == 'DevOps') {
            return descriptions[4];
        }
        else if(title == 'App Maintenance') {
            return descriptions[5];
        }
        else if(title == 'Video Editing') {
            return descriptions[6];
        }

     }
    return {
        title: title,
        description : desc
    }
}

export default function RootLayout({ children }) {
    return (<div>
        {children}
    </div>)
}