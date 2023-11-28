import clsx from "clsx";

export function Avatar({ name, img, href, size = 8 }) {
  const Component = href ? "a" : "div";
  return (
    <Component href={href} className="group block flex-shrink-0">
      <div className="flex items-center space-x-2">
        <div>
          <img
            className={clsx("inline-block rounded-full my-0", `h-${size} w-${size}`)}
            src={img}
            alt={name}
          />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-primary dark:text-primary-dark my-0">
            {name}
          </p>
        </div>
      </div>
    </Component>
  );
}
