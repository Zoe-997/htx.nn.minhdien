import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface ReactQuillFullToolBarProps {
  value?: string;
  onChange: (content: string) => void;
}

const toolbarOptions = [
  [{ font: [] }],
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  ["bold", "italic", "underline", "strike"],
  [{ color: [] }, { background: [] }],
  [{ script: "sub" }, { script: "super" }],
  [{ list: "ordered" }, { list: "bullet" }],
  [{ indent: "-1" }, { indent: "+1" }],
  [{ align: [] }],
  ["link", "image", "video"],
  ["clean"],
];

const ReactQuillFullToolBar = ({
  value,
  onChange,
}: ReactQuillFullToolBarProps) => {
  return (
    <ReactQuill
      theme="snow"
      value={value && value}
      onChange={onChange}
      modules={{ toolbar: toolbarOptions }}
    />
  );
};

export default ReactQuillFullToolBar;
