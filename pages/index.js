import { Button } from 'react-bootstrap';

function Home() {
  return (
    <div className="text-center flex flex-col gap-16 mt-36 p-8">
      <div>
        <Button type="button" className="w-60 rounded-full border-black bg-black font-medium">
          View Orders
        </Button>
      </div>
      <div>
        <Button type="button" className="w-60 rounded-full border-black bg-black font-medium">
          Create Order
        </Button>
      </div>
      <div>
        <Button type="button" className="w-60 rounded-full border-black bg-black font-medium">
          Revenue
        </Button>
      </div>
    </div>
  );
}

export default Home;
