"use client";
import { useCallback, useState } from "react";
import { CldUploadWidget } from "next-cloudinary";
import { CldImage } from "next-cloudinary";
import { Button, Modal } from "antd";
import { CloseOutlined, EyeOutlined, PlusOutlined } from "@ant-design/icons";
import Image from "next/image";

declare global {
  var cloudinary: any;
}

interface ImageUploadProps {
  onChange: (value: string[]) => void;
  value: string[];
}

const ImageMultiUpload = ({ onChange, value }: ImageUploadProps) => {
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handlePreview = (url: string) => {
    setPreviewImage(url);
    setPreviewVisible(true);
  };

  const handleRemove = (index: number) => {
    const newValue = value.filter((_, i) => i !== index);
    onChange(newValue);
  };

  const handleUpload = useCallback(
    (result: any) => {
      console.log("Uploaded image URL:", result.info.secure_url);
      onChange([...value, result.info.secure_url]);
    },
    [onChange, value]
  );

  return (
    <div className="w-full h-full flex flex-wrap gap-4">
      {value?.length === 0 ? (
        <CldUploadWidget
          onSuccess={handleUpload}
          onError={(error) => {
            console.error("Upload error:", error);
          }}
          uploadPreset="lfznn3mw"
          options={{
            maxFiles: 5,
            multiple: true,
          }}
        >
          {({ open }) => (
            <div
              onClick={() => open?.()}
              className="relative cursor-pointer hover:opacity-70 transition border-dashed border-2 p-20 border-neutral-300 flex flex-col justify-center items-center gap-4 text-neutral-600 w-full h-full"
            >
              <PlusOutlined size={24} />
              <div className="font-semibold text-lg">Click to upload</div>
            </div>
          )}
        </CldUploadWidget>
      ) : (
        <>
          {value?.map((url, index) => (
            <div key={index} className="relative w-32 h-32">
              <CldImage
                alt={`Upload ${index + 1}`}
                fill
                style={{ objectFit: "cover" }}
                src={url}
              />
              <div className="absolute top-2 right-2 flex gap-2">
                <Button
                  type="primary"
                  icon={<EyeOutlined />}
                  size="small"
                  onClick={() => handlePreview(url)}
                />
                <Button
                  type="text"
                  icon={<CloseOutlined />}
                  size="small"
                  onClick={() => handleRemove(index)}
                />
              </div>
            </div>
          ))}

          <CldUploadWidget
            onSuccess={handleUpload}
            onError={(error) => {
              console.error("Upload error:", error);
            }}
            uploadPreset="lfznn3mw"
            options={{
              maxFiles: 5,
              multiple: true,
            }}
          >
            {({ open }) => (
              <div
                onClick={() => open?.()}
                className="relative cursor-pointer hover:opacity-70 transition border-dashed border-2 p-20 border-neutral-300 flex flex-col justify-center items-center gap-4 text-neutral-600 w-32 h-32"
              >
                <PlusOutlined size={24} />
                <div className="font-semibold text-sm">Upload More</div>
              </div>
            )}
          </CldUploadWidget>
        </>
      )}

      <Modal
        open={previewVisible}
        footer={null}
        onCancel={() => setPreviewVisible(false)}
      >
        <div className="w-full h-full pb-[100%] relative">
          <Image
            src={previewImage!}
            alt="Preview"
            fill
            className="object-cover"
          />
        </div>
      </Modal>
    </div>
  );
};

export default ImageMultiUpload;
