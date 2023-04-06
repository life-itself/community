// custom function to get only paragraphs from raw markdown (eg. page.body.raw)
// used in place of page's description if not present.

export function parseMarkdown(markdownText) {
  // Replace bold text
  markdownText = markdownText.replace(/\*\*(.*?)\*\*/g, '$1');
  // Replace italic text
  markdownText = markdownText.replace(/\*(.*?)\*/g, '$1');
  // remove headings
  markdownText = markdownText.replace(/#+\s+(.*?)\n/g, '');
  // remove unordered lists
  markdownText = markdownText.replace(/\n- (.*)/g, '');
  // remove ordered lists
  markdownText = markdownText.replace(/\n\d+\.(.*)/g, '');
  // Replace links
  markdownText = markdownText.replace(/\[(.*?)\]\((.*?)\)/g, '$1');
  // Remove youtube links
  markdownText = markdownText.replace(/^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/gm, '');
  // remove images
  markdownText = markdownText.replace(/!\[(.*?)\]\((.*?)\)/g, '');
  // Remove HTML elements
  markdownText = markdownText.replace(/<[^>]*>/g, '');
  
  return markdownText;
}