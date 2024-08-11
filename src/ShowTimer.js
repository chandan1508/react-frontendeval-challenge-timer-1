
const ShowTimer = (props) => {
    const { houres, minutes, seconds, isPaused, handlePause, handleReset, handleResume} = props;
    return (
      <div className='show-container'>
        <div className='timer-box'>
           <div>{houres<10 ? `0${houres}` : houres}</div>
           <span>:</span>
           <div>{minutes<10 ? `0${minutes}` : minutes}</div>
           <span>:</span>
           <div>{seconds<10 ? `0${seconds}` : seconds}</div>
        </div>
        <div className='action-box'>
           {
            !isPaused && (
              <button className='timer-button' onClick={handlePause}>Pause</button>
            )
           }
           {
            isPaused && (
              <button className='timer-button' onClick={handleResume}>Resume</button>
            )
           }
           <button className='timer-button' onClick={handleReset} >Reset</button>
        </div>
      </div>
    )
}

export default ShowTimer;