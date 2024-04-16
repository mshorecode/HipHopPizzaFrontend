import { Button } from 'react-bootstrap';

function Home() {
  return (
    <div className="text-center flex flex-col gap-16 mt-36 p-8">
      <div>
        <Button type="button" className="w-60 rounded-full border-white border-[2px] bg-black font-medium" href="/orders">
          View Orders
        </Button>
      </div>
      <div>
        <Button type="button" className="w-60 rounded-full border-white border-[2px] bg-black font-medium">
          Create Order
        </Button>
      </div>
      <div>
        <Button type="button" className="w-60 rounded-full border-white border-[2px] bg-black font-medium">
          Revenue
        </Button>
      </div>
    </div>
  );
}

export default Home;
