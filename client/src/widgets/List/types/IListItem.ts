export interface IListItem {
    description: string;
    id: number,
    name: string,
    type: {value: string, label: string},
    location: string,
}