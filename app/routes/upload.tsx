import FileUploader from 'components/FileUploader';
import Navbar from 'components/Navbar'
import { useState } from 'react'
const upload = () => {
    const[isProcessing, setIsProcessing] = useState(false);
    const[statusText, setStatusText] = useState('');
    const [file, setFile] = useState<File | null>(null);


    const handleFileSelect = (file: File | null) => {
        setFile(file);
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        
    }


  return (
    <main className='bg-[url("/images/bg-main.svg")]'>
        <Navbar />

        <section className='main-section'>
            <div className='page-heading py-14'>
                <h1>Smart  feedback for your dream job</h1>
                
                {isProcessing ? (
                    <>
                    <h2>{statusText}</h2>
                    <img src='/images/resume-scan.gif' className='w-full'/>
                    </>
                ) : (
                    <h2>Drop Your resume for an ATS score and improvement tips</h2>
                )}

                {!isProcessing && (
                    <form id='upload-form' onSubmit={handleSubmit} className='flex flex-col gap-4 mt-8'>
                        <div className='form-div'>
                         <label htmlFor="company-name">Company Name</label>
                        <input type="text" name="company-name" placeholder='Company Name' id="company-name"/>   
                        </div>
                        <div className='form-div'>
                         <label htmlFor="job-title">Job Title</label>
                        <input type="text" name="Job-Title" placeholder='Job Title' id="job-title"/>   
                        </div>
                        <div className='form-div'>
                         <label htmlFor="Job-description">Job Description</label>
                        <textarea rows={5} name="job-description" placeholder='Job Description' id="job-description"/>   
                        </div>
                        <div className='form-div'>
                         <label htmlFor="uploader">Upload Resume</label>
                        <FileUploader onFileSelect={handleFileSelect}/>
                        </div>

                        <button className='primary-button' type='submit'>
                            Analyze Resume
                        </button>
                    </form>
                )}





            </div>
        </section>



    </main>




  )
}

export default upload