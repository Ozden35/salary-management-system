import Card from "../UI/Card";
import Button from '../UI/Button';

const AddWorker = () => {
  return (
    <Card className="mt-10">
    <form className="flex flex-col gap-y-2">
      <label htmlFor="name" className="font-medium"> Çalışan İsmi </label>
      <input className="max-w-[40rem] w-full mx-auto border p-2" type="text" placeholder="Çalışan ismi yazınız" id="name"/>
      <label htmlFor="wage" className="font-medium"> Maaş Miktarı </label>
      <input className="max-w-[40rem] w-full mx-auto border p-2"  type="number" placeholder="Maaş miktarı yazınız" id="wage" />
      <Button className=" mt-2">Ekle</Button>
    </form>
    </Card>
  );
};

export default AddWorker;
