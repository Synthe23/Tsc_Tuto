type GreetProps = {
  name: string;
  shout?: boolean;
};

export function GreetA({ name = "Guest", shout = false }: GreetProps) {
    const text = shout ? name.toUpperCase() : name;
    return <p>Hi {text}</p>;
}

// export function greetB(props: GreetProps){
//     const name = props.name ?? 'Guest';
//     const shout = props.shout ?? false;
// }