export interface BlaProps {
  title: string;
}

export const Bla = (props: BlaProps) => {
  return <div style={{ background: 'red' }}>{props.title}</div>;
};
