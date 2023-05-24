import { useForm } from "react-hook-form";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png"
import HText from "@/shared/HText";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}



// const inputStyles = `w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`;
// this should be inside the body of a function, why are props outside of the body of a function though

const ContactUs = ({ setSelectedPage }: Props) => {
    
    const  {
        register,
        trigger,
        formState: { errors },
    } = useForm();
    
    const onSubmit = async(e: any) => {
        const isValid = await trigger();
    
        if (!isValid) {
            e.preventDefault();
        }
    }

    const inputStyles = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`;


  return <section id="contactus" className="mx-auto w-5/6 mt-24 pb-32">
    <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
    >
        {/* HEADER */}
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: .5 }} 
            transition={{ duration: .5 }}
            variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
            }}
            className="md:w-3/5"
        >
            <HText>
                <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE & BECOME AESTHETIC
                git commit -am '
            </HText>
            <p className="my-5">
                Righteous indignation and dislike men who are so beguiled and
                demoralized by the charms of pleasure of the moment, so blinded
                by desire, that they cannot foresee
            </p>
        </motion.div>

        {/* FORM & IMAGE */}
        <div className="mt-10 justify-between gap-8 md:flex">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: .5 }} 
                transition={{ duration: .5 }}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                }} 
                className="mt-10 basis-3/5 md:mt-0"
            >
                <form 
                    target="_blank"
                    onSubmit={onSubmit}
                    method="POST"
                    action="https://formsubmit.co/685996233756f666f3dcfabfb6e1526f"
                    >   
                        {/* NAME INPUT */}
                        <input 
                            type="text" 
                            className={inputStyles}
                            placeholder="NAME"
                            {...register("name", {
                                required: true,
                                maxLength: 100,
                            })}
                        />
                        {errors.name && ( //we destructured error's value from React Hook Form
                            <p className="mt-1 text-primary-500">
                                {errors.name.type === "require" && "This field is required"}
                                {errors.name.type === "maxLength" && "100 characters allowed, make name into initials"}
                            </p>
                        )}
                        {/* EMAIL INPUT */}
                        <input 
                            type="text" 
                            className={inputStyles}
                            placeholder="EMAIL"
                            {...register("email", {
                                required: true,
                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9._]+\.[A-Z]{2,}$/i,
                            })}
                        />
                        {errors.email && ( //we destructured error's value from React Hook Form
                            <p className="mt-1 text-primary-500">
                                {errors.email.type === "require" && "This field is required"}
                                {errors.email.type === "pattern" && "Email is not valid"}
                            </p>
                        )}
                        {/* MESSAGE INPUT */}
                        <textarea 
                            rows={4}
                            cols={50} 
                            className={inputStyles}
                            placeholder="MESSAGE"
                            {...register("message", {
                                required: true,
                                maxLength: 2000,
                            })}
                        />
                        {errors.message && ( //we destructured error's value from React Hook Form
                            <p className="mt-1 text-primary-500">
                                {errors.message.type === "require" && "This field is required"}
                                {errors.message.type === "maxLength" && "2000 characters allowed, please summarize"}
                            </p>
                        )}

                        <button className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white">
                            SUBMIT
                        </button>
                    </form>
            </motion.div>

            {/* IMAGE BESIDE FORM */}
            <motion.div 
                className="relative mt-16 basis-2/5 md:mt-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: .5 }} 
                transition={{ delay: .2, duration: .5 }}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                }}
            >
                <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
                    <img src={ContactUsPageGraphic} alt="contact-us-page-graphic" className="w-full" />
                </div>
            </motion.div>
        </div>
    </motion.div>
  </section>
}

export default ContactUs