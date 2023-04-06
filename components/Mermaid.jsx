import mermaid from "mermaid";

export function Mermaid(props) {
  const { chart } = props

  mermaid.initialize({
    fontFamily: 'inherit',
    flowchart: {
      nodeSpacing: 100,
    },
  })

  return chart ? <div className="mermaid">{chart}</div> : null
}