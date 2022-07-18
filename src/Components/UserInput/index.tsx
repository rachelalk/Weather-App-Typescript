interface UserInputProps {
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	value: string;
}

export default function UserInput({ onChange, value }: UserInputProps) {
	return <input value={value} onChange={onChange} placeholder="Enter city..."></input>;
}