export interface ICustomerInterface {
    title: string;

    desc?: string;

    selected?: boolean;

    onPress?: () => void
}