/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const variants = {
  solid: "bg-accent text-white shadow-pill hover:bg-accent-dark",
  ghost: "border border-brand-300 bg-white text-brand-950 hover:border-accent hover:text-accent",
};

export function Button({ children, className = "", href, to, variant = "solid", ...props }) {
  const classes = `inline-flex min-h-11 items-center justify-center gap-2 rounded-pill px-6 py-3 text-sm font-semibold transition-colors duration-200 ${variants[variant]} ${className}`;

  if (to) {
    return <Link className={classes} to={to} {...props}>{children}</Link>;
  }

  if (href) {
    return <a className={classes} href={href} {...props}>{children}</a>;
  }

  return <button className={classes} type="button" {...props}>{children}</button>;
}
