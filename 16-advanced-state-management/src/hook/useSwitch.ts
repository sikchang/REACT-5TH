import { useCallback, useId, useState } from 'react';

type UseSwitchOptions = {
  defaultChecked?: boolean;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  id?: string;
  disabled?: boolean;
}


export function useSwitch(opts: UseSwitchOptions = {}) {
  const {
    defaultChecked = false,
    checked,
    onChange,
    id,
    disabled = false
  } = opts;

  // uncontrolled state
  const [uncontrolled, setUncontrolled] = useState(defaultChecked);

  const reactId = useId();

  const isControlled = checked !== undefined;
  const isChecked = isControlled ? checked : uncontrolled;

  const setChecked = useCallback( // 버튼을 눌렀을 때 강제 지정
    (next: boolean) => {
      if (!isControlled) setUncontrolled(next);
      onChange?.(next);
    },
    [isControlled, onChange]
  );

  const toggle = useCallback(() => {
    if (disabled) return;
    setChecked(!isChecked);
  }, [disabled, isChecked, setChecked]);

  const a11yProps = {
    // 태그의 속성
    id: id ?? reactId,
    role: "switch" as const,
    "aria-checked": isChecked,
    "aria-disabled": disabled || undefined,
    tabIndex: disabled ? -1 : 0,
    // event binding
    onClick: () => toggle(),
    onKeyDown: (e: React.KeyboardEvent) => {
      if (disabled) return;
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault(); // prevent scrolling on space key
        toggle();
      }
      if (e.key === "ArrowLeft") setChecked(false);
      if (e.key === "ArrowRight") setChecked(true);
    },
  };

  return { checked: isChecked, setChecked, toggle, a11yProps, disabled };
}
