
export interface IContent {
    title: string;
    description?: string;
    required?: boolean;
    multiLang?: boolean;
    values: {
        [id: string]: string | string[]
    };
}
