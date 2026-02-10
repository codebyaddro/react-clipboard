import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { addToPaste, updateToPaste } from '../reduxSlice/pasteSlice';

const Home = () => {

    const [title, setTitle] = useState('');
    const [value, setValue] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const pasteId = searchParams.get('pasteId');
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const allPastes = useSelector((state) => state.paste.pastes)
    useEffect(()=>{
        if(pasteId) {
            const paste = allPastes.find(p => p._id === pasteId);
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setTitle(paste.title);
            setValue(paste.content);
        }
    }, [pasteId, allPastes])

    function createPaste() {
        const paste = {
            title,
            content: value,
            _id: pasteId || Date.now().toString(23),
            createdAt: new Date().toISOString()
        }

        if(pasteId) {
            // update
            dispatch(updateToPaste(paste))
        } else {
            // create
            dispatch(addToPaste(paste))
        }

        setTimeout(() => {
            navigate('/pastes')
        }, 1000)

        setTitle('')
        setValue('')
        setSearchParams({})
    }

    return (
        <div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-0'>

            <div>
                <h2 className='text-xl sm:text-2xl underline underline-offset-4'>
                    Home Page
                </h2>
            </div>

            <div className='my-5 flex flex-col sm:flex-row gap-3 sm:items-center'>
                <input
                    className='border-2 px-4 py-2 rounded-md border-gray-500 outline-none flex-1'
                    type="text"
                    placeholder='Enter text here'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <button
                    onClick={createPaste}
                    className='border border-blue-500 px-5 py-2 rounded-md text-white font-bold bg-blue-500 w-full sm:w-auto'
                >
                    {pasteId ? 'Update' : 'Create Paste'}
                </button>
            </div>
            
            <div>
                <textarea
                    className='border-2 px-4 py-2 rounded-md border-gray-500 outline-none w-full h-[30vh] sm:h-[40vh]'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder='Enter content here'
                >
                </textarea>
            </div>
        </div>
    )
}

export default Home