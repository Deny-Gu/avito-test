export function trimText(text: string, maxTextLength: number) {
  if (text.length > maxTextLength) {
    if (!text.includes(" ")) {
      return text.slice(0, 30) + "...";
    }
    const textArray = text.split(" ");
    return textArray.slice(0, 5).concat("...").join(" ");
  }

  return text;
}
