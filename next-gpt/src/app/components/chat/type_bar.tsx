import { ELEMETNS } from "@config/const";

export function TypeBar() {

  return (
    <div>
      <div>
        <form>
          <textarea id={ELEMETNS.ID.TEXT_AREA}></textarea>
          <button id={ELEMETNS.ID.SUBMIT}>Submit</button>
        </form>
      </div>
    </div>
  )
}
