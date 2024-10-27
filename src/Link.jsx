import PropTypes from "prop-types";

export default function Link({route}) {
    console.log(typeof route);
  return (
    <li>
      <a href={route.path}>{route.name}</a>
    </li>
  );
}

Link.proptypes ={
    route:PropTypes.object.isRequired
}