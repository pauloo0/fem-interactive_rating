import starIcon from './assets/images/icon-star.svg'
import thankYouIllustration from './assets/images/illustration-thank-you.svg'

function App() {
  let isSubmitted = false

  return (
    <div className='min-h-screen bg-very_dark_blue grid place-items-center box-border'>
      {!isSubmitted ? (
        <main className='flex flex-col justify-between items-start'>
          <img src={starIcon} alt='Star Icon' />
          <h1>How did we do?</h1>
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering
          </p>
          <section id='ratings'>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
          </section>
          <button type='button'>SUBMIT</button>
        </main>
      ) : (
        <main className='flex flex-col justify-between items-center'>
          <img src={thankYouIllustration} alt='Thank You Illustration' />
          <p>You selected X out of 5</p>
          <h1>Thank you!</h1>
          <p>
            We appreciate you taking the time to give a rating. If you ever need
            more support. don't hesitate to get in touch!
          </p>
        </main>
      )}
    </div>
  )
}

export default App
