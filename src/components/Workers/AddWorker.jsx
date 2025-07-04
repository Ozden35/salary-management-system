import Card from "../UI/Card";
import Button from '../UI/Button';
import { useState, useRef } from "react";
import ErrorModal from "../UI/ErrorModal";
import {Fragment} from 'react';


const AddWorker = (props) => {

    const[error, setError] = useState();
    const nameInputRef = useRef();
    const wageInputRef = useRef();


    // useEffect(() => {
    //   console.log("çalıştı");
    // },[])

    const minimumWage =22104;

    const addWorkerHandler = (e) =>{
        e.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredWage = wageInputRef.current.value;
        if(nameInputRef.current.value.trim().length === 0 )
        {
          setError({
            title:"İsim alanı zorunludur!",
            message:"Lütfen bir isim girerek tekrar deneyiniz!"
          })
            return;
        }
        if(wageInputRef.current.value.trim().length === 0)
        {
          setError({
            title:"Maaş alanı zorunludur!",
            message:"Lütfen bir maaş girerek tekrar deneyiniz!"
          })
            return;
        }

        if(+wageInputRef.current.value <= minimumWage)
        {
          setError({
            title:"Hatalı maaş girişi!",
            message:`Maaş miktarı ${minimumWage}₺'den az olamaz!`
          })
          return;
        }

        props.setWorkers((prevState) =>[
            {
              id: Math.floor(Math.random()*100000),
                name: enteredName,
                wage: enteredWage
           },
            ...prevState,
       ])
            nameInputRef.current.value=""
            wageInputRef.current.value=""
    }

const errorHandler=() =>{
   setError(null);
}

  return (
    <Fragment>
    {error && <ErrorModal setWorkers={props.setWorkers} onConfirm={errorHandler} error={error}/>}
    <Card className="mt-10">
    <form className="flex flex-col gap-y-2" onSubmit={addWorkerHandler}>
      <label htmlFor="name" className="font-medium"> Çalışan İsmi </label>
      <input className="max-w-[40rem] w-full mx-auto border p-2" type="text" placeholder="Çalışan ismi yazınız" id="name" ref={nameInputRef}/>
      <label htmlFor="wage" className="font-medium"> Maaş Miktarı </label>
      <input className="max-w-[40rem] w-full mx-auto border p-2"  type="number" placeholder="Maaş miktarı yazınız" id="wage" ref={wageInputRef}/>
      <Button className=" mt-2">Ekle</Button>
    </form>
    </Card>
    </Fragment>
  );
};

export default AddWorker;
