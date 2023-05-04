import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Benefit from "./Benefit";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: .2 }
    }
}

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "State of the Art Facilities",
        description: "Get in shape and feel great with our state-of-the-art gym equipment and expert personal trainers. Whether you're a beginner or a fitness enthusiast, we have everything you need to achieve your health and wellness goals. Join our community today and start your fitness journey!",
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "Delta Team Tango B Copy",
        description: "Looking for a gym that's more than just a place to work out? Look no further! Our gym is a community of like-minded individuals who share a passion for health and wellness. With a supportive and encouraging environment, you'll be inspired to push yourself to new heights and achieve your fitness goals.",
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Exclusivity and Integrity",
        description: "At our gym, we believe that fitness should be fun and rewarding. That's why we offer a wide variety of classes and programs to suit every interest and fitness level. From high-energy group fitness classes to one-on-one training sessions with certified personal trainers, we're committed to helping you reach your full potential.",
    },
]

const Benefits = ({ setSelectedPage}: Props) => {
  return (
    <section
        id="benefits"
        className="mx-auto min-h-full w-5/6 py-20"
    >
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        >   
        {/* HEADER */}
            <motion.div
                className="md:my-5  md:w-3/5" 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: .5 }} 
                transition={{ duration: .5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                }}
            >
                <HText>
                    MORE THAN JUST A  GYM. 
                </HText>
                <p className="my-5 text-sm">
                Meet expert trainers, at an affordable pricing, 
                get connected to a community, get healthy & aesthetic greek body
                account of the system, and get access to cutting edge equipment
                </p>
            </motion.div>

            {/* BENEFITS */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: .5 }}
                variants={container} 
                className="mt-5 items-center justify-between gap-8 md:flex"
            >
                {benefits.map((benefit) => (
                    <Benefit 
                        key={benefit.title}
                        icon={benefit.icon}
                        title={benefit.title}
                        description={benefit.description}
                        setSelectedPage={setSelectedPage}
                    />
                ))}
            </motion.div>

            {/* GRAPHIC & DESCRIPTION */}
            <div className="mt-16 items-center justify-between gap-20  md:mt-28 md:flex">
                {/* GRAPHIC */}
                <img 
                    src={BenefitsPageGraphic}
                    className="mx-auto" 
                    alt="benefits-page-graphic" 
                />

                {/* DESCRIPTION */}
                <div>
                    {/* TITLE */}
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: .5 }} 
                                transition={{ duration: .5 }}
                                variants={{
                                    hidden: { opacity: 0, x: 50 },
                                    visible: { opacity: 1, x: 0 },
                                }}
                            >
                                <HText>
                                    MILLIONS OF HAPPY MEMBERS GETTING{"  "}
                                    <span className="text-primary-500">FIT</span>.
                                </HText>
                            </motion.div>
                        </div>
                    </div>
                    {/* DESCRIPTION */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: .5 }} 
                        transition={{ delay: .2, duration: .5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <p className="my-5">
                            One morning, when Gregor Samsa woke from troubled dreams, he found himself
                            transformed in his bed into a horrible vermin. He lay on his armour-like
                            back, and if he lifted his head a little he could see his brown belly,
                            slightly domed and divided by arches into stiff sections. The bedding
                            was hardly able to cover it and seemed ready to slide off any moment.
                        </p>
                        <p className="mb-5">
                            Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
                             Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                        </p>
                    </motion.div>
                    {/* BUTTON */}
                    <div className="relative mt-16">
                        <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                            <ActionButton setSelectedPage={setSelectedPage} >
                                Join Now
                            </ActionButton>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Benefits