import PropTypes from "prop-types";


export default function Link({route}) {
    // console.log(typeof route);
  return (
    <li className="hover:bg-slate-600">
      <a href={route.path}>{route.name}</a>
    </li>
  );
}

Link.propTypes ={
    route:PropTypes.object.isRequired
}