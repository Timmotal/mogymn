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
        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "Delta Team Tango B Copy",
        description: "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular.",
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Exclusivity and Integrity",
        description: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.",
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
                    MORE THAN JUST A GYM.
                </HText>
                <p className="my-5 text-sm">
                I must explain to you how all this mistaken idea of denouncing
                pleasure and praising pain was born and I will give you a complete
                account of the system, and expound the
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