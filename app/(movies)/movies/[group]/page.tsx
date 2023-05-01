type GroupParams = {
  group: string;
};

const Something = ({ params }: { params: GroupParams }) => {
  return (
    <div>
      <h1>{params.group}</h1>
    </div>
  );
};

export default Something;
