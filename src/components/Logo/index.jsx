import s from "./style.module.css";
export function Logo({ image, name, job, onClick }) {
  return (
    <div className={s.container} onClick={onClick}>
      <div>
        {image}
      </div>
      <div className={s.name}>
        {name}
      </div>
      <div>
        {job}
      </div>
    </div>
  );
}
