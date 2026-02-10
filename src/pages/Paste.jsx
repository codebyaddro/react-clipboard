import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFormPaste, resetAllPaste } from '../reduxSlice/pasteSlice';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Paste = () => {

    const pastes = useSelector((state) => state.paste.pastes);
    const dispatch = useDispatch()
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate()

    const filteredData = pastes.filter((paste) => {
        return paste.title.toLowerCase().includes(searchTerm.toLowerCase())
    })

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text)
        toast('Copied to Clipboard')
    }
    const handleShare = async (text) => {
        const isMobile = /Android|iPhone|iPad/i.test(navigator.userAgent);

        if (isMobile && navigator.share) {
        try {
        await navigator.share({
            title: "My Note",
            text,
        });
        } catch (err) {
            toast("Share cancelled", err);
        }
        } else {
        await navigator.clipboard.writeText(text);
            toast("Copied to clipboard");
        }
    };

    function handleDelete(pasteId) {
        dispatch(removeFormPaste(pasteId))
    }

    function handleReset() {
        dispatch(resetAllPaste())
    }

    return (
        <div className='w-full max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-0'>
            {/* filter box */}
            <div className='my-5 flex flex-col sm:flex-row gap-3 items-start sm:items-center'>
                <input
                    className='border-2 px-4 py-2 rounded-md border-gray-500 outline-none flex-1 w-full'
                    type="text"
                    placeholder='Enter text here'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                    onClick={handleReset}
                    className='border border-red-500 px-5 py-2 rounded-md text-white text-md font-bold bg-red-500 cursor-pointer w-full sm:w-auto'
                >
                    Reset All
                </button>
            </div>
            <hr className='border-none h-1 bg-gray-500 my-4 w-1/2 mx-auto rounded' />
            {/* paste showing */}
            <div className="flex flex-col gap-4">
            {filteredData.length > 0 &&
                filteredData.map((paste, index) => {
                return (
                    <div
                        key={index}
                        className="border-2 px-4 py-3 rounded-md border-gray-500 flex flex-col md:flex-row justify-between items-start gap-3"
                    >
                        <div className="flex-1">
                            <h3 className="text-xl font-bold">
                                {paste.title}
                            </h3>
                            <p className="text-sm mt-1 line-clamp-3">
                                {paste.content}
                            </p>
                        </div>

                        <div className="flex flex-col justify-between items-start md:items-end h-full min-w-30 gap-2 md:gap-3">
                            <div className="flex flex-wrap md:flex-col gap-2 md:gap-3 text-sm font-medium text-blue-600">
                                <span
                                    className="cursor-pointer hover:underline"
                                    onClick={() => navigate(`/?pasteId=${paste?._id}`)}
                                >
                                    Edit
                                </span>
                                <span 
                                    className="cursor-pointer hover:underline"
                                    onClick={() => navigate(`/pastes/${paste?._id}`)}
                                >
                                    View
                                </span>
                                <span
                                    className="cursor-pointer hover:underline"
                                    onClick={() => handleCopy(paste?.content)}
                                >
                                    Copy
                                </span>
                                <span
                                    className="cursor-pointer hover:underline"
                                    onClick={() => handleShare(paste?.content)}
                                >
                                    Share
                                </span>
                                <span
                                    className="cursor-pointer hover:underline text-red-500"
                                    onClick={() => handleDelete(paste?._id)}
                                > 
                                    Delete
                                </span>
                            </div>

                            <div className="text-xs text-gray-500 mt-1 md:mt-3">
                                {paste.createdAt}
                            </div>
                        </div>
                    </div>
                )
                })}
            </div>

        </div>
    )
}

export default Paste
