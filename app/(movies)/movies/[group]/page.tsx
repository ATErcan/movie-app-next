type GroupParams = {
  group: string;
};

const Something = ({ params }: { params: GroupParams }) => {
  return (
    <div className="bg-black text-white pt-4 px-4 pb-8">
      <div className="flex flex-wrap gap-6 justify-center max-w-7xl mx-auto"></div>
      <h1>{params.group}</h1>
    </div>
  );
};

export default Something;
