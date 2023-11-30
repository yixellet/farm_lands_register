import styles from './Button.module.css';

export const Button = ({ label, action, style }) => {

  return (
    <button className={ styles(style) }
      onClick={(e) => { e.preventDefault(); action() }}>{ label }</button>
  )
};
