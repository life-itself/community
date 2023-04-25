// custom function to get only paragraphs from raw markdown (eg. page.body.raw)
// used in place of page's description if not present.

export function filterMarkdown(markdownText) {
  // remove commented lines
  markdownText = markdownText.replace(/{\/\*.*\*\/}/g, "")
  // remove import statements
  markdownText = markdownText.replace(
    /^import\s*(?:\{\s*[\w\s,\n]+\s*\})?(\s*(\w+))?\s*from\s*("|')[^"]+("|');?$/gm,
    ""
  )
  // remove youtube links
  markdownText = markdownText.replace(/^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/gm, "")
  // replace wikilinks with only text
  markdownText = markdownText.replace(/([^!])\[\[(\S*?)\]]/g, "$1$2")
  // remove wikilink images
  markdownText = markdownText.replace(/!\[[\S]*?]]/g, "");
  
  return markdownText;
}