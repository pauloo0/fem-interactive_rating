import starIcon from './assets/images/icon-star.svg'
import thankYouIllustration from './assets/images/illustration-thank-you.svg'

import { useState } from 'react'

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [rating, setRating] = useState(0)

  const handleRating = (value: number) => {
    setRating(value)
  }

  const handleSubmit = () => {
    if (rating !== 0) {
      setIsSubmitted(true)
    } else {
      alert('Please select a rating.')
    }
  }

  return (
    <div className='min-h-screen bg-very_dark_blue grid place-items-center font-overpass'>
      {!isSubmitted ? (
        <main className='w-[375px] h-[375px] bg-gradient-to-tl from-very_dark_blue to-dark_blue p-6 rounded-2xl flex flex-col justify-center items-start text-white'>
          <img
            src={starIcon}
            alt='Star Icon'
            className='p-4 bg-dark_blue rounded-full'
          />
          <h1 className='my-4 text-2xl font-bold'>How did we do?</h1>
          <p className='mb-4 text-paragraph text-medium_grey'>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering
          </p>
          <div className='w-full mt-2 mb-4 flex justify-between items-center'>
            {[1, 2, 3, 4, 5].map(
              (item) => (
                <button
                  key={item}
                  className={`w-12 h-12 ${
                    rating !== item
                      ? 'bg-dark_blue text-medium_grey'
                      : 'bg-medium_grey text-white'
                  } rounded-full hover:bg-primary hover:text-white`}
                  onClick={() => handleRating(item)}
                >
                  {item}
                </button>
              ),
              []
            )}
          </div>
          <button
            type='button'
            className='mt-4 w-full text-center bg-primary hover:bg-white hover:text-primary rounded-full text-lg tracking-wider py-2'
            onClick={handleSubmit}
          >
            SUBMIT
          </button>
        </main>
      ) : (
        <main className='w-[375px] h-[375px] bg-gradient-to-tl from-very_dark_blue to-dark_blue p-6 rounded-2xl flex flex-col justify-center items-center text-white'>
          <img src={thankYouIllustration} alt='Thank You Illustration' />
          <p className='my-6 px-3 py-1 text-paragraph text-primary bg-dark_blue rounded-full'>
            You selected {rating} out of 5
          </p>
          <h1 className='mb-4 text-2xl font-bold'>Thank you!</h1>
          <p className='text-medium_grey text-center'>
            We appreciate you taking the time to give a rating. If you ever need
            more support. don't hesitate to get in touch!
          </p>
        </main>
      )}
    </div>
  )
}

export default App
