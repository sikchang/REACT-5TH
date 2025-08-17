function Playground() {
  return (
    <div>
      <div className="bg-amber-400 sm:bg-red-400 text-neutral-800 px-l py-m">
        {" "}
        Playground{" "}
      </div>
      <a href="#">가나다라마바사</a>
      <h1>헤더 1</h1>
      <h2>헤더 2</h2>
      <h3 className="highlight">헤더 3</h3>

      <div className="card">
        <h2>카드 제목</h2>
        <button>CTA</button>
      </div>

      <div className="_card">
        <h2>카드 제목2</h2>
        <button>CTA2</button>
      </div>

      <hr className="m-3" />

      <button
        type="button"
        className="bg-sky-500 hover:bg-sky-800 px-4 py-2 rounded-full text-white hover:text-amber-500 cursor-pointer font-semibold">
        save changes
      </button>
    </div>
  );
}
export default Playground
