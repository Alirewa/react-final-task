import { NavLink } from "react-router-dom";

export default function CustomNavLink({ children, to }) {
  const navLinkClass =
    "flex items-center gap-x-2 hover:bg-secondary-100 hover:text-secondary-900 p-2 rounded-lg transition-all duration-300";
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? ` ${navLinkClass} bg-secondary-200 text-secondary-900`
            : `${navLinkClass} text-secondary-600`
        }
      >
        {children}
      </NavLink>
    </li>
  );
}
