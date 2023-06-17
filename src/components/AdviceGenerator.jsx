/* eslint-disable react/prop-types */
import { api } from "../api/AdviceAPI"

export const AdviceGenerator = (props) => {
    function generateAdvice() {
        api.get('/advice').then((res) => {
            props.generate(res.data.slip)
          }).catch((error) => {
            console.log(error)
          })
    }

  return (
    <div className="button-wrapper">
        <button className="button" onClick={generateAdvice}>Go</button>
    </div>
  )
}
