import Logo from "@/assets/Logo.png";

type Props = {}

const Footer = (props: Props) => {
  return <footer className="bg-primary-100 py-6">
    <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
            <img src={Logo} alt="logo" />
            <p>
            Home sons when them dine do want to.
            Estimating themselves unsatiable imprudence an he at an.
            Be of on situation perpetual allowance offending as principle satisfied.
            </p>
            <p>&#169; Evogymn All Rights Reserved.</p>
        </div> 
        <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold">Links</h4>
            <p className="my-5">Hastily at perhaps as neither or ye fertile tedious visitor.</p>
            <p className="my-5">Recommend existence curiosity perfectly</p>
            <p>Civility vicinity graceful</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold">Contact Us</h4>
            <p className="my-5">Real no near room ye bred sake if some.</p>
            <p className="my-5">The jay, pig, fox, zebra, and my wolves
        quack!</p>
            <p>(127) 618-178</p>
        </div>
    </div>
  </footer>
}
export default Footer