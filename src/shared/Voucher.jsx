import { Button } from "flowbite-react"
import { Mail } from "lucide-react"


const Voucher = ({voucherName, voucherBtn}) => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2  lg:w-3/4 mx-auto gap-12 text-white py-18 px-20 bg-linear-to-tr  from-[#9B6C74] to-[#2563EB] rounded-4xl'>
      <h4 className="text-[2.5rem] font-semibold text-center">
        {voucherName}
      </h4>
     <div className="flex flex-col gap-6">
         <p className="text-center">Id lacus eget adipiscing ac dolor sollicitudin libero lacus aliquet posuere elementum quamlibero lobortis tempor egestas feugiat sem varius</p>
        <div className="flex relative w-full">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />

            <input type="text" className="bg-white rounded-full focus:outline-accent  text-gray-500 px-12 py-3 w-full" placeholder="Your Email"/>
            <Button className=" bg-accent! ring-0! hover:bg-accent/90! cursor-pointer rounded-full absolute top-1/2 -translate-y-1/2 right-1">{voucherBtn}</Button>
        </div>
     </div>
    </div>
  )
}

export default Voucher
