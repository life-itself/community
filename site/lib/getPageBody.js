import { useMDXComponent } from "next-contentlayer/hooks";
import { Fragment } from "react";

const strippedComponents = [
  "h1", "h2", "h3", "h4", "h5", "h6", "li", "img", "ul", "ol", "div", "hr", "pre", "code", "embed"
].reduce((acc,curr)=> (acc[curr]=() => <></>,acc),{})

export const PostBody = ({ code, frontmatterImage }) => {
  const className = frontmatterImage ? "h-20 line-clamp-3" : "h-64 line-clamp-4"
  const Component = useMDXComponent(code)
  const components = {
    ...strippedComponents,
    a: (props) => <span {...props} />,
    p: (props) => <Fragment {...props} />,
    wrapper: ({ children }) => {
      return <div className={"overflow-hidden " + className}>
        {children}
      </div>
    }
  }
  return (
    <Component components={components} />
  )
}