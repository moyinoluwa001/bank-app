import { useState } from "react";

function Data({onPurchase}){
    const [amount, setAmount] = useState('');
    const [network, setNetwork] = useState('MTN');
    const [phoneNumber, setPhoneNumber] = useState('');


const handleDataPurchase = (e) =>{
    e.preventDefault();
    const parsedAmount = parseFloat(amount);

    if(!network){
        alert("please select network")
        return;
    }
    if(!phoneNumber){
        alert("please enter a phone number")
        return;
    }

    if(parsedAmount > 0){
        onPurchase(`Data on ${network} for ${phoneNumber}`, parsedAmount)
        setAmount('');
        setPhoneNumber('');

    }else{
        alert("please enter a vaild amount")
    }
}


return(
    <div className="container mt-4">
     <form className="w-50 mx-auto p-4 border rounded" onSubmit={handleDataPurchase}>
     <div className="form-group mb-4">
   <label>Select Network</label>
   <select
     className="form-control"
     value={network}
     onChange={(e) => setNetwork(e.target.value)}
   >
    <option value='MTN'> MTN</option>
    <option value='Glo'>Glo</option> 
    <option  value="Airtel">Airtel</option> 
    <option value= "9mobile">9mobile</option>     

   </select>
  </div> 

  <div className="form-group mb-4">
  <label>Phone Number</label>
  <input   
    type="text"
    className="form-control"
    value={phoneNumber}
    onChange={(e) => setPhoneNumber(e.target.value)}
    placeholder="Enter phone number"
  />
  </div>

  <div className="form-group mb-4">
  <label>Amount</label>
  <input   
    type="number"
    className="form-control"
    value={amount}
    onChange={(e) => setAmount(e.target.value)}
    placeholder="Enter amount"
  />
  </div>

  <button type="submit" className="btn btn-primary w-100">Buy Data</button>
    </form>   
        
    </div>

    
)



}

export default Data;

