import toast from 'react-hot-toast'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const ViewPaste = () => {

    const allPastes = useSelector((state) => state.paste.pastes)
    const { id } = useParams()
    const paste = allPastes.find(p => p._id === id)

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text)
        toast.success('Copied to Clipboard')
    }

    if (!paste) {
        return <p className="text-center py-10">Paste not found</p>
    }

    return (
        <div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-0'>
            
            <h2 className='text-xl sm:text-2xl underline underline-offset-4'>
                View Page
            </h2>

            <div className='my-5 flex flex-col sm:flex-row gap-3 sm:items-center'>
                <input
                    className='border-2 px-4 py-2 rounded-md border-gray-500 outline-none flex-1'
                    type="text"
                    value={paste.title}
                    disabled
                />
                <button
                    className='border border-blue-500 px-5 py-2 rounded-md text-white font-bold bg-blue-500 w-full sm:w-auto'
                    onClick={() => handleCopy(paste.content)}
                >
                    Copy
                </button>
            </div>

            <textarea
                className='border-2 px-4 py-2 rounded-md border-gray-500 outline-none w-full h-[30vh] sm:h-[40vh]'
                value={paste.content}
                disabled
            />
        </div>
    )
}

export default ViewPaste
