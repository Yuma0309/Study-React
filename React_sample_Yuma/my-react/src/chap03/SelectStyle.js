import './css/SelectStyle.css';
import cn from 'classnames';

export default function SelectStyle({ mode }) {
  return (
    // <div className={cn('box', mode === 'light' ? 'light' : 'dark')}>
    //   こんにちは、世界！
    // </div>
    // <div className={cn(
    //   'box',
    //   {
    //     'light': mode === 'light',
    //     'dark': mode === 'dark'
    //   }
    // )}>
    <div className={cn(
      'box',
      [
        'panel',
        {
          'light': mode === 'light',
          'dark': mode === 'dark'
        }
      ]
    )}>
      こんにちは、世界！
    </div>
  );
}
