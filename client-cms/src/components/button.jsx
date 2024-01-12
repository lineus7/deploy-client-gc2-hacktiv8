export const Button = ({ context }) => {
  return (
    <>
      <button
        type="submit"
        className="rounded border bg-yellow-200 w-full mt-[30px]"
      >
        {context}
      </button>
    </>
  );
};
