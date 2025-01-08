function Empty({ resourceName }) {
  return (
    <div className="flex gap-x-1 p-4 rounded-xl bg-secondary-200">
      <p className="font-medium text-secondary-700">{resourceName}</p>
      <p className="text-secondary-700">وجود ندارد!</p>
    </div>
  );
}

export default Empty;
