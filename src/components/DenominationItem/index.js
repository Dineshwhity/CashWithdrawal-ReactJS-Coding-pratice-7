// Write your code here
import "./index.css"
const DenominationItem=props=>{
    const {denominationDetails,updatedBalance}=props
    const{value}=denominationDetails

    const onClickDenomination=()=>{
        updatedBalance(value)
    }
    return(
        <li className="Denomination-list">
        <button type="button" className="button" onClick={onClickDenomination}>{value}
        </button>
        </li>
    )
}

export default DenominationItem
