import PropTypes from "prop-types"
import { TiTick } from "react-icons/ti";

export default function Features({feature}) {
  return (
    <div className="">
        <p className=" flex items-center gap-3"><span><TiTick className="text-green-600" /></span> <span>{feature}</span></p>
    </div>
  )
}

Features.propTypes={
    feature:PropTypes.string,
}