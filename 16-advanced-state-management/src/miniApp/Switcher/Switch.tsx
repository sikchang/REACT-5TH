// import { useSwitch } from '@/hook/useSwitch';
import { useSwitch } from '@/hook/useSwitchReducer';
import './switch.css'

interface Props {
  defaultChecked?: boolean;
  checked?: boolean;
  onChange?: (next: boolean) => void;
  disabled?: boolean;
  id?: string;
  size?: 'sm' | 'md' | 'lg';
}

function Switcher({ size = 'md', ...restProps }:Props) {

  const {checked, disabled, a11yProps, setChecked} = useSwitch(restProps);

  // const checked = false;
  // const disabled = false;

  return (
    <>
      <button
        type="button"
        {...a11yProps}
        className={[
          "switch",
          `switch--${size}`,
          checked ? "is-on" : "is-off",
          disabled ? "is-disabled" : "",
        ].join(" ")}>
        <span className="switch__track"></span>
        <span className="switch__thumb"></span>
      </button>
      <button type="button" onClick={() => setChecked(!checked)}></button>
    </>
  );
}
export default Switcher
