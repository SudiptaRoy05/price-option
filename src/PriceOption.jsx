import PropTypes from "prop-types"
import Features from "./Features"

export default function PriceOption({option}) {
    const{name, price, category,features} = option
  return (
    <div className="text-center bg-orange-300 rounded-md p-4 space-y-5 flex flex-col">
        <h2>
            <span className="text-7xl font-extrabold">{price}</span>
            <span className="text-2xl">/mon</span>
        </h2>
        <h4 className="text-3xl">{name}</h4>
        <p className="text-xl">{category}</p>
        <div className="flex-grow">
        {
            features.map((feature, idx) => <Features key={idx} feature={feature}></Features>)
        }
        </div>
        <button className="btn bg-green-800 px-6 w-full text-white">Buy Now</button>
    </div>
  )
}

PriceOption.propTypes={
    option:PropTypes.object,
}