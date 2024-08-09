import { GoBell } from "react-icons/go";
import { FcAcceptDatabase } from "react-icons/fc";
import { FiAperture, FiCoffee, FiCpu } from "react-icons/fi";
import Button from "../components/button"
const ButtonPage = () => {
  const handleClick = () => { 

  };
  return (
    <div>
      <div>
        <Button secondary outline rounded className='mb-5' onClick={handleClick}>
          <GoBell />
          Click me</Button>
      </div>

      <div>
        <Button danger outline onMouseEnter={handleClick}>
          <FcAcceptDatabase />
          Buy Now</Button>
      </div>

      <div>
        <Button success outline>
        <FiAperture />
          Sea Deal</Button>
      </div>

      <div>
        <Button secondary outline>
        <FiCoffee />
          Hide Ads</Button>
      </div>

      <div>
        <Button primary rounded>
          <FiCpu />
          Something</Button>
      </div>
    </div>
  )
}

export default ButtonPage