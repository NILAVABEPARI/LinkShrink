import { Copy, Download, LinkIcon, Trash, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import useFetch from "@/hooks/use-fetch";
import { deleteUrl } from "@/db/apiUrls";
import { BeatLoader } from "react-spinners";
import { useState } from "react";

const LinkCard = ({ url = [], fetchUrls }) => {
    const [copyClicked, setCopyClicked] = useState(false);

    const downloadImage = async () => {
        try {
            const imageUrl = url?.qr;       // Image URL to download
            const fileName = url?.title;    // Desired file name for the downloaded image

            // Fetch the image and convert it to a blob
            const response = await fetch(imageUrl);
            const blob = await response.blob();
            console.log('blob -> ', blob);

            // Create a blob URL for the image
            const blobUrl = URL.createObjectURL(blob);
            console.log('blobUrl -> ', blobUrl);

            // Create an anchor element
            const anchor = document.createElement("a");
            anchor.href = blobUrl;
            anchor.download = fileName || "download";  // Fallback name if fileName is not defined

            // Append the anchor to the body
            document.body.appendChild(anchor);

            // Trigger the download by simulating a click event
            anchor.click();

            // Clean up by removing the anchor and revoking the blob URL
            document.body.removeChild(anchor);
            URL.revokeObjectURL(blobUrl);
        } catch (error) {
            console.error("Failed to download image:", error);
        }
    };

    const copyLink = () => {
        navigator.clipboard.writeText(`https://linkshrink.netlify.app/${url?.short_url}`)
        setCopyClicked(true);

        setTimeout(() => {
            setCopyClicked(false);
        }, 3000); // reset the copy icon after 3 seconds
    }

    const { loading: loadingDelete, fn: fnDelete } = useFetch(deleteUrl, url.id);

    return (
        <div className="flex flex-col md:flex-row gap-5 border p-4 bg-gray-900 rounded-lg">
            <img
                src={url?.qr}
                className="h-32 object-contain ring ring-blue-500 self-start"
                alt="qr code"
            />
            <Link to={`/link/${url?.id}`} className="flex flex-col flex-1">
                <span className="text-3xl font-extrabold hover:underline cursor-pointer">
                    {url?.title}
                </span>
                <span className="text-2xl text-blue-400 font-bold hover:underline cursor-pointer">
                    https://linkshrink.netlify.app/{url?.custom_url ? url?.custom_url : url.short_url}
                </span>
                <span className="flex items-center gap-1 hover:underline cursor-pointer">
                    <LinkIcon className="p-1" />
                    {url?.original_url}
                </span>
                <span className="flex items-end font-extralight text-sm flex-1">
                    {new Date(url?.created_at).toLocaleString()}
                </span>
            </Link>
            <div className="flex gap-2">
                <Button
                    variant="ghost"
                    onClick={copyLink}
                >
                    {copyClicked ? <Check /> : <Copy />}
                </Button>
                <Button variant="ghost" onClick={downloadImage}>
                    <Download />
                </Button>
                <Button
                    variant="ghost"
                    onClick={() => fnDelete().then(() => fetchUrls())}
                    disable={loadingDelete}
                >
                    {loadingDelete ? <BeatLoader size={5} color="white" /> : <Trash />}
                </Button>
            </div>
        </div>
    );
};

export default LinkCard;