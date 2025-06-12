import '../stories/button.css';

/**
 * 属性の設定に応じて種々のボタンを生成
 */
export default function MyButton ({
    primary = false,
    backgroundColor = null,
    size = 'medium',
    label = 'Button',
    ...props
  }) {
  // primary属性に応じてスタイルクラスを決定
  const mode = primary ?
    'storybook-button--primary' : 'storybook-button--secondary';
  return (
    /* Propsをもとにbutton要素を組み立て */
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
