import { Fragment } from "react";
import { useMDXComponent } from "next-contentlayer/hooks";
import clsx from "clsx";

const strippedComponents = [
  "h1", "h2", "h3", "h4", "h5", "h6", "li", "img", "ul", "ol", "div", "hr", "pre", "code"
].reduce((acc,curr)=> (acc[curr]=() => null,acc),{})

const link = props => {
  if (/^(https?\:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/.test(props.href)) {
    return null
  }
  return <Fragment>{props.children}</Fragment>
}

export const PostBody = ({ code, frontmatterImage, className }) => {
  const clamp = frontmatterImage ? "line-clamp-3" : "line-clamp-6";
  const Component = useMDXComponent(code);
  const components = {
    ...strippedComponents,
    a: link, // just need to display the text
    p: props => <Fragment {...props} />,
    wrapper: ({ children }) => {
      return <div className={clsx("[&>:not(p):not(a)]:hidden overflow-hidden", clamp, className)}>
        {children}
      </div>
    }
  }
  return (
    <Component components={components} />
  )
}