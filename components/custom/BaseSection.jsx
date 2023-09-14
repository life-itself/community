import clsx from "clsx";
import { BaseButton } from "./BaseButton";

export function BaseSection({ as: Component = "section", className, children, ...props }) {
  return (
    <Component className={clsx('max-w-7xl mx-auto mt-24 mb-36 px-6 lg:px-8 flex flex-col items-center gap-y-12 text-primary', className)} {...props}>
      {children}
    </Component>
  );
}

function BaseSectionTitle({ as: Component = "h2", children, className, id, linked = false, ...props }) {
  return (
    <Component id={id} className={clsx("max-w-2xl mx-auto text-center text-3xl font-headings font-bold tracking-tight text-primary sm:text-4xl", className)} {...props}>
      {linked ? (
        <a href={`#${id}`}>{children}</a>
      ) : children}
    </Component>
  )
}

function BaseSectionDescription({ as: Component = "p", children, className, ...props }) {
  return (
    <Component className={clsx("max-w-2xl mx-auto -mt-6 text-center text-lg text-primary leading-8", className)} {...props}>
      {children}
    </Component>
  );
}

function BaseSectionLink({ as: Component = "a", children, className, ...props }) {
  return (
    <Component className={clsx("", className)} {...props}>
      <BaseButton>
        {children}
      </BaseButton>
    </Component>
  )
}


BaseSection.Title = BaseSectionTitle;
BaseSection.Description = BaseSectionDescription;
BaseSection.Link = BaseSectionLink;
