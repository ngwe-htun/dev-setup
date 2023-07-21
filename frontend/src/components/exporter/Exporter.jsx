import * as htmlToImage from "html-to-image";

export const HandleExport = async ({ref, name}) => {
  const htmlElement = ref.current;
  if (!htmlElement) {
    return;
  }
  const dataUrl = await htmlToImage.toPng(htmlElement, {
    backgroundColor: 'white'
  });

  const link = document.createElement("a");
  link.download = name;
  link.href = dataUrl;
  link.click();
}
