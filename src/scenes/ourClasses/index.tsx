import { ClassType, SelectedPage } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";


const classes: Array<ClassType> = [
    {
        name: "Tambata Classes",
        description: "To take a trivial example, which  of us ever undertakes laborious physical exercise, except to obtain some advantage from it?",
        image: image1,
    },
    {
        name: "High Intensity Program",
        description: "Mrs door paid led loud sure easy read. Hastily at perhaps as neither or ye fertile tedious visitor.",
        image: image2,
    },
    {
        name: "Adiyoga Yoga",
        description: "Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced.",
        image: image3,
    },
    {
        name: "Hypertrophy Sessions",
        description: "In no impression assistance contrasted. Manners she wishing justice hastily new anxious. At discovery discourse departure objection we.",
        image: image4,
    },
    {
        name: "ALternating Muscles Moves",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, doloremque fuga, et tempore dignissimos nisi quod aperiam culpa, vel rem illum. Quo vel exercitationem nisi culpa vitae ut repellendus placeat.",
        image: image5,
    },
    {
        name: "Outdoor Exercise",
        description: "Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs!",
        image: image6,
    },
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({ setSelectedPage }: Props) => {
  return <section id="ourclasses" className="w-full bg-primary-100 py-40">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
            >
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: .5 }} 
                    transition={{ duration: .5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }} 
                    className="mx-auto w-5/6">
                        <div className="md:w-3/5">
                            <HText>OUR CLASSES</HText>
                            <p className="py-5">
                            Certainty listening no no behaviour existence assurance situation is.
                            Because add why not esteems amiable him.
                            </p>
                        </div>
                </motion.div>
                <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                    <ul className="w-[2800px] whitespace-nowrap">
                        {classes.map((item: ClassType, index) => (
                        <Class
                            key={`${item.name}-${index}`} //comeback to this @ (03:13:29)
                            name={item.name}
                            description={item.description}
                            image={item.image}
                         />
                        ))}
                    </ul>
                </div>
            </motion.div>
         </section>;
}
export default OurClasses