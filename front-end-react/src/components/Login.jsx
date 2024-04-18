const style = 'border-solid border-2 border-amber-500';

export default function Login() {
  console.log(style);
  console.log(typeof style);

  return (
    <div>
      <button
        className="btn"
        onClick={() => document.getElementById('my_modal_2').showModal()}
      >
        Login
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click outside to close</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}
